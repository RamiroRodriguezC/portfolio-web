import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  tags: [{ type: String, trim: true }],
  githubUrl: { type: String, trim: true },
  liveUrl: { type: String, trim: true },
  image: { type: String, trim: true },
}, { timestamps: true, toJSON: { transform: (doc, ret) => { delete ret.__v; return ret; } } });

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;

async function connectDB() {
  if (mongoose.connection.readyState === 0 && mongoUri) {
    await mongoose.connect(mongoUri);
  }
}

export default async function handler(req, res) {
  await connectDB();
  
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const projects = await Project.find().sort({ createdAt: -1 }).lean();
        res.status(200).json(projects);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching projects' });
      }
      break;
    default:
      res.status(405).json({ error: 'Method not allowed' });
  }
}
