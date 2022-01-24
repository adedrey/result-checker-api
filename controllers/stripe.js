const stripe = require('stripe')('sk_test_51JJ5W9KemkuRpqFT9mMzuo2VcsEVxw9urKoznLorgRRziBbl7SpNuyP4z760zLxgKBnwWPH73UuOHN557HpQLr32001w6F9GTU');
const Helper = require("../controllers/stripe-helper")

exports.create = async (req, res, next) => {
    try {
        const cardToken = req.body.stripeToken;
        amount = 25
        const charge = await stripe.charges.create(getChargeData(amount, cardToken));

        if (charge.status === "succeeded") {
            return res.status(200).send({
                Success: charge
            });
        } else {
            return res
                .status(400)
                .send({
                    Error: "Please try again later for One Time Payment"
                });
        }
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            err: error.raw.message,
        });
    }
};

function getChargeData(amount, stripeToken) {
    const amountInPence = amount * 100;
    const email = "adedireemmanuel@gmail.com"
    return {
        amount: amountInPence,
        currency: "usd",
        source: stripeToken,
        receipt_email: email,
        description: `Stripe Charge Of Amount ${amount} for One Time Payment`,
    }
}