import './App.css';
import { useState } from 'react'

function App() {
  const [text, setText] = useState('')
  const [images, setImages] = useState([])

  const fetchImages = async (name) => {
    const response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${name}`)
    const json = await response.json()
    setImages(json.map((character) => character.img))
  }

  const inputChanged = (e) => {
    setText(e.target.value)
  }
  return (
    <div className="container" style={{textAlign: 'center'}}>
      <h1>React App</h1>
      <form onSubmit={(e) => {
        e.preventDefault()
        fetchImages(text)
      }}>
        <input onChange={inputChanged} value={text} type='text' className='u-full-width'/>
        <button className='button-primary' type='submit'>SUBMIT</button>
        {
          images.length ?
          (
            images.map((url) => <img style={{width: '100%'}} key={url} src={url}/>)
          )
          :
          null
        }
      </form>
    </div>
  );
}

export default App;
