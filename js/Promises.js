const prom_1 = new Promise((res, rej) => {
  let ob_1 = {
    server: 'rea-tuv',
    port: 3000,
    adress: {
      town: 'NY',
      country: 'USA',
    },
    dev: 'evsem',
    status: false,
    code: 456194309,
  }

  let arr_Prom = [22, 89, 10, 1, 76, 72, 0]

  setTimeout(() => {
    const fun_1 = (a, b = 13) => {
      for (let i = 3; i < b; i++) {
        if (i == 9) {
          break
        }
        console.log(i)
      }

      for (let item of arr_Prom) {
        console.log(item)
      }

      let [one, two, ...arr_inFun] = arr_Prom
      console.log(arr_inFun)

      const arr_1Prom = [33, 45, 19]
      const arr_2Prom = [31, 18, 0]

      let arr_allItem = [...arr_1Prom, ...arr_2Prom]
      console.log(arr_allItem)

      if (a == 10) {
        function ifFunct(text) {
          console.log(text)
        }
        ifFunct('Good.')
      } else {
        const err_ifFunct = (err) => {
          console.error(err)
        }
        err_ifFunct()
      }

      res(ob_1)
    }
    fun_1(10)
  }, 3000)
})
  .then((ob_Then_1) => {
    setTimeout(() => {
      let code_inOb = ob_Then_1.code
      console.log(code_inOb)
    }, 1000)
  })
  .catch((err) => {
    console.error(err)
  })
