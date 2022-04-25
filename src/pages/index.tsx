import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Item } from '../types/Item'
import { Category } from '../types/Category'
import { items } from '../data/items'
import { categories } from '../data/categories'
import { useEffect, useState } from 'react'
import { getCurrentMonth, filterListByMonth } from '../helpers/dateFilter'
import { TableArea } from '../components/TableArea'
import { InfoArea } from '../components/InfoArea'

const Home: NextPage = () => {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())


  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  const handlerMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  return (
    <div id="container">
      <div id="header" className='bg-purple-700 h-48 shadow shadow-purple-700/50'>
        <h1 className='text-white text-center pt-8 font-bold text-5xl drop-shadow-sm'>Controle Financeiro</h1>
      </div>
      <div id="content" className='max-w-5xl mx-auto mb-10'>

        {/* Resumo */}
        <InfoArea
          onMonthChange={handlerMonthChange}
          currentMonth={currentMonth}
        />
          
        {/* Input */}
        
        {/* List */}
        <TableArea list={filteredList} />

      </div>
    </div>
  )
}

export default Home
