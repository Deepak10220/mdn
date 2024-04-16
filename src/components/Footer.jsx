import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-pink-700 text-white text-center pb-5'>
        <h1 className='text-4xl mb-5 pt-5 font-semibold'>Think Health, Think Massage.</h1>
        <p>we are open 9am to 6pm , monday to saturday, if you would like to schedule an apppoinment</p>
        <p className='mb-5'>with us , please contact us 987-654-321</p>
        <div className='flex justify-center items-center'>
        <button className=' border px-4 py-2 mr-4'>Let us more about</button>
        <button className=' border px-4 py-2'>Contact us today</button>
        </div>
    </div>
  )
}

export default Footer