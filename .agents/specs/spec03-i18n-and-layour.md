# SPEC 03: Sistema i18n y Layout Base

# OBJETIVO

Configurar el sistema de internacionalización y la estructura visual compartida.

# REQUERIMIENTOS (Usa Skill: Vercel React & Tailwind)

- i18n Setup: Crear /src/i18n/es.json.

- Hook de Traducción: Crear un contexto o helper para consumir textos.

- Layout: Componente <Layout /> que incluya:

<Navbar />: Links a Home, Projects, Contact.

<Footer />: Copyright y Redes.

    - Regla Crítica: El Navbar debe usar las llaves del JSON (ej: t('nav.projects')).

# CRITERIOS DE ACEPTACIÓN

- [ ] No hay strings de texto plano en los componentes JSX.

- [ ] El layout es responsivo (mobile-first) usando Tailwind.