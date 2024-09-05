import backgroundImage from '../assets/esanjeev.jpg'; 

const Esanjeevini = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <button className="bg-blue-500 text-white px-8 py-4 rounded-lg shadow-md text-xl hover:bg-blue-600">
          PRINT
        </button>
      </div>
    </div>
  );
};

export default Esanjeevini;
