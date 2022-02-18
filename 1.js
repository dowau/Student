let cnt = 0
for (let i = 0; i<1000000; i++){
let x = Math.round(Math.random()*2)
if (x === 0){
cnt++
}
}
console.log(cnt)