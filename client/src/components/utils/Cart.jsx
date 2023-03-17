import React from 'react'
import Checkout from './Checkout'

const Cart = () => {
    return (
        <div>
            <div className="container mx-auto py-2">
                <h1 className="text-3xl font-bold text-center italic mt-2">Complete Your Details</h1>
            </div>
            <div className='sm:grid sm:grid-cols-2'>
                <div>
                    <Checkout />
                </div>
            </div>

        </div>
    )
}

export default Cart