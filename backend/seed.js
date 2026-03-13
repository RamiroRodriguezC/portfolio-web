require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include cart management, payment integration, and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/user/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    image: '/images/ecommerce.jpg',
  },
  {
    title: 'Task Manager App',
    description: 'Productivity application for task management with real-time collaboration, drag-and-drop interface, and team workspaces.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/user/taskmanager',
    liveUrl: 'https://taskmanager.app',
    image: '/images/taskmanager.jpg',
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather application using OpenWeather API with location-based forecasts, interactive maps, and detailed analytics.',
    tags: ['JavaScript', 'API', 'Chart.js'],
    githubUrl: 'https://github.com/user/weather',
    liveUrl: 'https://weather-dashboard.com',
    image: '/images/weather.jpg',
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    await Project.deleteMany();
    console.log('Cleared existing projects');

    await Project.insertMany(projects);
    console.log('Seed data inserted successfully');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
