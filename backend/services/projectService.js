const Project = require('../models/Project');

const projectService = {
  async findAll() {
    return await Project.find().sort({ createdAt: -1 }).lean();
  },

  async findById(id) {
    return await Project.findById(id).lean();
  },

  async create(data) {
    const project = new Project(data);
    return await project.save();
  },

  async update(id, data) {
    return await Project.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  },

  async delete(id) {
    return await Project.findByIdAndDelete(id);
  },
};

module.exports = projectService;
