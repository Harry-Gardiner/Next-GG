import "../styles/main.scss";

export const metadata = {
  title: "Gardiners Gas & Plumbing | Dorchester, Weymouth & Surrounding Areas",
  description: "Dorchester based gas and plumbing services. Servicing in Dorchester, Weymouth and surrounding areas. Contact us for a free quote. Services include boiler installation, boiler servicing, boiler repairs, gas safety checks, gas appliance installation, gas appliance servicing, gas appliance repairs, plumbing installation, plumbing repairs, bathroom installation, bathroom repairs, landlord gas safety checks, and more.",
  keywords: "Gas, Plumbing, Dorchester, Weymouth, Gas Safe, Heating, Boiler, Installation, Servicing, Repairs, Safety Checks, Appliance, Plumbing, Bathroom, Landlord, Gas Safety Checks",
  noindex: true, // remove for production
  nofollow: true, // remove for production
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
