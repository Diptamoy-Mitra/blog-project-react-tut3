import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const todoTitle = " Call family";
const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth();
const currentDate = date.getDate();


const headlineStyle = {
  backgroundColor: "purple",
  fontSize: "2rem",
  color: "White",
  textAlign: "Center"
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{ color: "red", fontSize: "4rem" }}>To Do App</h1>
      <h2 style={headlineStyle}>{todoTitle}</h2>
      <h3 className="headingStyle2">Call element</h3>
      <p className='largeText'>Lorem ipsum dolor sit tes, quas teneturpossimus illo libero dolorum.</p>
      <p>11/19/202</p>
      <p>{currentDate + " / " + currentMonth + " / " + currentYear}</p>
      <div className='card'>
        <h3 className='cardTitle'>Call element</h3>
        <p className='cardDesc'>Lorem ipsum dolor sit tes, quas teneturpossimus illo libero dolorum.</p>
        <p>11/19/202</p>
        <p className='cardFooter'>{currentDate + " / " + currentMonth + " / " + currentYear}</p>

      </div>
    </>
  )
}

export default App
