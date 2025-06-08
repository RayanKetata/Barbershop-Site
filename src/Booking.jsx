import React, { useState } from "react";
import "./Booking.css";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

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

const slots = generateTimeSlots();

function get24Hour(slot) {
  let [time, ampm] = slot.split(" ");
  let [hour, min] = time.split(":").map(Number);
  if (ampm === "PM" && hour !== 12) hour += 12;
  if (ampm === "AM" && hour === 12) hour = 0;
  return hour + min / 60;
}

const morning = slots.filter(slot => {
  const t = get24Hour(slot);
  return t >= 8 && t < 12;
});
const midday = slots.filter(slot => {
  const t = get24Hour(slot);
  return t >= 12 && t < 16; 
});
const evening = slots.filter(slot => {
  const t = get24Hour(slot);
  return t >= 16 && t < 20; 
});

const Booking = () => {
  const [form, setForm] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
  });
  const navigate = useNavigate(); 

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const selectTime = t => {
    setForm({ ...form, time: t });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.service || !form.date || !form.time || !form.name) {
      alert("Please fill in all required fields (Service, Time, Date and Name).");
      return;
    }
    window.alert(
      `Booking confirmed!\nService: ${form.service}\nDate: ${form.date}\nTime: ${form.time}\nName: ${form.name}\nEmail: ${form.email || "(not provided)"}`
    );
    setForm({ service: "", date: "", time: "", name: "", email: "" });
    navigate("/"); 
  };

  return (
    <section id="book" className="booking-section">
      <h2>Book Your Cut</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          required
        >
          <option value="">Type of haircut</option>
          <option value="Taper">Taper Fade</option>
          <option value="Fade">Regular Haircut</option>
          <option value="Beard Lineup">Beard Lineup/Shapeup</option>
          <option value="Shave">Kidz Cut</option>
        </select>

        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          required
        />

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
        <input
         type="text"
        name="name"
        placeholder="Full Name (required)"
        value={form.name}
        onChange={handleChange}
        required
        />
        <input
         type="email"
        name="email"
        placeholder="Email (optional)"
        value={form.email}
        onChange={handleChange}
        />
        <button type="submit" className="cta-button">Book Now</button>
      </form>
    </section>
  );
};

export default Booking;
