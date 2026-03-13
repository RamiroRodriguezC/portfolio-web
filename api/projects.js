const projects = [
  {
    _id: "1",
    title: "Portfolio Web",
    description: "Mi portfolio personal construido con React, Node.js y MongoDB. Diseño inspirado en la UI de Google Search.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/RamiroRodriguezC/portfolio-web",
    liveUrl: "https://ramiro-rodriguez.dev"
  },
  {
    _id: "2",
    title: "E-commerce App",
    description: "Aplicación de comercio electrónico con carrito de compras, pagos y panel de administración.",
    tags: ["React", "Express", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/RamiroRodriguezC/ecommerce",
    liveUrl: ""
  },
  {
    _id: "3",
    title: "Task Manager",
    description: "Aplicación de gestión de tareas con autenticación, drag & drop y notificaciones en tiempo real.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/RamiroRodriguezC/task-manager",
    liveUrl: ""
  }
];

export default function handler(req, res) {
  res.status(200).json(projects);
}
