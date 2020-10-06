import React from 'react'

const TransactionList = () => {
  return (
    <>
      <h3> History</h3>
      <ul id='list' className='list'></ul>
      {/* //will be replaced with a Transaction component */}
      <li className='minus'>
        Cash <span>-$400</span><button className='delete-btn'>x</button>
      </li>
    </>
  )
}

export default TransactionList;
