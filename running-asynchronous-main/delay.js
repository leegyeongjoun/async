const delay = (ms) => {
    return new Promise((resolve, reject) => setTimeout(resolve, ms))
}

delay(3000).then((result) => {

})

const runningDelay = async () => {
    const a = await delay(3000)
    const b = await delay(6000)
    console.log("a: ", a); 
    console.log("b: ", b); 

    // const result = await Promise.allSettled([a, b ])
    return a
}

runningDelay().then((result) => {
    console.log("result: ", result);}
    )
