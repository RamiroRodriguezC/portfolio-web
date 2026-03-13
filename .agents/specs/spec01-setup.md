# SPEC 01: Inicialización del Stack MERN

## OBJETIVO

Configurar la arquitectura base monorepo para el portfolio.

## REQUERIMIENTOS

- Estructura:

    - /backend: Node/Express con Mongoose.

    - /frontend: React + Vite + Tailwind v4.

- Backend Core: Configurar index.js, conexión a MongoDB y middleware de cors y json.

- Frontend Core: Configurar Tailwind v4 y react-router-dom.

- Health Check: Endpoint GET /api/status que responda JSON.

# CRITERIOS DE ACEPTACIÓN

- [ ] El servidor conecta a DB sin errores.

- [ ] Tailwind v4 renderiza colores personalizados en el navegador.

- [ ] Existe un archivo .env.example en ambas carpetas.