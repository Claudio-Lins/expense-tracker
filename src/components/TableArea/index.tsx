import React from 'react'
import { Item } from '../../types/Item'
import { TableItem } from '../TableItem'

type Props = {
  list: Item[]
}

export function TableArea({ list }: Props) {
  return (
    <table className="mt-10 w-full table-auto overflow-hidden rounded-lg bg-white p-4 shadow-md">
      <thead>
        <tr className="">
          <th className="w-36 p-4 text-xl text-left">Data</th>
          <th className="w-36 p-4 text-xl text-left">Categoria</th>
          <th className="w-auto p-4 text-xl text-left">Título</th>
          <th className="w-28 p-4 text-xl text-righ">Valor</th>
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
