import express from 'express'
import mongoose from 'mongoose'
import { database } from './dbModel.js'
const app = express()

app.use('/', (req, res) => {
    database.create({ name: "hello" }, (err, data) => {
        if (err) {
            console.log(err);
        }
    })

    database.find().then((data) => {
        res.json({ data })
    }).catch((err) => {

        res.json({ data: "helloword" })
    })
})

app.listen(9000, () => console.log("app successfully runnig"))

const dburl = 'mongodb+srv://siyab:EDfMPDRjBC48b4G3@cluster0.vkgf9in.mongodb.net/?retryWrites=true&w=majority'
mongoose.set('strictQuery', false)


mongoose.connect(dburl).then(() => {
    console.log('db succcessfully connected');
}).catch((err) => {
    console.log(err);
})


