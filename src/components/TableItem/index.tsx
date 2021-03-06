import React from 'react'
import { Item } from '../../types/Item'
import { categories } from '../../data/categories'

type Props = {
  item: Item
  index: number
}

export function TableItem({ item, index }: Props) {
  return (
    <tr className={`${index % 2 === 0 ? 'bg-purple-200' : 'bg-white'}`}>
      <td className="p-4 text-xs md:text-base">
        {new Intl.DateTimeFormat('pt-PT').format(item.date)}
      </td>
      <td
        className={`${
          categories[item.category].expense
            ? 'font-bold text-red-600 text-xs md:text-base'
            : 'font-bold text-blue-700 text-xs md:text-base'
        }`}
      >
        {categories[item.category].title}
      </td>
      <td className="p-4 text-xs md:text-base">{item.title}</td>
      <td
        className={`${
          categories[item.category].expense
            ? 'p-4 text-right font-bold text-red-600 text-xs md:text-base'
            : 'p-4 text-right font-bold text-blue-700 text-xs md:text-base'
        }`}
      >
        {new Intl.NumberFormat('pt-PT', {
          style: 'currency',
          currency: 'EUR',
        }).format(item.amount)}
      </td>
    </tr>
  )
}
