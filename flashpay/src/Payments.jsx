import React, { useState } from 'react';

const Payments = () => {
  const [from, setFrom] = useState('');
  const [toOptions, setToOptions] = useState([]);
  const [to, setTo] = useState('');
  const [selectedSeat, setSelectedSeat] = useState(null);

  const routes = {
    Nairobi: ['Kisumu', 'Mombasa', 'Nakuru'],
    Kisumu: ['Nairobi', 'Eldoret'],
    Mombasa: ['Nairobi'],
    Nakuru: ['Nairobi', 'Kisumu'],
  };

  const seats = Array.from({ length: 12 }, (_, i) => i + 1); // 12 seats

  const handleFromChange = (e) => {
    const selectedFrom = e.target.value;
    setFrom(selectedFrom);
    setToOptions(routes[selectedFrom] || []);
    setTo('');
  };

  const handleSeatClick = (seat) => {
    setSelectedSeat(seat);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>FlashPay - Payment Page</h1>

      {/* Vehicle Info */}
      <div>
        <p><strong>Vehicle No Plate:</strong> KDA 123A</p>
        <p><strong>Driver:</strong> John Doe</p>
        <p><strong>Conductor:</strong> Jane Doe</p>
      </div>

      {/* From and To Dropdowns */}
      <div style={{ marginTop: '20px' }}>
        <label>From: </label>
        <select value={from} onChange={handleFromChange}>
          <option value="">Select origin</option>
          {Object.keys(routes).map((location) => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>

        <label style={{ marginLeft: '20px' }}>To: </label>
        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          disabled={!from}
        >
          <option value="">Select destination</option>
          {toOptions.map((dest) => (
            <option key={dest} value={dest}>{dest}</option>
          ))}
        </select>
      </div>

      {/* Seat Selection */}
      <div style={{ marginTop: '20px' }}>
        <p><strong>Select Seat:</strong></p>
        <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '240px' }}>
          {seats.map((seat) => (
            <button
              key={seat}
              onClick={() => handleSeatClick(seat)}
              style={{
                width: '50px',
                height: '50px',
                margin: '5px',
                backgroundColor: selectedSeat === seat ? 'green' : 'lightgray',
                border: '1px solid #000',
              }}
            >
              {seat}
            </button>
          ))}
        </div>
      </div>

      {/* Confirm Button */}
      <div style={{ marginTop: '30px' }}>
        <button
          onClick={() =>
            alert(`Booking from ${from} to ${to}, Seat: ${selectedSeat}`)
          }
          disabled={!from || !to || !selectedSeat}
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default Payments;
