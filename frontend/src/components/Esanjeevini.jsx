import backgroundImage from '../assets/esanjeev.jpg'; 
import { useNavigate } from 'react-router-dom';

const Esanjeevini = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate('/printer');
  };
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <button onClick={()=>handleclick()} className="bg-blue-500 text-white px-8 py-4 rounded-lg shadow-md text-xl hover:bg-blue-600">
          PRESCRIPTION
        </button>
      </div>
    </div>
  );
};

export default Esanjeevini;
