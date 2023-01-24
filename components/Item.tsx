import React from 'react'

type Props = {
    name: string
    price: number
    date: Date
}

const Item = ({ name, price, date }: Props) => (
    <div className="flex flex-row justify-between">
        <div></div>
    </div>
)

export default Item