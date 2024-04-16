import React from 'react'

function Navbar() {
  return (
    <div>
        <ul  className='flex items-center justify-around mt-5 mb-5'>
            <li className=' bg-pink-700  w-full text-center text-white p-4 text-xl '>Home</li>
            <li className='bg-zinc-500 w-full text-center text-white p-4 text-xl'>About</li>
            <li className='bg-zinc-500 w-full text-center text-white p-4 text-xl'>Services</li>
            <li className='bg-zinc-500 w-full text-center text-white p-4 text-xl'>F&Q</li>
            <li className='bg-zinc-500 w-full text-center text-white p-4 text-xl'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar