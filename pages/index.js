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
        <h2 className={styles.subtitle}>Open Positions</h2>
        {openPositions ?
          <table className={styles.openPositionsTable}>
            <tr>
              <th>
                Symbol
            </th>
              <th>
                Shares
            </th>
              <th>
                Cost per Share
            </th>
              <th>
                Date
            </th>
            </tr>
            {openPositions.map((position) => {
              return (
                <tr>
                  <td>
                    {position.symbol}
                  </td>
                  <td>
                    {position.quantity}
                  </td>
                  <td>
                    {position.cps}
                  </td>
                  <td>
                    {position.date}
                  </td>
                </tr>
              )
            })}
          </table>
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
