import React from 'react'

function App() {
  return (
    <div className='w-[50%] m-6 '>
      <h1 className='font-semibold text-3xl'>Topics covered</h1>
      <p className='text-xl mb-5'>The following is a list of all the topics we cover in the MDN learning area.</p>
      <a className='text-xl mb-3 text-blue-400 underline' href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web">Getting started with the web</a>
      <p className='text-xl mb-5 ml-5'>Provides a practical introduction to web development for complete beginners.</p>
      <a className='text-xl mb-3 text-blue-400 underline' href="https://developer.mozilla.org/en-US/docs/Learn/HTML">HTML — Structuring the web</a>
      <p className='text-xl mb-5 ml-5'>HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.</p>
      <a className='text-xl mb-3 text-blue-400 underline' href="https://developer.mozilla.org/en-US/docs/Learn/CSS">CSS — Styling the web</a>
      <p className='text-xl mb-5 ml-5'>CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.</p>
    </div>
  )
}

export default App