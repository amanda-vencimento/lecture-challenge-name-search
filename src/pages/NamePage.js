import { useState } from 'react'
import '../App.css'
import {useParams} from 'react-router-dom'

const NamePage = () => {
    let {nome} = useParams()
  return (
    <div className="App">
      <header className="App-header">
        <p>{nome}</p>
      </header>
    </div>
  );
}

export default NamePage;
