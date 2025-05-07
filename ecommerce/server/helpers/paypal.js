require("dotenv").config(); 

const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode:'sandbox',
  client_id: 'AeLj9dYFMkuAo5Hjh0xDnnvJln40HfExtB7nI1-iUSDP2b5hbi2ETl3L4FhuanTHLcQB82-K2-mYLCjT',
  client_secret: 'EFt673LeNQUg6SggH903oOjrHWGHmrlnLQhVBd3-ibGFGAzATqyITLj2W5BUUuffk6Y3TaX3q0s1Fd3X',
});

module.exports = paypal;


