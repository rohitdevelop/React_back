import React, { useState, useEffect } from "react";

const Booking = () => {
  const [vipSeats] = useState([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20],
    [21, 22, 23, 24],
  ]);
  const [reservedSeats] = useState([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30],
  ]);
  const [generalSeats] = useState([
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36],
  ]);

  // State to hold booked seats loaded from localStorage
  const [selectedVIP, setSelectedVIP] = useState([]);
  const [selectedReserved, setSelectedReserved] = useState([]);
  const [selectedGeneral, setSelectedGeneral] = useState([]);

  // Load booked seats from localStorage on mount
  useEffect(() => {
    const savedSeats = JSON.parse(localStorage.getItem("BookedSeats"));
    if (savedSeats) {
      setSelectedVIP(savedSeats.selectedVIP || []);
      setSelectedReserved(savedSeats.selectedReserved || []);
      setSelectedGeneral(savedSeats.selectedGeneral || []);
    }
  }, []);

  function bookingbtn() {
    alert(
      `You booked VIP Seats: ${selectedVIP}, Reserved Seats: ${selectedReserved}, General Seats: ${selectedGeneral}`
    );
  }

  // Save booked seats to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(
      "BookedSeats",
      JSON.stringify({
        selectedVIP,
        selectedReserved,
        selectedGeneral,
      })
    );
  }, [selectedVIP, selectedReserved, selectedGeneral]);

  // Booking handlers
const handleVipClick = (seat) => {
  if (selectedVIP.length >= 5) {
    alert('You can’t select more than five VIP seats');
  } else if (!selectedVIP.includes(seat)) {
    setSelectedVIP((prev) => [...prev, seat]);
  }
};


  const handleReservedClick = (seat) => {
    if (!selectedReserved.includes(seat)) {
      setSelectedReserved((prev) => [...prev, seat]);
    }
  };

  const handleGeneralClick = (seat) => {
    if (!selectedGeneral.includes(seat)) {
      setSelectedGeneral((prev) => [...prev, seat]);
    }
  };

  function vipreset() {
    setSelectedVIP([]);
  }
  function rejreset() {
    setSelectedReserved([]);
  }
  function genreset() {
    setSelectedGeneral([]);
  }
  return (
    <div className="text-center mt-10 px-4">
      {/* VIP Section */}
      <div className="mb-12">
        <p className="text-3xl text-red-600 font-bold mb-6">🎟️ VIP Seats</p>
        {vipSeats.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-4 mb-2">
            {row.map((seat) => {
              const isBooked = selectedVIP.includes(seat);
              return (
                <button
                  key={seat}
                  onClick={() => handleVipClick(seat)}
                  disabled={isBooked}
                  className={`${
                    isBooked
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-red-500 hover:bg-red-700"
                  } text-white font-bold py-2 px-4 rounded`}
                >
                  {seat}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <button
        className="border-2 rounded-2xl border-black bg-red-500  text-white p-1"
        onClick={vipreset}
      >
        reset all
      </button>
      {/* Reservation Section */}
      <div className="mb-12">
        <p className="text-3xl text-green-600 font-bold mb-6">
          🪑 Reservation Seats
        </p>
        {reservedSeats.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-4 mb-2">
            {row.map((seat) => {
              const isBooked = selectedReserved.includes(seat);
              return (
                <button
                  key={seat}
                  onClick={() => handleReservedClick(seat)}
                  disabled={isBooked}
                  className={`${
                    isBooked
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-green-500 hover:bg-green-700"
                  } text-white font-bold py-2 px-4 rounded`}
                >
                  {seat}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      <button
        className="border-2 rounded-2xl border-black bg-green-500  text-white p-1"
        onClick={rejreset}
      >
        reset all
      </button>

      {/* General Section */}
      <div className="mb-12">
        <p className="text-3xl text-blue-600 font-bold mb-6">
          👥 General Seats
        </p>
        {generalSeats.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex justify-center gap-4 mb-2 flex-wrap"
          >
            {row.map((seat) => {
              const isBooked = selectedGeneral.includes(seat);
              return (
                <button
                  key={seat}
                  onClick={() => handleGeneralClick(seat)}
                  disabled={isBooked}
                  className={`${
                    isBooked
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-700"
                  } text-white font-bold py-2 px-4 rounded`}
                >
                  {seat}
                </button>
              );
            })}
          </div>
        ))}
        <button
          className="border-2 rounded-2xl border-black bg-blue-500  text-white p-1"
          onClick={genreset}
        >
          reset all
        </button>
      </div>
      <button
        className="border-4 border-black bg-black text-2xl text-white m-8 p-2"
        onClick={bookingbtn}
      >
        Book all
      </button>
    </div>
  );
};

export default Booking;
