import React from 'react'
import { Item } from '../../types/Item'
import { TableItem } from '../TableItem'

type Props = {
  list: Item[]
}

export function TableArea({ list }: Props) {
  return (
    <table className="mt-10 table-fixed w-[90vw] max-h-6 mx-auto rounded-lg bg-red-300 shadow-md">
      <thead>
        <tr className="">
          <th className="w-20 md:w-36 p-4 md:text-xl text-left">Data</th>
          <th className="w-20 md:w-36 p-4 md:text-xl text-left">Categoria</th>
          <th className="md:w-auto p-4 md:text-xl text-left">Título</th>
          <th className="w-20 md:w-28 p-4 md:text-xl text-righ">Valor</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} item={item} index={index} />
        ))}
      </tbody>
    </table>
  )
}
