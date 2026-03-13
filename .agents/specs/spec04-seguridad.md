# SPEC 04: Seguridad y Protección de Datos (Global)

## OBJETIVO

Establecer las capas de seguridad y las políticas de privacidad para proteger la integridad del portfolio y los datos del usuario/propietario.

## 1. PROTECCIÓN DE IDENTIDAD (PII)

- Ofuscación: Ningún dato sensible (Email, Teléfono) debe existir como string literal en el código fuente del frontend.

- Implementación: Los datos deben ser inyectados mediante variables de entorno en el build o reconstruidos dinámicamente mediante funciones de JavaScript para evitar el scraping básico.

## 2. SEGURIDAD DEL BACKEND (API)

- Rate Limiting: Implementar un límite de peticiones para evitar ataques de fuerza bruta o spam en los endpoints de la API (especialmente en el de contacto).

- CORS: Configurar una política de origin estricta que solo permita peticiones desde el dominio del frontend (o localhost en desarrollo).

- NoSQL Injection: Sanitizar todas las entradas que lleguen a los modelos de Mongoose para evitar inyecciones maliciosas.

- Headers: Implementar helmet para ocultar información técnica del servidor (X-Powered-By, etc.).

## 3. GESTIÓN DE SECRETOS

- Cero Texto Plano: Prohibido el uso de claves, URIs de bases de datos o tokens en archivos que se suban al control de versiones.

- Validation: Antes de cualquier despliegue, el agente debe verificar la existencia de un .env.example actualizado sin valores reales.

## 4. CRITERIOS DE ACEPTACIÓN

- [ ] La API devuelve un error 429 si se excede el límite de peticiones.

- [ ] No se encuentran strings con el formato de email (user@domain.com) en el bundle del frontend.

- [ ] Los headers de seguridad están presentes en todas las respuestas del servidor.