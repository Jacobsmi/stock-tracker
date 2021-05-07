import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [openPositions, setOpenPositions] = useState([])

  useEffect(() => {
    // get open positions here
    console.log(JSON.parse(localStorage.getItem('open-positions')))
    setOpenPositions(JSON.parse(localStorage.getItem('open-positions')))
  }, [])
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Stock Tracker</h1>
      <div className={styles.content}>
        {openPositions ?
          openPositions.map((position) => {
            return (
              <div key={position.id}>
                {position.symbol}
              </div>
            )
          })

          : 'No positions to display yet'}

      </div>
      <div className={styles.add}></div>
    </div>
  )
}
