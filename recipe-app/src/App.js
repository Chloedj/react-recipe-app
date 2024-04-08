import React from 'react'
import { About, AppCTA, Community, Discover, Footer, Hero, Navbar } from './containers'
import { CommunityRecipe, RecipeCard } from './components'
import './App.css'


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Hero />
      </div>
      <Discover />
      <About />
      <Community />
      <AppCTA />
      <Footer />
      </div>
  )
}

export default App
