import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Destinations from './components/Destinations'
import Goals from './components/Goals'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <About />
        <Destinations />
        <Goals />
      </main>
      <Footer />
    </div>
  )
}
