import React, { useState } from "react";
import "./Booking.css";

// Generate 30-min slots from 8:00 AM to 8:00 PM
function generateTimeSlots(start = 8, end = 20, interval = 30) {
  const slots = [];
  for (let hour = start; hour < end; hour++) {
    for (let min = 0; min < 60; min += interval) {
      const h = hour % 12 === 0 ? 12 : hour % 12;
      const ampm = hour < 12 ? "AM" : "PM";
      const formatted = `${h}:${min === 0 ? "00" : min} ${ampm}`;
      slots.push(formatted);
    }
  }
  return slots;
}

// Split slots into morning, mid-day, evening
const slots = generateTimeSlots();
const morning = slots.filter(t => t.includes("AM"));
const midday = slots.filter(
  t => t.includes("PM") && parseInt(t) < 4
); // 12:00 PM–3:30 PM
const evening = slots.filter(
  t => t.includes("PM") && parseInt(t) >= 4
); // 4:00 PM–7:30 PM

const Booking = () => {
  const [form, setForm] = useState({
    service: "",
    date: "",
    time: "",
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const selectTime = t => {
    setForm({ ...form, time: t });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.service || !form.date || !form.time) {
      alert("Please select service, date, and time.");
      return;
    }
    alert(
      `Booking confirmed!\n\nService: ${form.service}\nDate: ${form.date}\nTime: ${form.time}`
    );
    setForm({ service: "", date: "", time: "" });
  };

  return (
    <section id="book" className="booking-section">
      <h2>Book Your Cut</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        {/* Haircut type */}
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          required
        >
          <option value="">Type of haircut</option>
          <option value="Taper">Taper</option>
          <option value="Fade">Fade</option>
          <option value="Beard Lineup">Beard Lineup</option>
          <option value="Shave">Shave</option>
        </select>

        {/* Date picker */}
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        {/* Time slots */}
        <div className="slot-group">
          <div>
            <h4>Morning</h4>
            <div className="slot-list">
              {morning.map(slot => (
                <button
                  type="button"
                  key={slot}
                  className={form.time === slot ? "active" : ""}
                  onClick={() => selectTime(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4>Mid-day</h4>
            <div className="slot-list">
              {midday.map(slot => (
                <button
                  type="button"
                  key={slot}
                  className={form.time === slot ? "active" : ""}
                  onClick={() => selectTime(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4>Evening</h4>
            <div className="slot-list">
              {evening.map(slot => (
                <button
                  type="button"
                  key={slot}
                  className={form.time === slot ? "active" : ""}
                  onClick={() => selectTime(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button type="submit" className="cta-button">Book Now</button>
      </form>
    </section>
  );
};

export default Booking;
