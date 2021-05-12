import { useRouter } from "next/router"

export default function storePosition(symbol, quantity, cost, date) {

  console.log("storing values")
  // get the current value from local storage
  let openPositions = JSON.parse(localStorage.getItem('open-positions'))

  // if there is nothing currently in local storage create an array of objects and store it
  if (openPositions === null) {
    console.log("Adding to empty list")
    openPositions = JSON.stringify([{
      id: 1,
      symbol: symbol,
      quantity: quantity,
      cps: cost,
      date: date
    }])
    localStorage.setItem('open-positions', openPositions)

  } else {
    console.log(openPositions[openPositions.length-1].id + 1)
    // otherwise adds trade to existing list if there are already entries
    openPositions.push({
      id: (openPositions[openPositions.length-1].id + 1),
      symbol: symbol,
      quantity: quantity,
      cps: cost,
      date: date
    })
    localStorage.setItem('open-positions', JSON.stringify(openPositions))
  }
}