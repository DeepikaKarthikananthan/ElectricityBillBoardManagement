import React, { useState } from 'react';

const DomesticBillCal = ({ consumedUnits, onCalculate }) => {
    const calculateBill = () => {
        let calculatedBill = 0;
        const units = parseFloat(consumedUnits);

       
            if (units <= 100) {
                calculatedBill = 0;
            } else if (units <= 200) {
                calculatedBill = (units - 100) * 2.35;   
            } else if (units <= 400) {
                calculatedBill = 100 * 0 + 100 * 2.35 + (units - 200) * 4.70;
            } else if (units <= 500) {
                calculatedBill= 100 * 0 + 100 * 2.35 + 200 * 4.70 + (units - 400) * 6.30;
            } else if (units <= 600) {
                calculatedBill = 100 * 0 + 100 * 2.35 + 200 * 4.70 + 100 * 6.30 + (units - 500) * 8.40;
            } else if (units <= 800) {
                calculatedBill= 100 * 0 + 100 * 2.35 + 200 * 4.70 + 100 * 6.30 + 100 * 8.40 + (units - 600) * 9.45;
            } else if (units <= 1000) {
                calculatedBill= 100 * 0 + 100 * 2.35 + 200 * 4.70 + 100 * 6.30 + 100 * 8.40 + 200 * 9.45 + (units - 800) * 10.50;
            } else {
                calculatedBill = 100 * 0 + 100 * 2.35 + 200 * 4.70 + 100 * 6.30 + 100 * 8.40 + 200 * 9.45 + 200 * 10.50 + (units - 1000) * 11.55;
            }
        
        onCalculate(calculatedBill); // Call the parent callback with the bill amount
    };

    return (
        <div>
            <button 
                onClick={calculateBill}
                style={{
                    background: 'linear-gradient(to right, #5e2c7a, #3b0f8a, #26098e)', // Gradient background
                    color: 'white', // Text color
                    border: 'none', // Remove default border
                    padding: '10px 20px', // Add padding
                    borderRadius: '5px', // Round corners
                    cursor: 'pointer', // Change cursor on hover
                    fontSize: '16px', // Font size
                    fontWeight: 'bold' // Font weight
                }}
            >
                Calculate Domestic Bill
            </button>
        </div>
    );
};

export default DomesticBillCal;
