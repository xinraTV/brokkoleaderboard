import React, { useState, useEffect } from 'react'
import { Pause } from './components/Pause'
import './App.css'

const devTopList = [
  { username: 'testuser2', points: 1337 },
  { username: 'testuser3', points: 420 },
  { username: 'testuser1', points: 42 },
  { username: 'testuser4', points: 3 },
  { username: 'testuser5', points: 2 },
  { username: 'testuser6', points: 1 },
]

function refreshToplist() {
  var head = document.getElementsByTagName('head')[0]
  var script = document.createElement('script')
  script.src = '../toplist.js'
  head.appendChild(script)
}

function App() {
  const [toplist, setToplist] = useState(
    process.env.NODE_ENV === 'production' ? [] : devTopList
  )
  window.setToplist = (data) => {
    const newTopList = []
    for (const username of Object.keys(data)) {
      newTopList.push({ username, points: data[username] })
    }
    newTopList.sort((u1, u2) => u2.points - u1.points)
    setToplist(newTopList)
  }
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      refreshToplist()
      const intervalId = setInterval(refreshToplist, 3000)
      return () => clearInterval(intervalId)
    }
  }, [])
  return <Pause toplist={toplist}></Pause>
}

export default App
