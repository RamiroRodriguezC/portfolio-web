# SPEC 02: Modelo de Proyectos y API REST

## OBJETIVO

Implementar el almacenamiento y la recuperación de los proyectos del portfolio.

# REQUERIMIENTOS (Usa Skill: MongoDB & Express)

- Model: Crear Project.js con: title, description, tags (Array), githubUrl, liveUrl, image.

- Services: Lógica para findAll y findById.

- Controllers: Manejo de respuestas y códigos 200/404/500.

- Seeding: Script npm run seed para cargar 3 proyectos de ejemplo.

# CRITERIOS DE ACEPTACIÓN

    - [ ] GET /api/projects devuelve la lista del Seed.

    - [ ] El código del controlador no tiene lógica de base de datos (usa el Service).