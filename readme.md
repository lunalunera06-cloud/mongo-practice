# Informe Técnico - Integración de MongoDB con Mongoose
**Proyecto:** Página Web Comercial "Café y Aroma"  
**Módulo:** Módulo 6 – Base de Datos NoSQL  
**Instructor:** Ing. María Fernanda Guerrero  
**Fecha:** Julio 2026  

---

### 1. ¿Qué aprendiste sobre MongoDB y Mongoose?
Aprendí a integrar una base de datos NoSQL orientada a documentos en una aplicación comercial. Mediante Mongoose comprendí cómo estructurar esquemas con validaciones explícitas en el backend, abstrayendo las consultas de la base de datos a través de modelos en JavaScript y gestionando la conexión asíncrona mediante `async/await`.

### 2. ¿Por qué MongoDB es una buena opción en ciertos proyectos?
MongoDB destaca por su flexibilidad al manejar datos semiestructurados sin la rigidez de las tablas relacionales. Es una solución ideal para proyectos web y plataformas comerciales por su escalabilidad horizontal, alta velocidad de lectura/escritura y su formato nativo JSON/BSON, lo que acelera el ciclo de desarrollo.

### 3. Retos enfrentados y soluciones
* **Seguridad de credenciales:** Proteger la cadena de conexión de MongoDB Atlas. Se resolvió usando el módulo `dotenv` y almacenando la URI en el archivo `.env` excluido en `.gitignore`.
* **Validación de entradas:** Garantizar que no se inserten documentos incompletos. Se definieron propiedades `required` y sanitizadores `trim` en `models/Cliente.js`.