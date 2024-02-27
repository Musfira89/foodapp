// const express = require("express");
// const stripe = require("stripe")(
//   "sk_test_51Of40zAjiej6c71moqLHVFMehFARTAdpnQbG2YH1ExLOohYokxbegG8o8Ly1cxMYy5oT2g2OK4AAHv215k0q7gka00jCHtE7Z2"
// );
// const bodyParser = require("body-parser");

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(bodyParser.json());

// // Route to create a subscription
// app.post("/api/create-subscription", async (req, res) => {
//   const { email, paymentMethod } = req.body;

//   try {
//     const customer = await stripe.customers.create({
//       email,
//       payment_method: paymentMethod,
//       invoice_settings: {
//         default_payment_method: paymentMethod,
//       },
//     });

//     const subscription = await stripe.subscriptions.create({
//       customer: customer.id,
//       items: [{ plan: "YOUR_STRIPE_PLAN_ID" }],
//       expand: ["latest_invoice.payment_intent"],
//     });

//     res.json(subscription);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Route to cancel a subscription
// app.post("/api/cancel-subscription", async (req, res) => {
//   const { subscriptionId } = req.body;

//   try {
//     const canceledSubscription = await stripe.subscriptions.del(subscriptionId);

//     res.json(canceledSubscription);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
