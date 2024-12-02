import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type PricingTier = {
  name: string;
  price: number;
  description: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    price: 9,
    description: "Perfect for individuals and small projects",
    features: [
      "1 user",
      "Up to 10GB storage",
      "Basic support",
      "Basic analytics",
    ],
    buttonText: "Get Started"
  },
  {
    name: "Pro",
    price: 29,
    description: "Great for professionals and growing teams",
    features: [
      "Up to 5 users",
      "50GB storage",
      "Priority support",
      "Advanced analytics",
      "Custom domains",
    ],
    buttonText: "Try Pro",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: 99,
    description: "For large teams with advanced needs",
    features: [
      "Unlimited users",
      "Unlimited storage",
      "24/7 support",
      "Advanced analytics",
      "Custom domains",
      "SLA",
      "Dedicated account manager"
    ],
    buttonText: "Contact Sales"
  }
];

const PricingTable = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingTiers.map((tier) => (
          <Card 
            key={tier.name} 
            className={`relative ${
              tier.highlighted 
                ? 'border-primary shadow-lg scale-105' 
                : 'border-border'
            }`}
          >
            {tier.highlighted && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                  Popular
                </span>
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
              <CardDescription className="mt-2">{tier.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">${tier.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                variant={tier.highlighted ? "default" : "outline"}
              >
                {tier.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
