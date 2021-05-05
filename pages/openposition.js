import styles from '../styles/OpenPosition.module.css'

export default function AddTrade() {

  function addNewTrade() {
    // track if entry is valid
    let validTrade = true

    // verify values with regex

    // verify symbol
    let symbol = document.getElementById('position-symbol').value.toUpperCase()
    if (!/^[A-Z]{4,5}$/.test(symbol)) {
      validTrade = false
      console.log("Not a good symbol")
    }

    let quantity = document.getElementById('position-quantity').value
    if (!/^\d+\.\d{0,10}$/.test(quantity)) {
      validTrade = false
      console.log("Not a good quantity")
    }

    let cost = document.getElementById('position-cost').value
    if (!/^\d+\.\d{0,10}$/.test(cost)) {
      validTrade = false
      console.log("Not a good cost")
    }

    // if everything is valid add it to the local storage list
    if (validTrade) {
      // get the current value from local storage
      let openPositions = JSON.parse(localStorage.getItem('open-positions'))

      // if there is nothing currently in local storage create an array of objects and store it
      if (openPositions === null) {
        console.log("Adding to empty list")
        openPositions = JSON.stringify([{
          symbol: symbol,
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
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.side}>

      </div>
      <div className={styles.form}>
        <h1>Add Position</h1>
        <label for='position-symbol'>Symbol:</label>
        <input id='position-symbol' placeholder='Ticker Symbol' type='text'></input><br />
        <label for='position-quantity'>Quantity:</label>
        <input id='position-quantity' placeholder='Quantity' type='text'></input><br />
        <label for='position-cost'>Cost per Share:</label>
        <input id='position-cost' placeholder='Cost per Share' type='text'></input><br />
        <label for='position-date'>Date of trade:</label>
        <input id='position-date' placeholder='Date' type='date'></input><br />
        <button onClick={addNewTrade}>Add Position</button>
      </div>
      <div className={styles.side}>

      </div>
    </div>
  )
}