import Stripe from "stripe";

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY ||
    process.env.STRIPE_SECRET ||
    process.env.STRIPE_API_KEY ||
    "sk_test_51MockStripeSecretKeyChargeboxEV2026",
  {
    apiVersion: "2024-06-20",
    typescript: true,
  }
);

export const getStripePublishableKey = () => {
  return (
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY ||
    process.env.STRIPE_PUBLISHABLE_KEY ||
    "pk_test_51MockStripePubKeyChargeboxEV2026"
  );
};
