function getSum(mas){
	let sum = 0
  for (let i = 0; i<mas.length;++i){
  if (mas[i] === 'J')
  	sum+= 11
  else if (mas[i]==='Q')
   	sum+=12
  else if (mas[i] === 'K')
  	sum+= 13
  else if (mas[i] === 'A')
  	sum+= 14
  else
  	sum += mas[i]
  }
  return sum
}

let mas = [10,6,'K', 'Q','J', 8]
console.log(getSum(mas))
