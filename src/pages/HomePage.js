import React from 'react'
import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import '../App.css'
import TextFieldGoogle from '../components/TextFieldGoogle'

const HomePage = () => {
  const history = useHistory()
  const [nome, setName] = useState()

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleSubmit = (event) => {
    setName.preventDefault();
    history.push('/${nome}')
  } 

  const onSubmitName = (evnt) => {
    evnt.preventDefault();
    evnt.stopPropagation();
    console.log("Chamou o submit")
  }

  return (
    <div className="App">
      <header className="App-header">

        <h1>Search Names</h1>

        <TextFieldGoogle name={nome} onChangeInput={(evnt) => setName(evnt.target.value)} onSubmit={onSubmitName}/>
        <p>
          Hey, you! Why're you reading this?
        </p>
      </header>
    </div>
  )
}

export default HomePage
