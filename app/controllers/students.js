const db = require("../firebase/firebase_connect")
const uniqid = require("uniqid")

const add = async (req, res) => {
    let id = uniqid()
    await db.database().ref('students/' + id).set({
        id: id,
        added: new Date().toString(),
        content: req.body
    })
    res.json({
        msg: "success"
    }).status(200);
}

const get = async (req, res) => {
    let students = await db.database().ref('students/').get()
    res.send(students)
}

const addreview = async (req, res) => {
    let id = uniqid()


    await db.database().ref('studentsreviews/' + id).set({
        id: id,
        added: new Date().toString(),
        content: req.body
    })

    res.json({
        msg: "success"
    }).status(200);
}

const getreview = async (req, res) => {
    let reviews = await db.database().ref('studentsreviews/').get()
    res.send(reviews)
}

const students = {
    add: add,
    get: get,
    addreview: addreview,
    getreview: getreview
}

module.exports = students;