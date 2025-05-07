require("dotenv").config(); 

const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode:'sandbox',
  client_id: 'AVJXAcgJSTe5eHi0GGatNcYWLe__xx8n55XCwY-OaDFgqbLtcIr-2GtHkDPCMa5eB3fn-PqEI0uguiO2',
  client_secret: 'ECqdOvguZ_tt30DCVmVMusZJ1b1fXKezwsz3n-i5DPELb1B27QC5oAOi8HCZaz6Yll2APMXg_ik2Ior',
});

module.exports = paypal;


