import React from 'react'
import { Item } from '../../types/Item'

type Props = {
  list: Item[]
}

export const TableArea = ({ list }: Props) => {
  return (
  
    <table
      className='w-full bg-white shadow-md rounded-lg overflow-hidden table-auto mt-10 border-separate p-4'
    >
      <thead>
        <tr>
          <th className='py-4 w-28 text-left'>Data</th>
          <th className='py-4 w-36 text-left'>Categoria</th>
          <th className='py-4 w-auto text-left'>Título</th>
          <th className='py-4 w-28 text-left'>Valor</th>
        </tr>
      </thead>
      <tbody>
      {list.map((item, index) => (
        <tr key={index}>
          <td>{item.date.getDate()}</td>
          <td>{item.category}</td>
          <td>{item.title}</td>
          <td>{item.amount}</td>
          </tr>
          ))}
      </tbody>
    </table>
  )
}
