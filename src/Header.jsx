import React from 'react'

const Header = () => {

  console.log('Header')

  return (
    <h1 className='mb-5'>App de Counters</h1>
  )
}

export default React.memo(Header)
