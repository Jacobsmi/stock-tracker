import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import OpenPosition from '../components/OpenPosition'

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
              <OpenPosition position={position} />
            )
          })

          : 'No positions to display yet'}

      </div>
      <div className={styles.add}>
        <Link href='/addopenposition'>
          Add New Position
        </Link>
      </div>
    </div>
  )
}
