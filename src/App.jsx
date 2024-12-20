import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'

const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <Hero />
      <Services />
      {/* <Contact /> */}
    </main>
  )
}

export default App