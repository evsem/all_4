console.log('Start.')

const corr = 3
for (let i = 1; i < 4; i++) {
  if (i >= corr) {
    break
  }
  console.log(i)
}

let arr_1 = [23, 56, 87, 4526, 908, 1, 400]
arr_1.pop()
arr_1.push(10, 11)
arr_1.unshift(10000)
console.log(arr_1)

const forArr = 300
let arr_Filt = arr_1.filter((item) => {
  return item > forArr && item < 6000
})
console.log(arr_Filt)

let arr_Slice = arr_1.slice(2, 6)
console.log(arr_Slice)

arr_1.splice(3, 2)
console.log(arr_1)

arr_1.splice(4, 1, 13)
console.log(arr_1)

arr_1.shift()
arr_1.push(33, 901, 336)
console.log(arr_1)

arr_1.splice(3, 0, 881)
console.log(arr_1)

let arr_Map = arr_1.map((item) => {
  const mapNum = 2
  return (item + mapNum) * 2
})
console.log(arr_Map)

console.log(arr_1.indexOf(33, 4))
console.log(arr_1.includes(908, 0))

let arr_Find = arr_1.find((item) => {
  return item == '908'
})
console.log(arr_Find)

let arr_findIndex = arr_1.findIndex((item) => {
  return item === 56
})
console.log(arr_findIndex)

let arr_Join = arr_1.join('; ')
console.log(arr_Join)
