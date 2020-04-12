import React from 'react'
import FlipMove from 'react-flip-move'
import './Pause.css'

export const Pause = ({ toplist }) => {
  return (
    <div className="container">
      <h1>Brokkoleaderboard</h1>
      <FlipMove>
        {toplist.map((user, index) => (
          <ToplistItem
            key={user.username}
            user={user}
            rank={index + 1}
          ></ToplistItem>
        ))}
      </FlipMove>
    </div>
  )
}

class ToplistItem extends React.Component {
  render() {
    return (
      <div className="item">
        {this.props.rank < 4 ? (
          <span className={`star-${this.props.rank}`}>★</span>
        ) : null}
        <div className="rank">{this.props.rank}</div>
        <div className="user">
          <h3>{this.props.user.username}</h3>
          <span className="points">{this.props.user.points} 🥦</span>
        </div>
      </div>
    )
  }
}
