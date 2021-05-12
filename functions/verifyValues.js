import storePosition from './storePosition'

export default function verifyValues(){
  console.log("Verifying values")
  // track if entry is valid
  let validTrade = true

  // create a string to track errors
  let errorString = 'Errors<ul>'

  // verify values with regex

  // verify symbol
  let symbol = document.getElementById('position-symbol').value.toUpperCase()
  if (!/^[A-Z]{1,5}$/.test(symbol)) {
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
  }else{
    cost = Number(cost).toFixed(2)
    console.log("New cost is " + cost)
  }

  // any date chosen by the picker is valid so just make sure one exists
  let date = document.getElementById('position-date').value
  let dateString = ''
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(date) &&   !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    validTrade = false
    errorString += '<li>No Date Selected</li>'
  }else{
    let dateObject = new Date(date)
    dateObject.setMinutes(dateObject.getMinutes() + dateObject.getTimezoneOffset())
    dateString = (dateObject.getMonth()+1) + "/" + dateObject.getDate() + "/" + dateObject.getFullYear()
  }

  // close error string, done with validation
  errorString += '</ul>'

  // set the value of error string
  document.getElementById('position-errors').innerHTML = errorString

  console.log("Valid trade:" + validTrade)
  // if all inputs are valid
  if (validTrade) {
    storePosition(symbol, quantity, cost, dateString)
    // hide error div
    return [false, '']
  } else {
    // show error div
    return [true, errorString]
  }
}