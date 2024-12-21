import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import WhereToBuy from './components/WhereToBuy'

const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <Hero />
      <Services />
      <WhereToBuy />
    </main>
  )
}

export default App