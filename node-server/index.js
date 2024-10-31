const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http'); // Import http module
const { Server } = require('socket.io'); // Import Socket.IO

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Create HTTP server
const server = http.createServer(app); // Use the HTTP server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Update this to match your frontend URL
    methods: ["GET", "POST"],
    credentials: true,
  }
}); // Create a Socket.IO server with CORS options

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/careers', {
  // Removed deprecated options
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Define schema and model for careers
const careerSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  careType: String,
  startDate: Date,
  timeSchedule: String,
  recurringSchedule: String,
  serviceLocation: String,
  additionalServices: String,
  specialInstructions: String,
  emergencyContact: String,
});

const Career = mongoose.model('Career', careerSchema);

// Define schema and model for contact us
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// Define schema and model for appointments
const appointmentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  address: String,
  phone: String,
  date: Date,
  notes: String,
  previousApplication: String,
  procedure: String,
  medications: [{ name: String, dose: String, time: String }], // For medications
  nextAppointmentDate: Date, // For next appointment date
  nextAppointmentTime: String, // For next appointment time
  appointmentType: String, // For type of appointment (In-person or Video Call)
  dailyActivities: String, // For daily activities
  diet: String, // For diet
  sleepSchedule: String, // For sleep schedule
  createdAt: { type: Date, default: Date.now } // Add createdAt field
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

// API route to handle career form submission
app.post('/api/careers', async (req, res) => {
  const careerData = new Career(req.body);
  try {
    await careerData.save();
    res.status(201).json({ message: 'Career information saved successfully!' });
  } catch (error) {
    res.status(400).json({ message: 'Error saving career information', error });
  }
});

// API route to handle contact form submission
app.post('/api/contact', async (req, res) => {
  const contactData = new Contact(req.body);
  try {
    await contactData.save();
    res.status(201).json({ message: 'Contact information saved successfully!' });
  } catch (error) {
    res.status(400).json({ message: 'Error saving contact information', error });
  }
});

// API route to handle appointment form submission without saving data
app.post('/api/appointments', async (req, res) => {
  const appointmentData = new Appointment(req.body);
  try {
    await appointmentData.save(); // Save the data to MongoDB
    res.status(201).json({ message: 'Appointment information saved successfully!' });
  } catch (error) {
    res.status(400).json({ message: 'Error saving appointment information', error });
  }
});

// New API route to fetch the latest appointment
app.get('/api/appointments/latest', async (req, res) => {
  try {
    const latestAppointment = await Appointment.findOne().sort({ createdAt: -1 });
    console.log("Latest Appointment:", latestAppointment); // Log the fetched data
    if (latestAppointment) {
      res.status(200).json(latestAppointment);
    } else {
      res.status(404).json({ message: 'No appointments found' });
    }
  } catch (error) {
    console.error('Error fetching appointments:', error); // Log any errors
    res.status(500).json({ message: 'Error fetching appointments', error });
  }
});

// Socket.IO setup for video chat
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  // Handle video chat events
  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    console.log(`User joined room: ${roomId}`);
  });

  socket.on('signal', (data) => {
    io.to(data.roomId).emit('signal', {
      signal: data.signal,
      senderId: socket.id,
    });
  });
});

// Start the server
server.listen(PORT, () => { // Start the HTTP server
  console.log(`Server is running on port ${PORT}`);
});
