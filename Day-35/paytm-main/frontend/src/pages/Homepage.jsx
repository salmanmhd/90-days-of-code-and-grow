import React from "react";
import { CreditCard, Shield, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const glassMorphismStyle = {
  background: "rgba(23, 23, 23, 0.8)",
  backdropFilter: "blur(16px)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "16px",
};

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      <header className="container mx-auto px-6 py-4">
        <div
          className="flex items-center justify-between"
          style={glassMorphismStyle}
        >
          <h1 className="p-4 text-2xl font-bold">PayEase</h1>
          <nav className="p-4">
            <button
              onClick={() => navigate("/login")}
              className="inline-block rounded-full bg-blue-600 px-10 py-2 text-xl font-bold text-white transition-colors hover:bg-blue-700"
            >
              Login
            </button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto mt-60 px-6 py-12">
        <section className="mb-16 text-center">
          <h2 className="mb-6 text-5xl font-bold">Simplify Your Payments</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Experience fast, secure, and seamless transactions at your
            fingertips. PayEase revolutionizes the way you handle money.
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="inline-block rounded-lg bg-blue-600 px-20 py-3 text-xl font-bold text-white transition-colors hover:bg-blue-700"
          >
            Get Started
          </button>
        </section>

        <section className="mb-16 mt-60 grid gap-8 md:grid-cols-3">
          {[
            {
              icon: <CreditCard className="mb-4 h-12 w-12" />,
              title: "Easy Payments",
              description: "Send and receive money with just a few taps.",
            },
            {
              icon: <Shield className="mb-4 h-12 w-12" />,
              title: "Secure Transactions",
              description: "Bank-level encryption keeps your money safe.",
            },
            {
              icon: <Zap className="mb-4 h-12 w-12" />,
              title: "Instant Transfers",
              description: "Lightning-fast transactions, anytime, anywhere.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-8 text-center"
              style={glassMorphismStyle}
            >
              {feature.icon}
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </section>

        <section className="mb-16 text-center" style={glassMorphismStyle}>
          <div className="p-10">
            <h2 className="mb-6 text-4xl font-bold">Ready to Get Started?</h2>
            <p className="mb-8 text-xl">
              Join thousands of satisfied users and experience the future of
              payments today.
            </p>
            <a
              href="#sign-up"
              className="inline-block rounded-full bg-blue-600 px-8 py-3 text-lg font-bold text-white transition-colors hover:bg-blue-700"
            >
              Create Your Account
            </a>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-6 py-4 text-center">
        <p>&copy; 2023 PayEase. All rights reserved.</p>
      </footer>
    </div>
  );
}
