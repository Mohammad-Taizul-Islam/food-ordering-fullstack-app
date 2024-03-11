import React from 'react'

const MenuItem = () => {
    return (
        <div className=" bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <div className="text-center ">
                <img src="/pizza.png" alt="pizza" className='max-h-auto max-w-24 block mx-auto' />
            </div>
            <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
            <p className="text-gray-500 text-sm" >To eate this pizza buy now  from our store </p>
            <button className="mt-4 bg-primary text-white rounded-full px-6 py-2">
                Add to cart $12
            </button>
        </div>
    )
}

export default MenuItem