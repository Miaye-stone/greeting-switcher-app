import { useState } from 'react'
import styles from './App.module.css'

function App() {

  const [index, setIndex] = useState(0);

  const greetings = [
    "Welcome back, Ada!", "Hello again!", "You're awesome!"
  ]

  function click() {
    if(index < greetings.length-1) {
      setIndex(prevIndex => prevIndex + 1);
    }else {
      setIndex(0);
    }
  }
  
    return (
      <div className={styles.container}>
        <h1>{greetings[index]}</h1>
        <button onClick={click}>Next greeting</button>
      </div>
    );
}

export default App
