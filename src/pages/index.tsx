import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Item } from '../types/Item'
import { Category } from '../types/Category'
import { items } from '../data/items'
import { categories } from '../data/categories'
import { useEffect, useState } from 'react'
import { getCurrentMonth, getCurrentWeek, filterListByMonth, filterListByDay, getCurrentDay } from '../helpers/dateFilter'
import { TableArea } from '../components/TableArea'
import { InfoArea } from '../components/InfoArea'
import { ModalComponent } from '../components/assets/Modal'

const Home: NextPage = () => {


  const [isResumeOpen, setIsResumeOpen] = useState(false)

  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [filteredListByDay, setFilteredListByDay] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [currentWeek, setCurrentWeek] = useState(getCurrentWeek())
  const [currentDay, setCurrentDay] = useState(getCurrentDay())



  useEffect(() => {
    setFilteredListByDay(filterListByDay(list, currentMonth))
  }, [list, currentMonth])

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  const handlerMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }


  function handleOpneResumeModal() {
    setIsResumeOpen(true)
  }

  function handleCloseResumeModal() {
    setIsResumeOpen(false)
  }

  return (
    <div id="container">
      <div
        id="header"
        className="h-48 bg-purple-700 shadow shadow-purple-700/50"
      >
        <h1 className="pt-8 text-center text-5xl font-bold text-white drop-shadow-sm">
          Controle Financeiro
        </h1>
      </div>
      <div id="content" className="mx-auto mb-10 max-w-5xl">
        <ModalComponent
        ariaHideApp={false}
        isOpen={isResumeOpen}
        onRequestClose={handleCloseResumeModal}
          
        >
          <InfoArea
            onMonthChange={handlerMonthChange}
            currentMonth={currentMonth}
          />
          <TableArea list={filteredList} />
          <div className="flex items-center justify-center">
            <button
              onClick={handleCloseResumeModal}
              className="mt-10 w-full md:w-1/3 rounded-xl bg-red-600 py-2 px-4 font-bold text-white hover:bg-purple-700"
            >
              Fechar
            </button>
          </div>
        </ModalComponent>
        
        {/* Resumo */}
       
        <div className="flex flex-col mt-10">
          <button
            onClick={handleOpneResumeModal}
            className="rounded-xl bg-purple-600 py-2 px-4 font-bold text-white hover:bg-purple-700"
          >
            Resume
          </button>
        </div>
        <pre>
          {JSON.stringify(filterListByDay, null, 2)}
        </pre>

        {/* Input */}

        {/* List */}
      </div>
    </div>
  )
}

export default Home
