import './App.css';
import { useState } from 'react'

import Input from './Input'
import Header from './Header'

function App() {
  
  const [word, setWord] = useState('')
  const [stop, setStop] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const string = word.toLowerCase()

    //find the length of a string 
    const len = string.length;

    //loop through half of the string 
    for (let i = 0; i < len / 2; i++){

      //check if first and last string are same
      if (string[i] !== string[len - 1 - i]) {
        
        console.log('Bad')
        setStop('Not a palindrome')
        return
      }
    }
    
    console.log('Good')
    setStop('a palindrome')
    return
  }


  return (
    <div className="App">
      <Header/>
      
      <p style={{ color: "red" }}>{stop}</p>
      
      
      <Input word={word} setWord={setWord} handleSubmit={handleSubmit} />
  </div>
  );
}

export default App;
