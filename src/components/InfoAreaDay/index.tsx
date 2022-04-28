import React from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'
import { formatCurrentMonth } from '../../helpers/dateFilter'

type Props = {
  currentMonth: string
  onMonthChange: (newMonth: string,) => void
}

export function InfoAreaDay({ currentMonth, onMonthChange }: Props) {

  const dia = Intl.DateTimeFormat('pt-PT', { day: 'numeric' }).format(
    new Date(currentMonth)
  )
  const mes = Intl.DateTimeFormat('pt-PT', { month: 'short' }).format(
    new Date(currentMonth)
  )
  const ano = Intl.DateTimeFormat('pt-PT', { year: 'numeric' }).format(
    new Date(currentMonth)
  )

  const handlePrevMonth = () => {
    let [year, month, day] = currentMonth.split('-')
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
    currentDate.setDate(currentDate.getDate() - 1)
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`)
  }

  const handleNextMonth = () => {
    let [year, month, day] = currentMonth.split('-')
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
    currentDate.setDate(currentDate.getDate() + 1)
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`)
  }

  return (
    <>
      <div className="w-full  flex justify-center items-center mx-auto mb-6">
        <div
          id="monthArea"
          className="flex items-center justify-start space-x-4"
        >
          <BsArrowLeftSquareFill
            onClick={handlePrevMonth}
            size={30}
            className="cursor-pointer text-purple-600"
          />
          <div className="flex flex-col bg-white items-center justify-center -space-y-1 rounded-lg border p-2 font-bold uppercase text-purple-600 shadow-md">
            <div>{dia}</div>
            <div>{mes.slice(0, 3)}</div>
            <div>{ano}</div>
          </div>
          <BsArrowRightSquareFill
            onClick={handleNextMonth}
            size={30}
            className="cursor-pointer text-purple-600"
          />
        </div>
      </div>
      <hr />
      <div className="mt-10 flex w-full table-auto overflow-hidden rounded-lg bg-white p-5 shadow-md">
        <div id="tituloArea" className="flex-1">
          Titulo
        </div>
        <div id="resumeArea" className="flex">
          Resume
        </div>
      </div>
    </>
  )
}
