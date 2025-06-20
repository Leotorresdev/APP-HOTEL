# Hotel Los Andes - Sistema de Reservas y Gestión

Bienvenido al repositorio de **Hotel Los Andes**, una aplicación web moderna para la gestión de reservas, habitaciones y usuarios de un hotel, desarrollada con **React**, **Node.js**, **Express** y **Prisma** sobre **PostgreSQL**.

---

## 🚀 Características principales

- **Página pública** con información del hotel, servicios, artículos y clima en tiempo real.
- **Reservas online:** cualquier usuario puede reservar su estadía completando un formulario.
- **Gestión de habitaciones:** solo el administrador puede crear, editar y eliminar habitaciones.
- **Gestión de usuarios:** el administrador puede ver todos los usuarios registrados.
- **Autenticación:** login único para admin y usuarios normales.
- **Panel de reservas:** todos pueden ver el historial de reservas realizadas.
- **Diseño responsive** y atractivo con **Material UI**, **TailwindCSS** y animaciones con **Framer Motion**.

---

## 🗂️ Estructura del proyecto

```
APP-HOTEL/
│
├── client/                  # Frontend React
│   ├── src/
│   │   ├── components/      # Componentes reutilizables (Navbar, Hero, etc.)
│   │   ├── pages/           # Páginas principales (Home, Reservation, AdminRooms, etc.)
│   │   ├── routes/          # Definición de rutas de la app
│   │   ├── store/           # Estado global (Zustand)
│   │   ├── utils/           # Funciones de API y utilidades
│   │   └── assets/          # Imágenes y recursos estáticos
│   ├── public/
│   ├── index.html
│   └── tailwind.config.js
│
├── server/                  # Backend Node.js/Express
│   ├── src/
│   │   ├── controllers/     # Lógica de negocio (habitaciones, reservas, usuarios)
│   │   ├── routes/          # Endpoints de la API REST
│   │   └── middleware/      # Middlewares de autenticación y seguridad
│   ├── prisma/
│   │   ├── schema.prisma    # Definición de modelos de datos
│   │   └── migrations/      # Migraciones de base de datos
│   ├── .env                 # Variables de entorno (conexión DB, claves)
│   └── index.js             # Punto de entrada del servidor
│
└── README.md                # Este archivo
```

---

## ⚙️ Instalación y ejecución

### 1. Clona el repositorio

```bash
git clone https://github.com/Leotorresdev/APP-HOTEL
cd APP-HOTEL
```

### 2. Configura el backend

```bash
cd server
npm install
# Configura tu .env con los datos de PostgreSQL y credenciales admin
npx prisma migrate dev
npm start
```

### 3. Configura el frontend

```bash
cd ../client
npm install
npm run dev
```

- El frontend estará disponible en [http://localhost:5173](http://localhost:5173)
- El backend en [http://localhost:4000](http://localhost:4000)

---

## 🔑 Credenciales por defecto

- **Admin:**  
  - Email: `admin@hotel.com`  
  - Contraseña: `12345`
- **Usuarios:**  
  - Cualquier email y contraseña (se registran automáticamente al iniciar sesión)

---

## 🛠️ Tecnologías utilizadas

- **Frontend:** React, Material UI, TailwindCSS, Framer Motion, Zustand, React Router
- **Backend:** Node.js, Express, Prisma ORM, PostgreSQL, JWT, bcryptjs
- **Otros:** Vite, ESLint, OpenWeatherMap API (clima)

---

## 📄 Modelos principales (Prisma)

```prisma
model Room {
  id        Int      @id @default(autoincrement())
  name      String
  type      String
  price     Float
  image     String
  createdAt DateTime @default(now())
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  password  String
  createdAt DateTime @default(now())
}

model Reservation {
  id          Int      @id @default(autoincrement())
  nombre      String
  correo      String
  telefono    String?
  entrada     DateTime
  salida      DateTime
  comentarios String?
  createdAt   DateTime @default(now())
}
```

---

## 📝 Notas de uso

- El login de la página principal permite acceso tanto a admin como a usuarios normales.
- Solo el admin puede gestionar habitaciones y ver la lista de usuarios.
- Todos pueden ver y crear reservas.
- El sistema es responsive y apto para dispositivos móviles.

---

**¡Gracias por usar Hotel Los