import React, { useState } from 'react'
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <>


      <h3>Add new transaction</h3>
      <Divider />


      <form>
        <div>
          <div className='form-control'>
            <label htmlFor='text'>Text</label>
          </div>
          <div>
            <TextField fullWidth size="small" variant="outlined" value={text} onChange={(event) => setText(event.target.value)} type='text' placeholder='Enter text for...' />
          </div>

          <div className='form-control'>
            <label htmlFor='amount'>Amount <br />(negative - expense, positive - income)</label>
          </div>
          <div>
            <TextField fullWidth size="small" variant="outlined" value={amount} onChange={(event) => setAmount(event.target.value)} type="number"
              placeholder='Enter amount...' />
          </div>
        </div>
        <div>
          <Button variant="contained" color="primary" disableElevation>
            Add transaction
</Button>
        </div>
      </form>

    </>
  )
}


export default AddTransaction;