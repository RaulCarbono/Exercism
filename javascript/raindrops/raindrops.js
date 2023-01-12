//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {
  if (number === 1 ){
    return number.toString()
  }
  else if(number % 3===0 && number % 5===0  && number % 7===0 ){
    return 'Pling' + 'Plang' + 'Plong'
  }
  else if (number % 3===0 && number % 5 === 0) {
    return 'Pling' + 'Plang'
  }
  else if (number % 3 ===0 && number % 7 === 0){
    return 'Pling' + 'Plong'
  }
  else if (number % 5 === 0 && number % 7 === 0 ){
    return 'Plang' + 'Plong'
  }
  if (number % 3 === 0 && number % number === 0 && number % 1 === 0)
  return ("Pling")
 

  if (number % 5 === 0 && number % number === 0 && number % 1 === 0 )
  return 'Plang'
  
  
  if (number % 7 === 0 && number % number === 0 && number % 1 === 0 ){
    return 'Plong'
    
  }
  if (number % 3 && number % 5 && number % 7 !==0 ){
    return number.toString()
  }

 

 
 
  
};
