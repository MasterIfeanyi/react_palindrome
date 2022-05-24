import { useState } from 'react'
import Input from './components/Input'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  
  const [word, setWord] = useState('')
  const [stop, setStop] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!word) return

    const string = word.toLowerCase().split("").join("");

    //find the length of a string 
    const len = string.length;

    //loop through half of the string 
    for (let i = 0; i < len / 2; i++){

      //check if current letter and last letter of the word are same
      if (string[i] !== string[len - 1 - i]) {
        
        console.log('Bad')
        setStop('Not a palindrome')
        return
      }
    }
    
    console.log('Good')
    setStop('It is a palindrome')
    return
  }


  return (
    <main className="App">
      <Header/>      
      <Input word={word} stop={stop} setWord={setWord} handleSubmit={handleSubmit} />
      <Footer />
    </main>
  );
}

export default App;
