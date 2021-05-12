import router, { useRouter } from 'next/router'
import styles from '../styles/AddOpenPosition.module.css'
import Image from 'next/image'
import { useState } from 'react'
import verifyValues from '../functions/verifyValues'

export default function AddTrade() {
  const router = useRouter()
  const [errors, setErrors] = useState(false)

  function addNewTrade() {
    // verifies values from form
    const [isErrors, errorString] = verifyValues()
    if(!isErrors){
      router.push('/')
    }
    setErrors(isErrors)
    document.getElementById('position-errors').innerHTML = errorString
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
        <input id='position-symbol' placeholder='Ticker Symbol' type='text' required={true}></input><br />
        <label htmlFor='position-quantity'>Quantity</label>
        <input id='position-quantity' placeholder='Quantity' type='text'></input><br />
        <label htmlFor='position-cost'>Cost per Share</label>
        <input id='position-cost' placeholder='Cost per Share' type='text'></input><br />
        <label htmlFor='position-date'>Date of trade</label>
        <input id='position-date' placeholder='mm/dd/yyyy' type='date'></input><br />
        <button onClick={addNewTrade}>Add Position</button>
      </div>
    </div>
  )
}