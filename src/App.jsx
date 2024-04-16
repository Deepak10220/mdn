import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Footer2 from './components/Footer2'
import Footer3 from './components/Footer3'
function App() {
  return (
    <div className='w-full h-screen  font-serif'>
      <h1 className='text-4xl'>Health Wellness</h1>
      <h3 className='text-2xl'>MASSAGE THERAPY</h3>
      <Navbar/>
      <img className='object-cover w-full mb-5' src='https://images.pexels.com/photos/7149181/pexels-photo-7149181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='image'/>
      <Footer/>
      <div className='w-[90%] m-auto text-center '>
        <p className='text-xs mt-4 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita id explicabo repellendus totam eius quas dolore error. Temporibus quisquam sit labore nihil sapiente magnam autem voluptatem quaerat alias et.</p>
        <p className='text-xs mt-4 mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto eos libero commodi facere, et, quam expedita maxime cupiditate temporibus molestias sint. Dolores rerum placeat possimus fugit vel iste saepe qui.</p>
        <p className='text-xs mt-4 mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt amet fugit dolor sit placeat sequi exercitationem nihil aliquid, vero, labore, autem natus vel dolores eligendi cupiditate fuga? Necessitatibus, impedit autem?</p>
      </div>
      <hr className=' mb-5 mt-5 h-1' />
      <Footer2/>
      <Footer3/>
    </div>
  )
}

export default App