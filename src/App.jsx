import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import items from "./Components/data"
import Card from "./Components/Cards"
function App() {
  const cards=items.map(item=>{
    return(
<Card
item={item}
/>
    )}
  )
  return (
    <div className="container">
{cards}
      </div>
  )
}

export default App

