DESIGN.md - Lineamientos Estéticos: "Google Search UI"

# 1. VISIÓN GENERAL

- Concepto: El portfolio debe ser una réplica visual de una página de resultados de búsqueda de Google para una personalidad (Knowledge Graph UI).

- Inspiración: La captura de pantalla de Google Search en modo oscuro (ui-reference.JPG).

- Metáfora: El usuario "busca" a Ramiro y el portfolio es el resultado oficial.

# 2. SISTEMA DE DISEÑO (Tailwind CSS v4)

## Paleta de Colores (Basada en Captura)

- Fondo Principal: [#202124] (Gris oscuro de Google).

- Superficies/Cards: [#303134] (Gris medio para bordes y contenedores).

- Texto Primario: [#e8eaed] (Blanco roto).

- Texto Secundario: [#bdc1c6] (Gris claro).

- Links/Acciones: [#8ab4f8] (Azul suave de Google Dark).

- Acentos: [#3c4043] para hovers en botones y pills.

- Componentes UI

- Barra de Búsqueda: Estática en el header, redondeada (rounded-full), con icono de lupa y micro/lente.

## Navbar (Tabs de Búsqueda):

Ubicado justo debajo de la barra de búsqueda.

- Estilo "Pill" o subrayado azul para la pestaña activa.
 
- Opciones: "Todo" (Inicio), "Proyectos" (Imágenes), "Experiencia" (Noticias), "Contacto" (Más).

- Knowledge Graph (Sidebar):

- Un panel a la derecha (en desktop) con tu foto principal, biografía corta, "Nacimiento", "Educación" y redes sociales.

- Snippets de Resultados: Los proyectos se muestran como resultados de búsqueda estándar (Título azul, URL verde/gris, descripción abajo).

# 3. LAYOUT Y ESTRUCTURA

- Header: Logo de Google (o tu nombre con esa fuente) + Barra de búsqueda.

- Navegación: Menú horizontal de pestañas con iconos sutiles.

- Main Content:

- Columna izquierda (60-70%): Listado de proyectos (resultados) y noticias destacadas.

- Columna derecha (30-40%): Ficha de personaje (Knowledge Panel).

- Mobile: La columna derecha pasa a estar arriba o se integra entre los resultados.

# 4. INTERACCIONES

- Hover de Resultados: Sutil subrayado en el título azul.

- Filtros: Los botones de "Estadísticas" o "Información General" deben funcionar como filtros rápidos.

- Simulación: Al cargar la página, se puede simular el efecto de "buscando..." por unos milisegundos.

# 5. SEO & ESTRATEGIA DE RENDERIZADO (SSG/SSR)

- Prioridad SSG: Se debe priorizar la Generación Estática de Sitios (SSG) para las páginas de "Proyectos" y "Sobre Mí" para maximizar la velocidad de carga y la indexación.

- Meta Tags Dinámicos: Cada "resultado de búsqueda" (proyecto) debe tener sus propios metatags (Open Graph y Twitter Cards) generados en el servidor para que al compartir el link se vea el snippet correcto.

- Sitemap & Robots: Generación automática de sitemap.xml para asegurar que los bots de Google encuentren todas las secciones del portfolio.

- JSON-LD: Implementar Schema Markup (Structured Data) tipo Person y CreativeWork para que los buscadores reales entiendan que el sitio es un portfolio profesional.

# 6. REGLA ESTRICTA DE IMPLEMENTACIÓN

- No usar gradientes modernos ni sombras pesadas. Todo debe ser plano, con bordes finos de 1px y colores sólidos.

- El Navbar DEBE ser el que aparece en la imagen (Todo, Imágenes, Noticias, etc.), mapeando cada categoría a una sección de tu portfolio.

- Hidratación: En caso de usar SSR, asegurar que no haya parpadeos de contenido (Layout Shift) al hidratar los componentes de la barra de búsqueda.