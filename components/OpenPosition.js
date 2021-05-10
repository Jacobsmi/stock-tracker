import styles from '../styles/OpenPosition.module.css'

export default function OpenPosition(props){
  return(
    <div className={styles.container}>
      <span>Symbol: {props.position.symbol}</span>
      <span>Quantity: {props.position.quantity}</span>
      <span>Cost per Share: {props.position.cps}</span>
      <span>Date: {props.position.date}</span>
    </div>
  )
}