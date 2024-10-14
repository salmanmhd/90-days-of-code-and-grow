import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  MapPin,
  Phone,
  Mail,
  Home,
  Users,
  Shield,
  Coffee,
  Wifi,
  DollarSign,
  Dumbbell,
  Table,
  Gamepad2,
  Utensils,
  Sparkles,
  MapIcon,
  Wrench,
} from 'lucide-react';

export default function Homepage() {
  return (
    <div className='min-h-screen  bg-black text-gray-300'>
      {/* Header */}
      <header className='fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-indigo-950/50'>
        <div className='container mx-auto flex h-16 items-center justify-between px-4'>
          <p className='flex items-center space-x-2'>
            <Home className='h-6 w-6 text-indigo-400' />
            <span className='font-bold text-xl text-indigo-400'>StayEase</span>
          </p>
          <nav className='hidden md:flex space-x-6'>
            <p className='text-sm font-medium hover:text-indigo-400 transition-colors'>
              Home
            </p>
            <p className='text-sm font-medium hover:text-indigo-400 transition-colors'>
              Facilities
            </p>
            <p className='text-sm font-medium hover:text-indigo-400 transition-colors'>
              Rooms
            </p>
            <p className='text-sm font-medium hover:text-indigo-400 transition-colors'>
              About
            </p>
            <p className='text-sm font-medium hover:text-indigo-400 transition-colors'>
              Contact
            </p>
          </nav>
          <Button
            size='lg'
            className='bg-indigo-700 hover:bg-indigo-600 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105'
          >
            Explore Rooms
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          {/* Add your background image here */}
        </div>
        <div className='absolute inset-0 bg-gradient-to-b from-black via-black/95 to-indigo-950/20 z-10'></div>
        <div className='relative z-20 text-center space-y-8 px-4 max-w-4xl mx-auto'>
          <h1 className='text-5xl py-6 sm:text-6xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x'>
            Welcome to StayEase
          </h1>
          <p className='text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto'>
            Experience luxury living with comfort, convenience, and an active
            lifestyle. Your perfect PG solution awaits.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              size='xl'
              variant='outline'
              className='border-indigo-700 mt-2 hover:text-indigo-900 text-indigo-100 hover:border-2 bg-indigo-950/50 px-12 py-3 text-xl  rounded-full transition-all duration-300 transform hover:scale-105'
            >
              Get Started
            </Button>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-20'></div>
      </section>

      {/* Why Choose Us Section */}
      <section id='why-choose-us' className='py-24 sm:py-32'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold tracking-tight text-center mb-12 text-indigo-100'>
            Why Choose Us?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                icon: Users,
                title: 'Spacious Rooms',
                description:
                  'Single, double, and triple-sharing options available, each room designed for comfort.',
              },
              {
                icon: DollarSign,
                title: 'Best Price',
                description:
                  'Competitive rates in the market without compromising on quality.',
              },
              {
                icon: Shield,
                title: '24/7 Security',
                description:
                  'Your safety is our priority. We provide round-the-clock surveillance and security.',
              },
              {
                icon: Wifi,
                title: 'High-Speed Wi-Fi',
                description:
                  'Stay connected with our complimentary high-speed internet.',
              },
              {
                icon: Utensils,
                title: 'Delicious Meals',
                description:
                  'Nutritious and home-cooked meals served daily to keep you healthy and energized.',
              },
              {
                icon: Sparkles,
                title: 'Housekeeping Services',
                description:
                  'Cleanliness is key! Regular housekeeping ensures a tidy and fresh environment.',
              },
              {
                icon: MapIcon,
                title: 'Prime Location',
                description:
                  'Situated in the heart of Noida, close to major landmarks and institutions.',
              },
              {
                icon: Wrench,
                title: 'Maintenance Support',
                description:
                  'Our maintenance team is just a call away for any repairs or issues.',
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className='bg-indigo-950/30 border-indigo-900/50 animate-fade-up'
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <feature.icon className='h-8 w-8 mb-2 text-indigo-400' />
                  <CardTitle className='text-indigo-100'>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-gray-400'>
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id='facilities' className='py-24 sm:py-32'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold tracking-tight text-center mb-12 text-indigo-100'>
            Our Facilities
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                icon: Coffee,
                title: 'Common Areas',
                description:
                  'Spacious common areas for relaxation and socializing.',
              },
              {
                icon: Dumbbell,
                title: 'Fitness Center',
                description: 'Stay fit with our fully-equipped gym.',
              },
              {
                icon: Table,
                title: 'Sports Facilities',
                description: 'Enjoy table tennis, badminton, and more.',
              },
              {
                icon: Gamepad2,
                title: 'Indoor Games',
                description:
                  'Relax with chess, carrom, and other indoor games.',
              },
              {
                icon: Utensils,
                title: 'Dining Area',
                description:
                  'Comfortable dining space for enjoying your meals.',
              },
              {
                icon: Sparkles,
                title: 'Laundry Services',
                description: 'On-site laundry facilities for your convenience.',
              },
            ].map((facility, index) => (
              <Card
                key={index}
                className='transition-all duration-300 hover:shadow-lg animate-fade-up bg-indigo-950/30 border-indigo-900/50'
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <facility.icon className='h-8 w-8 mb-2 text-indigo-400' />
                  <CardTitle className='text-indigo-100'>
                    {facility.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-gray-400'>
                    {facility.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id='rooms' className='py-24 sm:py-32 bg-indigo-950/20'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold tracking-tight text-center mb-12 text-indigo-100'>
            Our Rooms
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {['Single', 'Double', 'Triple'].map((roomType, index) => (
              <Card
                key={index}
                className='bg-indigo-950/30 border-indigo-900/50 overflow-hidden'
              >
                <div className='h-48 bg-indigo-900/30 flex items-center justify-center'>
                  <span className='text-indigo-200 text-lg'>
                    {roomType} Room
                  </span>
                </div>
                <CardHeader>
                  <CardTitle className='text-indigo-100'>
                    {roomType} Room
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-gray-400'>
                    Comfortable {roomType.toLowerCase()}-sharing accommodation
                    with modern amenities.
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-24 sm:py-32'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold tracking-tight text-center mb-12 text-indigo-100'>
            About StayEase
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div>
              <p className='text-gray-300 mb-4'>
                StayEase is more than just a PG; it&#39;s a community where
                comfort meets convenience. We understand the needs of students
                and young professionals, and we&#39;ve crafted our living spaces
                to cater to those needs.
              </p>
              <p className='text-gray-300 mb-4'>
                Our mission is to provide a home away from home, where you can
                focus on your goals while we take care of your living needs.
                With our prime location, top-notch facilities, and commitment to
                your well-being, StayEase is the perfect choice for your stay in
                Noida.
              </p>
              <Button className='bg-indigo-700 hover:bg-indigo-600 text-indigo-100'>
                Learn More
              </Button>
            </div>
            <div className='relative h-64 md:h-auto bg-indigo-950/30 rounded-lg flex items-center justify-center'>
              <span className='text-indigo-200 text-lg'>About StayEase</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-24 sm:py-32 bg-indigo-950/20'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold tracking-tight text-center mb-12 text-indigo-100'>
            Contact Us
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <Card className='bg-indigo-950/30 border-indigo-900/50'>
              <CardHeader>
                <CardTitle className='text-indigo-100'>Get in Touch</CardTitle>
                <CardDescription className='text-gray-400'>
                  We&#39;d love to hear from you. Send us a message and
                  we&#39;ll respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className='space-y-4'>
                  <Input
                    placeholder='Your Name'
                    className='bg-indigo-950/50 border-indigo-900 text-gray-200 placeholder:text-gray-500'
                  />
                  <Input
                    type='email'
                    placeholder='Your Email'
                    className='bg-indigo-950/50 border-indigo-900 text-gray-200 placeholder:text-gray-500'
                  />
                  <Input
                    placeholder='Subject'
                    className='bg-indigo-950/50 border-indigo-900 text-gray-200 placeholder:text-gray-500'
                  />
                  <textarea
                    className='min-h-[100px] w-full rounded-md border border-indigo-900 bg-indigo-950/50 px-3 py-2 text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-black'
                    placeholder='Your Message'
                  ></textarea>
                  <Button
                    type='submit'
                    className='w-full bg-indigo-700 hover:bg-indigo-600 text-indigo-100'
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            <Card className='bg-indigo-950/30 border-indigo-900/50'>
              <CardHeader>
                <CardTitle className='text-indigo-100'>
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='flex items-center space-x-2'>
                  <MapPin className='h-5 w-5 text-indigo-400' />
                  <span className='text-gray-300'>
                    123 PG Street, Noida, Uttar Pradesh
                  </span>
                </div>
                <div className='flex  items-center space-x-2'>
                  <Phone className='h-5 w-5 text-indigo-400' />
                  <span className='text-gray-300'>+91 123 456 7890</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <Mail className='h-5 w-5 text-indigo-400' />
                  <span className='text-gray-300'>info@stayease.com</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t border-indigo-950 bg-black'>
        <div className='container mx-auto py-8 px-4 flex flex-col sm:flex-row justify-between items-center'>
          <div className='flex items-center space-x-2'>
            <Home className='h-6 w-6 text-indigo-400' />
            <span className='font-bold text-xl text-indigo-400'>HomeSpace</span>
          </div>
          <div className='mt-4 sm:mt-0 text-sm text-gray-500'>
            © 2024 HomeSpace. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
