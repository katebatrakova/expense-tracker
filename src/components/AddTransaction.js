import React, { useState } from 'react'

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <>
      <h3>Add new transaction</h3>

      <form>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input value={text} onChange={(event) => setText(event.target.value)} type='text' placeholder='Enter text for...' />
        </div>

        <div className='form-control'>
          <label htmlFor='amount'>Amount <br />(negative - expense, positive - income)</label>
          <input value={amount} onChange={(event) => setAmount(event.target.value)} type='number' placeholder='Enter amount...' />
        </div>


      </form>
    </>
  )
}


export default AddTransaction;