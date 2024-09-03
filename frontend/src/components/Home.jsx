import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate('/ChatBot');
  };

  return (
    <div className="bg-[url('./home.png')] h-screen bg-cover bg-center flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center text-center space-y-4 md:space-y-8 lg:space-y-12">
        <p className="text-4xl md:text-6xl lg:text-8xl font-bold">
          WELCOME TO BLOOM CARE
        </p>
        <p className="text-2xl md:text-4xl lg:text-5xl font-semibold">
          GET YOURSELF CURED
        </p>
        <p className="text-3xl md:text-5xl lg:text-7xl font-bold">
          HOW CAN I HELP YOU
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-8">
        <button
          onClick={handleHomeClick}
          className="text-xl md:text-2xl lg:text-3xl font-bold border border-white bg-white rounded-3xl px-8 py-3"
        >
          Chat with Me
        </button>
        <button className="text-xl md:text-2xl lg:text-3xl text-red-500 font-bold border border-white bg-white rounded-3xl px-8 py-3">
          Emergency
        </button>
      </div>
    </div>
  );
}

export default Home;
