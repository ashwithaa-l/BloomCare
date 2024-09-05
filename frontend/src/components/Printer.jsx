import React, { useState, useCallback } from 'react';

function generateRandomPrescription() {
    const medicines = [
        { name: 'Paracetamol 500mg', dosage: 'Take one tablet daily after meals' },
        { name: 'Cough Syrup', dosage: '2 teaspoons twice a day' },
        { name: 'Ibuprofen 400mg', dosage: 'One tablet in the morning before breakfast' },
        { name: 'Multivitamin Tonic', dosage: '1 tablespoon once daily' },
        { name: 'Amoxicillin 250mg', dosage: 'Take one tablet every night before sleep' }
    ];

    return medicines
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map(med => `- ${med.name}: ${med.dosage}`)
        .join('\n');
}

function Printer() {
    const [prescription, setPrescription] = useState(generateRandomPrescription());
    const date = new Date().toLocaleDateString();

    const printPrescription = useCallback(() => {
        const prescriptionText = `
            Doctor's Prescription
            ---------------------
            Patient Name: Leela
            Date: ${date}

            Prescription Details:
            ${prescription}
        `;
        const printWindow = window.open('', '', 'height=400,width=600');
        printWindow.document.write('<pre class="font-handwriting">' + prescriptionText + '</pre>');
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    }, [date, prescription]);

    const refreshPrescription = () => {
        setPrescription(generateRandomPrescription());
    };

    return (
        <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg">
            <div className="mb-4 p-6 border border-gray-300 rounded-md bg-yellow-50">
                <pre className="font-mono text-sm sm:text-base whitespace-pre-wrap break-words">
                    {`Doctor's Prescription
--------------------
Patient Name: Leela
Date: ${date}

Prescription Details:
${prescription}`}
                </pre>
            </div>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                <button 
                    onClick={printPrescription}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                    Print
                </button>
                <button 
                    onClick={refreshPrescription}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                    Refresh
                </button>
            </div>
        </div>
    );
}

export default Printer;