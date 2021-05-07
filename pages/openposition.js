import router from 'next/router'
import styles from '../styles/OpenPosition.module.css'
import Image from 'next/image'
import { useState } from 'react'

export default function AddTrade() {

  const [errors, setErrors] = useState(false)

  function verifyValues() {
    // track if entry is valid
    let validTrade = true

    // create a string to track errors
    let errorString = 'Errors<ul>'

    // verify values with regex

    // verify symbol
    let symbol = document.getElementById('position-symbol').value.toUpperCase()
    if (!/^[A-Z]{4,5}$/.test(symbol)) {
      validTrade = false
      errorString += '<li>Invalid Symbol</li>'
    }

    // verify quantity
    let quantity = document.getElementById('position-quantity').value
    if (!/^\d+\.{0,1}\d{0,10}$/.test(quantity)) {
      validTrade = false
      errorString += '<li>Invalid Quantity</li>'
    }

    // verify cost
    let cost = document.getElementById('position-cost').value
    if (!/^\d+\.{0,1}\d{0,10}$/.test(cost)) {
      validTrade = false
      errorString += '<li>Invalid Cost</li>'
    }

    // any date chosen by the picker is valid so just make sure one exists
    let date = document.getElementById('position-date').value
    if (date === '') {
      validTrade = false
      errorString += '<li>No Date Selected</li>'
    }
    // close error string, done with validation
    errorString += '</ul>'

    // set the value of error string
    document.getElementById('position-errors').innerHTML = errorString

    if (validTrade) {
      // hide error div
      setErrors(false)
      return true
    } else {
      // show error div
      setErrors(true)
      return false
    }

  }


  function storePosition() {

    // get the current value from local storage
    let openPositions = JSON.parse(localStorage.getItem('open-positions'))

    // if there is nothing currently in local storage create an array of objects and store it
    if (openPositions === null) {
      console.log("Adding to empty list")
      openPositions = JSON.stringify([{
        symbol: document.getElementById('position-symbol').value,
        quantity: document.getElementById('position-quantity').value,
        cps: document.getElementById('position-cost').value,
        date: document.getElementById('position-date').value
      }])
      localStorage.setItem('open-positions', openPositions)

    } else {
      // otherwise adds trade to existing list if there are already entries
      openPositions.push({
        symbol: document.getElementById('position-symbol').value,
        quantity: document.getElementById('position-quantity').value,
        cps: document.getElementById('position-cost').value,
        date: document.getElementById('position-date').value
      })
      localStorage.setItem('open-positions', JSON.stringify(openPositions))
    }
    // redirect back to the home page
    router.push('/')
  }


  function addNewTrade() {
    // verifies values from form
    let validTrade = verifyValues()

    // if all values valid store the position
    if (validTrade) {
      storePosition()
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Image
          src='/waves.svg'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className={styles.form}>
        <h2>Open a Position</h2>
        <div
          id='position-errors'
          style={{
            display: errors ? 'block' : 'none',
            backgroundColor: '#EE6C4D',
            padding: '10px',
            borderRadius: '10px',
            marginBottom: '20px'
          }}
        >
        </div>
        <label htmlFor='position-symbol'>Symbol</label>
        <input id='position-symbol' placeholder='Ticker Symbol' type='text'></input><br />
        <label htmlFor='position-quantity'>Quantity</label>
        <input id='position-quantity' placeholder='Quantity' type='text'></input><br />
        <label htmlFor='position-cost'>Cost per Share</label>
        <input id='position-cost' placeholder='Cost per Share' type='text'></input><br />
        <label htmlFor='position-date'>Date of trade</label>
        <input id='position-date' placeholder='Date' type='date'></input><br />
        <button onClick={addNewTrade}>Add Position</button>
      </div>
    </div>
  )
}