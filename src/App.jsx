import React from 'react'

function App() {
  return (
    <div className='w-[40%] m-5 '>
    <h1 className='text-4xl'>Topics covered</h1>
    <p className='mt-4 mb-4'>The following is a list of all the topics we cover in the MDN learning area.</p>
    <div className='mb-5'>
    <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="">Getting started with the web</a>
      <p>HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.</p>
    </div>
    <div className='mb-5'>
      <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"  href="">CSS — Styling the web</a>
      <p>CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.</p>
    </div>
    <div className='mb-5'>
      <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"  href="">JavaScript — Dynamic client-side scripting</a>
      <p>JavaScript is the scripting language used to add dynamic functionality to web pages. This topic teaches all the essentials needed to become comfortable with writing and understanding JavaScript.</p>
    </div>
    </div>
  )
}

export default App