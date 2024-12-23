import Navigation from './components/Navigation';
import './globals.css';
export const metadata = {
  title: 'todo',
  description: 'Generated by coolchamp',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-blue-950 text-white'>
        <div className='flex items-center justify-between py-2 px-10 border-b border-black h-16'>
          <h1 className='text-xl font-bold'>Todo</h1>
          <Navigation />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
