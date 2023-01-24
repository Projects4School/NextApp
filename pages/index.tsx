import type { NextPage } from 'next'
import Item from '../components/Item'

const items = [
    {
        name: "Test",
        price: 199.99,
        date: new Date()
    },
    {
        name: "Test 2",
        price: 299.99,
        date: new Date()
    }
]

const Home: NextPage = () => {
    return (
        <div className='flex min-h-screen flex-col items-center justify-center'>
            <div className='border-black border rounded-lg p-4 shadow-lg container'>
                {items.map(item => <Item name={item.name} price={item.price} date={item.date}></Item>)}
            </div>
        </div>
    )
}

export default Home