const db = require("../firebase/firebase_connect")
const uniqid = require("uniqid")

const add = async (req, res) => {
    let id = uniqid(),
        {
            file,
            body: {
                name
            },
        } = req;
    /*
        if (
            file.mimetype == "image/jpeg" ||
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg"
        ){
            */
    const newadmin = {
        id: id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, salt),
        // image:  add somethin
    }

    await db.database().ref('admins/' + id).set(
        newadmin
    )
    res.json({
        msg: "success"
    }).status(200);
}

const get = async (req, res) => {
    let admins = await db.database().ref('admins/').get()
    res.send(admins)
}

const admins = {
    add: add,
    get: get
}

module.exports = admins;