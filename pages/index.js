import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {

  const [openPositions, setOpenPositions] = useState([])

  useEffect(() => {
    // get open positions here
    setOpenPositions(JSON.parse(localStorage.getItem('open-positions')))
  }, [])
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Stock Tracker</h1>
      <div className={styles.content}>
        <h2 className={styles.subtitle}>Open Positions</h2>
        {openPositions ?
          <table className={styles.openPositionsTable}>
            <thead>
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
                <th>
                  Edit Position
                </th>
                <th>
                  Close Position
                </th>
              </tr>
            </thead>
            <tbody>
              {openPositions.map((position) => {
                return (
                  <tr key={position.id}>
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
                    <td>
                      <Link href={`/edit?id=${position.id}`}>
                        <a>Edit</a>
                      </Link>
                    </td>
                    <td>
                      <Link href={`/close?id=${position.id}`}>
                        <a>Close</a>
                      </Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          : <div style={{ textAlign: 'center', color: 'white' }}>No positions to display yet</div>}
      </div>
      <div className={styles.add}>
        <Link href='/addopenposition'>
          Add New Position
        </Link>
      </div>
    </div>
  )
}
