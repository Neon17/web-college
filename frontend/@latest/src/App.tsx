import './App.css'
import Form from './components/Form';
import Greet from './components/Greet'
import Quote from './components/Quote'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [books, setBook] = useState([
    "Larry Page", "Steve Jobs", "Biograph"
  ]);
  const [newBook, setNewBook] = useState('');



  // Instead of doing value = {} onChange = {}
  // We can use onSubmit = (), there we can use FormData to get the values like FormDate["name_of_input_field"]
  return (
    <>
      <Greet name="Hello World" />
      <Quote text="Stay Hungry." author='Steve Jobs' />
      <button onClick={()=>setCount(count+1)}>Increment count</button>
      <p className="show-count">Count = {count}</p>
      <div className="total-books">
        {
          books.map((book, index) => {
            return <p key={index}>Index = {index}, book = {book}</p>
          })
        }
      </div>
      <input type="text" className="set-book" value={newBook} onChange={e=>setNewBook(e.target.value)}/>
      <p className="book-print">
        newBook = {newBook}
      </p>
      <Form/>
    </>
  )
}

export default App
