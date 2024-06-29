import stripe from '../config/stripeConfig';
import { stripeService } from '../services/stripePayment';

export const PaymentController = async (req, res) => {

    const { priceId } = req.body;
  console.log(priceId);
    try {
      const session = await stripeService(priceId)
      res.status(200).send({
        sessionId: session.id,
      });
    } catch (error) {
      res.status(502).send({ error: error.message });
    }
  }