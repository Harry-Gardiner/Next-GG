import "../styles/main.scss";

export const metadata = {
  title: "Gardiners Gas & Plumbing",
  description: "Dorchester based gas and plumbing services. Servicing in Dorchester, Weymouth and surrounding areas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
