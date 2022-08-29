import './App.css';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';


function App() {
  const [numbers, setNumbers] = useState([])
  const [value, setValue] = useState(0)
  const execute = () => {
    const myArray = numbers.split(',').map(Number)
    for (let i = 0; i < myArray.length; i++) {
      for (let j = i + 1; j < myArray.length; j++) {
        let answer = myArray[i] + myArray[j]
        if (answer === parseInt(value)) {
          var targetDiv = document.getElementById('results');
          targetDiv.innerHTML += `${myArray[i]} , ${myArray[j]}<br/>`
        }
      }
    }
    setNumbers([])
    setValue(0)
  }
  return (
    <div className="App">
      <h2>Mach Eight</h2>
      <p>The task is to write a function that finds pairs of integers from a list that
        sum to a given value. The function will take as input the list of numbers as
        well as the target sum.</p>
      <header className="App-header">
        <TextField
          id="outlined-basic"
          label="Write the list "
          variant="outlined"
          helperText="Enter integer values, separated by commas"
          onChange={e => { setNumbers(e.target.value); }}
        />
        <TextField
          id="outlined-basic"
          label="Enter the value"
          variant="outlined"
          helperText="Enter the target num"
          onChange={e => setValue(e.target.value)}
        />
        {numbers.length !== 0 && value !== 0 && <Button
          type="submit"
          onClick={execute}
          variant='contained'
        >
          Execute
        </Button>}

      </header>
      <div id='results'>
        <h3>Results</h3>
      </div>
    </div>
  );
}

export default App;
