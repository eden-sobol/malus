let frame = ""

class App {
    constructor(arr, obj, vars) {
        this.arr = arr
        this.obj = obj
        this.vars = vars


        let style = ""

        Object.keys(obj).forEach((value, index) => {
            style += value + "='" + obj[value] + "' "
        })

        document.body.innerHTML = `<main ${style}></main>`

        frame = String(arr).replaceAll(",", " ")

        document.body.querySelector("main").innerHTML = String(arr).replaceAll(",", " ")

    }
}

let count = 0

e = (type, arr, obj) => {
    let style = ""

    Object.keys(obj).forEach((value, index) => {
        style += value + "='" + obj[value] + "' "
    })

    count++

    return `<${type} ${style}>${arr}</${type}>`
}
