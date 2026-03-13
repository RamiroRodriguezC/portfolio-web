# ESPECIFICACIÓN: 01-Inicialización del Stack MERN

## 1. Objetivo Principal
Configurar el esqueleto inicial y la arquitectura base para mi Portfolio Personal Web, separando claramente el entorno Frontend y Backend en la raíz del repositorio.

## 2. Requerimientos del Backend (Carpeta `/backend`)
- Inicializar un proyecto Node.js (`npm init -y`).
- Instalar dependencias esenciales: `express`, `mongoose`, `dotenv`, `cors`.
- Crear la estructura de carpetas dictada en el AGENT.md: `/routes`, `/controllers`, `/services`, `/models`, y `/config`.
- Crear un archivo `server.js` que levante un servidor Express en el puerto definido en `.env` (por defecto 5000).
- Crear un archivo `config/db.js` con la lógica para conectar a MongoDB usando Mongoose, consumiendo la variable `MONGO_URI` desde el entorno.
- Crear un endpoint de prueba `GET /api/status` que responda con un JSON `{ status: "ok" }`.
- Crear un archivo `.env.example` (nunca el `.env` real con credenciales vivas).

## 3. Requerimientos del Frontend (Carpeta `/frontend`)
- Inicializar una aplicación React (preferiblemente usando Vite para mayor velocidad).
- Instalar y configurar Tailwind CSS siguiendo su documentación oficial para Vite/React.
- Crear la estructura de carpetas: `/src/components`, `/src/pages`, `/src/services`, `/src/assets`.
- Modificar el archivo principal (`App.jsx`) para que muestre un contenedor simple centrado en pantalla usando utilidades de Tailwind con el texto: "Portfolio Inicializado".

## 4. Orquestación y Git
- Crea un archivo `.gitignore` en la raíz para ignorar `node_modules` y `.env`.
- **Acción requerida por el agente:** Lee esta especificación, elabora un plan paso a paso detallando los comandos de terminal a ejecutar y los archivos a crear. **Detente y espera mi aprobación (Plan Mode)** antes de ejecutar cualquier comando o escribir código.