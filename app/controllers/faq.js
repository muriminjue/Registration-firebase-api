const db = require("../firebase/firebase_connect")
const uniqid = require("uniqid")

const add = () => {
    let id = uniqid()
}


const faqs = {
    add: add,
    get: get
}

module.exports = faqs;