let itemName = prompt("Enter the name of the item:")
let basePrice = Number(prompt("What is the base price of the item?"))
let isBlackFriday = prompt("Is today Black Friday?")
let isFromSearchEngine = prompt("Did the purchaser find the product through a search engine?")
let hasCompared = prompt("Did the purchaser visit a comparison-shopping site?")
let finalPrice = basePrice
let message = ""

if(isBlackFriday === 'yes') {
  finalPrice *= 0.75
  message += `Since it's Black Friday, we will reduce the price by 25%. `
} else if(isBlackFriday === 'no') {
  message += `It's not Black Friday, so the price didn't change for that. `
}

if(isFromSearchEngine === 'yes') {
  finalPrice *= 1.01
  message += `We will increase the price by 1% to pay the search engine. `
} else if(isFromSearchEngine === 'no') {
  message += `The customer didn't use a search engine, so the price didn't change for that. `
}

if(hasCompared === 'yes') {
  finalPrice *= 0.9
  message += `Since the customer visited a comparison-shopping site, we will reduce the price by 10%. `
} else if(hasCompared === 'no') {
  message += `The customer didn't visit a comparison-shopping site, so the price didn't change for that. `
}

finalPrice = finalPrice.toFixed(2)

console.log(`The base price for ${itemName} is ${basePrice}. ${message}The final price is $${finalPrice}.`)