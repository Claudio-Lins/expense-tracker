import React from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'
import { formatCurrentMonth } from '../../helpers/dateFilter'

type Props = {
  currentMonth: string
  onMonthChange: (newMonth: string) => void
}

export function InfoArea({ currentMonth, onMonthChange }: Props) {
  const mes = Intl.DateTimeFormat('pt-PT', { month: 'short' }).format(
    new Date(currentMonth)
  )
  const ano = Intl.DateTimeFormat('pt-PT', { year: 'numeric' }).format(
    new Date(currentMonth)
  )

  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split('-')
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
    currentDate.setMonth(currentDate.getMonth() - 1)
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
  }

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split('-')
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
    currentDate.setMonth(currentDate.getMonth() + 1)
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
  }

  return (
    <>
      <div className="w-full -mt-[80px] flex justify-center items-center mx-auto">
        <div
          id="monthArea"
          className="flex items-center justify-start space-x-4"
        >
          <BsArrowLeftSquareFill
            onClick={handlePrevMonth}
            size={30}
            className="cursor-pointer text-white"
          />
          <div className="flex flex-col bg-white items-center justify-center -space-y-1 rounded-lg border p-2 font-bold uppercase text-purple-600 shadow-md">
            <div>{mes.slice(0, 3)}</div>
            <div>{ano}</div>
          </div>
          <BsArrowRightSquareFill
            onClick={handleNextMonth}
            size={30}
            className="cursor-pointer text-white"
          />
        </div>
      </div>
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
