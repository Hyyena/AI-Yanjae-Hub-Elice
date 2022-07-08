let promise = new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
        return reject("실패")
    }
    resolve(10)
})

promise.then((data) => {
    console.log(data)
})