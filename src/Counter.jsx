import React from 'react'

const Counter = ({ title, count, action }) => {

  console.log('Counter', title)

  return (
    <div className="card p-1 col">
      <div className="card-body">Counte {title}</div>
      <h3 className="card-body">{count}</h3>
      <button className="btn btn-primary" onClick={action}>
        Sumar 1
      </button>
    </div>
  )
}

export default React.memo(Counter)
