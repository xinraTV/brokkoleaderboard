import React, { useState, useEffect } from 'react'
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
  const [toplist, setToplist] = useState(devTopList)
  window.setToplist = (data) => {
    const newTopList = []
    for (const username of Object.keys(data)) {
      newTopList.push({ username, points: data[username] })
    }
    newTopList.sort((u1, u2) => u2.points - u1.points)
    setToplist(newTopList)
  }
  useEffect(() => {
    refreshToplist()
  }, [])
  return (
    <div className="App">
      <h1>Brokkoleaderboard</h1>
      {JSON.stringify(toplist)}
    </div>
  )
}

export default App
