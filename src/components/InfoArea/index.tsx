import React from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'

type Props = {
  currentMonth: string
}

export function InfoArea({ currentMonth }: Props) {
  return (
    <div className="-mt-10 flex w-full table-auto overflow-hidden rounded-lg bg-white p-5 shadow-md">
      <div
        id="monthArea"
        className="flex flex-1 items-center justify-start space-x-4"
      >
        <BsArrowLeftSquareFill
          size={30}
          className="cursor-pointer text-purple-600"
        />
        <div className="flex flex-col items-center justify-center -space-y-1 rounded-lg border p-2 font-bold uppercase text-purple-600 shadow-md">
          <div>
            {Intl.DateTimeFormat('pt-PT', { month: 'short' })
              .format(new Date(currentMonth))
              .slice(0, 3)}
          </div>
          <div>
            {Intl.DateTimeFormat('pt-PT', { year: 'numeric' }).format(
              new Date(currentMonth)
            )}
          </div>
        </div>
        <BsArrowRightSquareFill
          size={30}
          className="cursor-pointer text-purple-600"
        />
      </div>
      <div id="tituloArea" className="flex-1">
        Titulo
      </div>
      <div id="resumeArea" className="flex">
        Resume
      </div>
    </div>
  )
}
