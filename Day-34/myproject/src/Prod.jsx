import { useState } from "react";
import {
  ChevronRight,
  CheckCircle,
  Clock,
  BarChart,
  Users,
  Zap,
  Menu,
  X,
  Star,
} from "lucide-react";

export default function ImprovedProductivityLanding() {
  const [email, setEmail] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Submitted email:", email);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="bg-gray-800 py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center">
            <Zap className="mr-2 h-8 w-8 text-emerald-400" />
            <span className="text-2xl font-bold">ProductivityPro</span>
          </div>
          <div className="hidden space-x-6 md:flex">
            <a
              href="#features"
              className="transition duration-300 hover:text-emerald-400"
            >
              Features
            </a>
            <a
              href="#workflow"
              className="transition duration-300 hover:text-emerald-400"
            >
              Workflow
            </a>
            <a
              href="#pricing"
              className="transition duration-300 hover:text-emerald-400"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="transition duration-300 hover:text-emerald-400"
            >
              Testimonials
            </a>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-gray-800 py-4 md:hidden">
          <div className="container mx-auto flex flex-col space-y-4 px-4">
            <a
              href="#features"
              className="transition duration-300 hover:text-emerald-400"
            >
              Features
            </a>
            <a
              href="#workflow"
              className="transition duration-300 hover:text-emerald-400"
            >
              Workflow
            </a>
            <a
              href="#pricing"
              className="transition duration-300 hover:text-emerald-400"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="transition duration-300 hover:text-emerald-400"
            >
              Testimonials
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-gray-900 opacity-50"></div>
        <div className="container relative z-10 mx-auto px-4 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-5xl font-bold text-transparent">
              Boost Your Productivity with ProductivityPro
            </h1>
            <p className="mb-8 text-xl">
              Streamline your workflow, collaborate seamlessly, and achieve more
              in less time. Join thousands of professionals who have transformed
              their work habits.
            </p>
            <form onSubmit={handleSubmit} className="mx-auto flex max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow rounded-l-lg border border-gray-700 bg-gray-800 px-4 py-2 focus:border-emerald-500 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="rounded-r-lg bg-emerald-500 px-6 py-2 transition duration-300 hover:bg-emerald-600"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Powerful Features to Supercharge Your Work
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <Clock className="h-8 w-8 text-emerald-400" />,
                title: "Smart Time Tracking",
                description:
                  "Automatically track time spent on tasks and projects with intelligent categorization.",
              },
              {
                icon: <BarChart className="h-8 w-8 text-emerald-400" />,
                title: "Advanced Analytics Dashboard",
                description:
                  "Gain insights into your productivity patterns with detailed charts and reports.",
              },
              {
                icon: <Users className="h-8 w-8 text-emerald-400" />,
                title: "Seamless Team Collaboration",
                description:
                  "Share tasks, communicate, and align your teams efforts in real-time.",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-emerald-400" />,
                title: "Goal Setting & Tracking",
                description:
                  "Set SMART goals and track your progress with visual milestone markers.",
              },
              {
                icon: <Zap className="h-8 w-8 text-emerald-400" />,
                title: "AI-Powered Suggestions",
                description:
                  "Receive personalized productivity tips based on your work patterns.",
              },
              {
                icon: <Star className="h-8 w-8 text-emerald-400" />,
                title: "Customizable Workflows",
                description:
                  "Create and optimize workflows that fit your unique productivity style.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="rounded-lg bg-gray-700 p-6 transition duration-300 hover:shadow-lg"
              >
                {feature.icon}
                <h3 className="mb-2 mt-4 text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Streamlined Workflow
          </h2>
          <div className="mx-auto max-w-4xl">
            {[
              "Set clear goals and priorities using our intuitive goal-setting interface",
              "Track time spent on tasks with our smart, automatic time tracker",
              "Analyze productivity patterns through our comprehensive analytics dashboard",
              "Receive AI-powered suggestions to optimize your work habits",
              "Collaborate with your team using our seamless communication tools",
              "Adjust and refine your workflow based on data-driven insights",
            ].map((step, index) => (
              <div key={index} className="mb-6 flex items-center">
                <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500">
                  {index + 1}
                </div>
                <p className="text-lg">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Choose Your Productivity Plan
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                name: "Basic",
                price: "$9.99",
                features: [
                  "Smart Time Tracking",
                  "Basic Analytics",
                  "Personal Goal Setting",
                ],
              },
              {
                name: "Pro",
                price: "$19.99",
                features: [
                  "All Basic features",
                  "Advanced Analytics",
                  "Team Collaboration",
                  "AI-Powered Suggestions",
                ],
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: [
                  "All Pro features",
                  "Customizable Workflows",
                  "Dedicated Support",
                  "Advanced Security",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="rounded-lg bg-gray-700 p-6 transition duration-300 hover:shadow-lg"
              >
                <h3 className="mb-4 text-2xl font-bold">{plan.name}</h3>
                <p className="mb-6 text-4xl font-bold text-emerald-400">
                  {plan.price}
                </p>
                <ul className="mb-6">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="mb-2 flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-emerald-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full rounded-lg bg-emerald-500 px-4 py-2 transition duration-300 hover:bg-emerald-600">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                quote:
                  "ProductivityPro has transformed the way our team works. We've seen a 30% increase in productivity since implementing it.",
                author: "Jane Doe, CEO of TechCorp",
              },
              {
                quote:
                  "The AI-powered suggestions have helped me optimize my daily routine. I'm getting more done in less time!",
                author: "John Smith, Freelance Designer",
              },
              {
                quote:
                  "As a project manager, the team collaboration features have been a game-changer for coordinating our efforts.",
                author: "Emily Chen, Senior Project Manager",
              },
              {
                quote:
                  "The customizable workflows allowed us to tailor ProductivityPro to our unique business processes. Highly recommended!",
                author: "Michael Johnson, Operations Director",
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-lg bg-gray-800 p-6 shadow-lg">
                <blockquote className="mb-4 text-lg italic">
                  `{testimonial.quote}`
                </blockquote>
                <p className="font-semibold text-emerald-400">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-emerald-900 to-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Ready to Boost Your Productivity?
          </h2>
          <p className="mb-8 text-xl">
            Join thousands of professionals who have already transformed their
            work habits with ProductivityPro.
          </p>
          <button className="inline-flex items-center rounded-lg bg-emerald-500 px-8 py-3 text-lg font-semibold transition duration-300 hover:bg-emerald-600">
            Start Your Free Trial
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition duration-300 hover:text-emerald-400"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition duration-300 hover:text-emerald-400"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition duration-300 hover:text-emerald-400"
                  >
                    Use Cases
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition duration-300 hover:text-emerald-400"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition duration-300 hover:text-emerald-400"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition duration-300 hover:text-emerald-400"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition duration-300 hover:text-emerald-400"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition duration-300 hover:text-emerald-400"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition duration-300 hover:text-emerald-400"
                  >
                    API Docs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition duration-300 hover:text-emerald-400"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition duration-300 hover:text-emerald-400"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition duration-300 hover:text-emerald-400"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ProductivityPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
