const db = require("../firebase/firebase_connect")
const uniqid = require("uniqid")

const add = async (req, res) => {
    let id = uniqid()
    await db.database().ref('tutors/' + id).set({
        id: id,
        added: new Date().toString(),
        content: req.body
    })
    res.json({
        msg: "success"
    }).status(200);
}

const get = async (req, res) => {
    let tutors = await db.database().ref('tutors/').get()
    res.send(tutors)
}

const addreview = async (req, res) => {
    let id = uniqid()


    await db.database().ref('tutorsreviews/' + id).set({
        id: id,
        added: new Date().toString(),
        content: req.body
    })

    res.json({
        msg: "success"
    }).status(200);
}

const getreview = async (req, res) => {
    let reviews = await db.database().ref('tutorsreviews/').get()
    res.send(reviews)
}

const tutors = {
    add: add,
    get: get,
    addreview: addreview,
    getreview: getreview
}

module.exports = tutors;