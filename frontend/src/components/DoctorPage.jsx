import { useState, useEffect } from 'react';

const DoctorPage = () => {
  const [isAvailable, setIsAvailable] = useState(false);
  const [requests, setRequests] = useState([]);
  const [treatedPatients, setTreatedPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Simulating fetching data from the backend
  useEffect(() => {
    // Simulated patient requests
    setRequests([
      { id: 1, name: 'John Doe', issue: 'Headache' },
      { id: 2, name: 'Jane Smith', issue: 'Fever' },
    ]);

    // Simulated treated patients
    setTreatedPatients([
      { id: 1, name: 'Alice Brown', treatment: 'Prescription for headache' },
      { id: 2, name: 'Bob Johnson', treatment: 'Treatment for cold' },
    ]);
  }, []);

  const handleToggle = () => {
    setIsAvailable(!isAvailable);
  };

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
  };

  const handleBackClick = () => {
    setSelectedPatient(null);
  };

  if (selectedPatient) {
    return (
      <div
        className="flex items-center justify-center h-screen w-screen bg-gray-50"
        style={{
          backgroundImage: 'url("https://wallpapercave.com/wp/wp2979775.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 bg-opacity-70 h-4/5 overflow-auto">
          <button onClick={handleBackClick} className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
            Back
          </button>
          <h2 className="text-2xl font-semibold mb-4">Patient Details</h2>
          <div className="p-4 bg-gray-100 rounded-lg">
            <p>
              <strong>Name:</strong> {selectedPatient.name}
            </p>
            <p>
              <strong>{selectedPatient.issue ? 'Issue' : 'Treatment'}:</strong> {selectedPatient.issue || selectedPatient.treatment}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col items-center justify-start h-screen w-screen bg-gray-50"
      style={{
        backgroundImage: 'url("https://wallpaperaccess.com/full/136949.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white p-4 rounded-lg shadow-lg w-11/12 mt-6 bg-opacity-70">
        <div className="flex items-center justify-between">
          <span className="text-xl font-medium">Status:</span>
          <span className={`text-xl font-medium ${isAvailable ? 'text-green-500' : 'text-red-500'}`}>
            {isAvailable ? 'Available' : 'Not Available'}
          </span>
          <button
            onClick={handleToggle}
            className={`px-4 py-2 rounded-lg font-semibold ${
              isAvailable ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
            }`}
          >
            {isAvailable ? 'Mark as Not Available' : 'Mark as Available'}
          </button>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 mt-6 bg-opacity-30 h-full overflow-auto">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Patient Requests</h2>
          {requests.length > 0 ? (
            <ul>
              {requests.map((request) => (
                <li
                  key={request.id}
                  className="mb-2 p-6 bg-gray-100 rounded-lg cursor-pointer"
                  onClick={() => handlePatientClick(request)}
                >
                  <p>
                    <strong>Name:</strong> {request.name}
                  </p>
                  <p>
                    <strong>Issue:</strong> {request.issue}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No patient requests</p>
          )}
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Treated Patients</h2>
          {treatedPatients.length > 0 ? (
            <ul>
              {treatedPatients.map((patient) => (
                <li
                  key={patient.id}
                  className="mb-2 p-7 bg-gray-100 rounded-lg cursor-pointer"
                  onClick={() => handlePatientClick(patient)}
                >
                  <p>
                    <strong>Name:</strong> {patient.name}
                  </p>
                  <p>
                    <strong>Treatment:</strong> {patient.treatment}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No treated patients</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorPage;
