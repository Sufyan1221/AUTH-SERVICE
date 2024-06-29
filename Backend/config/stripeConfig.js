// backend/stripe.js
import Stripe from 'stripe';
import { configDotenv } from 'dotenv';
configDotenv()
const stripe =new Stripe('sk_test_51PWca7Is0w9pQpHClAyJJvdTCXxLNr7v9wFVkEoaRiRh84YKdFhjhgoqXO4p47uZHQstdSzlygn2DE2b7rY2310900z3ATOszY', { apiVersion: '2020-08-27' });
export default stripe;
