const projectService = require('../services/projectService');

const projectController = {
  async getAllProjects(req, res) {
    try {
      const projects = await projectService.findAll();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching projects' });
    }
  },

  async getProjectById(req, res) {
    try {
      const project = await projectService.findById(req.params.id);
      if (!project) {
        return res.status(404).json({ error: 'Project not found' });
      }
      res.json(project);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching project' });
    }
  },

  async createProject(req, res) {
    try {
      const project = await projectService.create(req.body);
      res.status(201).json(project);
    } catch (error) {
      res.status(500).json({ error: 'Error creating project' });
    }
  },

  async updateProject(req, res) {
    try {
      const project = await projectService.update(req.params.id, req.body);
      if (!project) {
        return res.status(404).json({ error: 'Project not found' });
      }
      res.json(project);
    } catch (error) {
      res.status(500).json({ error: 'Error updating project' });
    }
  },

  async deleteProject(req, res) {
    try {
      const project = await projectService.delete(req.params.id);
      if (!project) {
        return res.status(404).json({ error: 'Project not found' });
      }
      res.json({ message: 'Project deleted' });
    } catch (error) {
      res.status(500).json({ error: 'Error deleting project' });
    }
  },
};

module.exports = projectController;
