const defaultPlanId = "starter";
const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for beginners starting their wellness journey.",
    price: "$5",
    priceIntervalName: "per month",
    stripe_price_id: null,
    features: [
      "All blog content access",
      "Weekly newsletter",
      "Bookmark posts",
      "Basic downloads",
      "Community access"
    ]
  },
  {
    id: "pro",
    name: "Pro",
    description: "Take your progress to the next level with personalized tools.",
    price: "$15",
    priceIntervalName: "per month",
    stripe_price_id: "price_1NkdZCHMjzZ8mGZnRSjUm4yA",
    stripe_product_id: "prod_OXj1CcemGMWOlU",
    features: [
      "Everything in Starter",
      "Meal & workout planner",
      "3x weekly tips",
      "Early content access",
      "Priority support",
      "Advanced downloads"
    ]
  },
  {
    id: "ultimate",
    name: "Ultimate",
    description: "Complete wellness transformation with exclusive resources.",
    price: "$30",
    priceIntervalName: "per month",
    stripe_price_id: "price_1Nkda2HMjzZ8mGZn4sKvbDAV",
    stripe_product_id: "prod_OXj20YNpHYOXi7",
    features: [
      "Everything in Pro",
      "Custom goal setting",
      "Exclusive web courses",
      "Content requests",
      "Personal PDF reports",
      "1-on-1 consultation"
    ]
  }
];
export {
  defaultPlanId as d,
  pricingPlans as p
};
