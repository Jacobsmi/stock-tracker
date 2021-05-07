import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [openPositions, setOpenPositions] = useState([])

  useEffect(()=>{
    console.log("This is a test")
  },[])
  return (
    <div className={styles.container}>
        
    </div>
  )
}
