import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SpidermanSuit from '@/components/SpidermanSuit';
import modelsUrls from '@/constants/modelsUrls';

const HomemadeSuit = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gradient-to-br from-black to-gray-800 text-white flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-4xl w-full flex flex-col md:flex-row items-center md:items-stretch md:text-left">
          <div className="w-full h-[75dvh] md:w-1/2 p-4 flex justify-center items-center">
            <div className="w-full h-full flex justify-center items-center border-2 border-red-500 rounded-lg">
              <SpidermanSuit modelPath={modelsUrls.homemadeSuit} />
            </div>
          </div>
          <div className="w-full h-[75dvh] md:w-1/2 p-4 flex justify-center items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-spidermanRed mb-4">Homemade Suit</h1>
              <p className="text-lg md:text-xl mb-4">The Homemade Suit is a makeshift costume worn by Peter Parker in Spiderman: Homecoming. It features a hoodie, goggles, and a web-shooter.</p>
              <p className="text-lg md:text-xl">This suit represents Peter{"'"}s ingenuity and resourcefulness, made with limited resources but a lot of heart.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomemadeSuit;
