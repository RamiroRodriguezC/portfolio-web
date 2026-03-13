SKILLS.md - Capacidades Técnicas

1. Frontend (React & Tailwind v4)

Estándar: Componentes funcionales, Hooks, React Router DOM.

UI: Uso exclusivo de Tailwind CSS v4. Priorizar tokens semánticos y @theme.

Estructura: Separación clara entre /components, /pages y /services.

2. Backend (Node.js & Express)

Arquitectura: Routes -> Controllers -> Services -> Models.

Seguridad: Manejo de errores centralizado, HTTP status codes correctos y uso de dotenv.

3. Base de Datos (MongoDB & Mongoose)

Modelado: Esquemas con validación estricta.

Operaciones: Lógica de negocio encapsulada en Services, no en controladores.

4. Performance (Vercel Best Practices)

Optimización de bundles, evitar waterfalls en fetch de datos y uso eficiente de memorización (useMemo, useCallback).