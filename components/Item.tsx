import React, { ReactNode } from 'react'

type Props = {
    name: string
    price: number
    date: Date
}

const month: Array<string> = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const Item = ({ name, price, date }: Props) => (
    <div className="flex flex-row justify-between items-center bg-gray-400 rounded-lg p-2 text-white my-2">
        <div className='flex flex-col justify-center items-center border border-black rounded-lg px-4 py-2'>
            <span>{month[date.getMonth()]}</span>
            <span className='text-sm'>{date.getFullYear()}</span>
            <span className='text-xl'>{date.getDate()}</span>
        </div>
        <h3 className='flex-1 mx-2 text-xl'>{name}</h3>
        <h4 className='bg-purple-500 border-purple-700 border rounded-lg p-1'>${price}</h4>
    </div>
)

export default Item