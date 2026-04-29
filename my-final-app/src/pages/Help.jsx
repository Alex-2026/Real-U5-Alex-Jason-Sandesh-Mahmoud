import FAQAccordion from "./FAQAccordion";

export default function Help() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Parking Support</h1>
      <FAQAccordion 
        question="How do I add a new payment method?" 
        answer="Go to your Profile page and click on 'Payment Methods' to update your card info." 
      />
      <FAQAccordion 
        question="Is my data secure?" 
        answer="Yes, we use end-to-end encryption for all transactions." 
      />
    </div>
  );
}