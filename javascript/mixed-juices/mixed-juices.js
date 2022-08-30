// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name){
  switch (name){
  case 'Pure Strawberry Joy':
  return 0.5
  break;
      
    case 'Energizer':
      return 1.5
        break

    case 'Green Garden':
      return 1.5
        break

    case 'Tropical Island':
      return 3 
      break

    case 'All or Nothing':
      return 5
      break

    default: 
      return 2.5
}
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
 let count1 = 0
 let count2 = 0
 let i = 0
  while (i<= limes.length){
    if (wedgesNeeded == 0){
      return 0
    }
    switch (limes[i]){
    case 'small':
    count1 += 6
    count2 += 1
    break;
      
    case 'medium':
      count1 += 8
      count2 += 1 
        break

    case 'large':
      count1 += 10
      count2 += 1 
        break  
}
    i++
    if (count1 >= wedgesNeeded){
      return count2
    } 
}
  return limes.length
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {

 let times = 0
 let count = 0
 let i = 0
  while (i<= orders.length){
    
    switch (orders[i]){
    case 'Pure Strawberry Joy':
    times += 0.5
    count += 1
    break;
      
    case 'Energizer':
      times += 1.5
      count += 1
        break

    case 'Green Garden':
      times += 1.5
      count += 1
        break

    case 'Tropical Island':
      times += 3
        count +=1
      break

    case 'All or Nothing':
      times += 5
        count += 1
      break
        
      default: 
      times += 2.5
      count +=1
}
    i++
    
    console.log(count)
    if (times >= timeLeft){
      return orders.slice(count, orders.length )
    } 
}
  
}
 
