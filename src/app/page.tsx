import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Header from '@/components/Header';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Header imageUrl="/thumb-1920-899920.jpg" title="Spiderman Suits" subtitle="Explore the iconic Spiderman suits with detailed information and features." />
      <main className="flex-grow bg-gradient-to-br from-black to-gray-800 text-white flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-4xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-lg shadow-lg p-4">
              <h2 className="text-2xl font-bold mb-4">Homemade Suit</h2>
              <p className="text-lg">The Homemade Suit is a makeshift costume worn by Peter Parker in Spiderman: Homecoming.</p>
              <Link href="/homemade-suit" className="text-spidermanRed font-bold mt-4 block">
                Learn More
              </Link>
            </div>
            {/* Add more suit cards here */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
