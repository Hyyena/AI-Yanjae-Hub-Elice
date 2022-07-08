let promise = new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
        return reject("false")
    }
    resolve(10)
})

promise.then((data) => {
    console.log(data)
})