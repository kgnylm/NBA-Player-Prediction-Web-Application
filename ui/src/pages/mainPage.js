import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import Footer from '../components/Footer'
import RefreshButton from '../components/RefreshButton'
import '../css/mainPage.css'
import '../css/Name.css'
import '../css/ShowButton.css'
import '../css/Input.css'

const MainPage = () => {
  const [playerData, setPlayerData] = useState(null)
  const [show, setShow] = useState(true)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [wrongValue, setWrongValue] = useState(false)

  const fetchPlayerData = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3001/api/v1/players/home'
      )
      setPlayerData(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    fetchPlayerData()
  }, [])

  const handleShow = (event) => {
    event.preventDefault()
    if (
      !wrongValue &&
      inputValue.toLowerCase() ===
        `${name1.toLowerCase()} ${surname1.toLowerCase()}`
    ) {
      setShow(false)
      setButtonDisabled(true)
    } else {
      setShow(true)
      setButtonDisabled(false)
      setInputValue('')
      setWrongValue(false)
    }
  }

  const nameClass = show ? 'blur' : 'name'

  const handleInputChange = (event) => {
    event.preventDefault()
    setInputValue(event.target.value)
    setWrongValue(false)
  }

  const handleInputBlur = () => {
    if (
      inputValue.toLowerCase() ===
      `${name1.toLowerCase()} ${surname1.toLowerCase()}`
    ) {
      setWrongValue(false)
    } else if (inputValue === '') {
      setWrongValue(true)
    } else {
      setWrongValue(true)
    }
  }

  const name1 = playerData ? playerData.data.name : ''
  const surname1 = playerData ? playerData.data.surname : ''
  const photo1 = playerData ? playerData.data.image : ''
  console.log(name1)
  console.log(surname1)
  console.log(photo1)

  return (
    <div className="mainPage">
      <Card player={{ Image: photo1 }} />
      <div className="name">
        <h1 className={nameClass}>{show ? name1 : name1}</h1>
        <h1 className={nameClass}>{show ? surname1 : surname1}</h1>
      </div>
      <div>
        <RefreshButton />
      </div>
      <div>
        <form onSubmit={handleShow}>
          <input
            className="input"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          <button
            className="showButton"
            type="submit"
            disabled={buttonDisabled}
          >
            Show
          </button>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default MainPage
