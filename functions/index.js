const functions = require("firebase-functions")
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")(
  "sk_test_51KWhk0KCz8CsU1CN7pJ5qxvQhW2oH6E6wBwiNR8qggNW2ZSoVOImcaxPydffuc25ui48N75yD4YKuXmQ4sYcOOtE00DlOsegQ1"
)

// - App Config

const app = express()

// - Middlewares

app.use(cors({ origin: true }))
app.use(express.json())

// - Api routes

app.get("/", (req, res) => res.status(200).send("Hello World"))

app.post("/payments/create", async (req, res) => {
  const total = req.query.total

  console.log("PAYMENT REQUEST RECEIVED====> " + total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  })

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

// - Listen command

exports.api = functions.https.onRequest(app)
