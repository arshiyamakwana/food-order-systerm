# Foodi - Food Ordering Application 🍕

A full-stack food ordering web application built with React, Node.js, and MongoDB. Users can browse menu items, add them to cart, checkout, and place orders with secure payment processing.

## 🌟 Features

### Client Side

- **User Authentication**: Sign up and login with Firebase
- **Menu Browse**: View all available menu items with filtering by categories
- **Shopping Cart**: Add/remove items from cart with quantity management
- **Checkout**: Complete order checkout with payment processing
- **User Dashboard**: View order history and user profile
- **Admin Panel**: Manage menu items, view orders, and manage users
- **Responsive Design**: Fully responsive UI with Tailwind CSS
- **Toast Notifications**: User-friendly feedback messages

### Server Side

- **RESTful API**: Well-structured API endpoints
- **Authentication**: JWT token-based authentication
- **Authorization**: Role-based access control (User/Admin)
- **Cart Management**: Add, update, and manage shopping carts
- **Menu Management**: CRUD operations for menu items
- **User Management**: User profile and role management

## 🛠️ Tech Stack

### Frontend

- React 18.2.0
- Vite (Build tool)
- Tailwind CSS + DaisyUI
- React Router v6
- Axios for API calls
- Firebase Authentication
- React Hook Form
- Stripe Payment Integration

### Backend

- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Cors for cross-origin
- Nodemon for development

---

## 🚀 Quick Start

### Local Development

**1. Clone the repository**

```bash
git clone https://github.com/arshiyamakwana/food-order-system.git
cd food-order-system
```

**2. Setup Backend**

```bash
cd foodi_server
npm install
# Create .env file with credentials (see below)
npm start
```

**3. Setup Frontend**

```bash
cd foodi_client
npm install
npm run dev
```

**Frontend:** http://localhost:5173/  
**Backend:** http://localhost:6001/

---

## 📝 Environment Variables

### Backend (.env)

```
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
ACCESS_TOKEN_SECRET=your_jwt_secret
PAYMENT_SECRET_KEY=your_payment_secret
PORT=6001
```

### Frontend (.env.local)

```
VITE_API_URL=http://localhost:6001
VITE_APIKEY=your_firebase_api_key
VITE_AUTHDOMAIN=your_firebase_auth_domain
VITE_PROJECTID=your_firebase_project_id
VITE_STORAGEBUCKET=your_firebase_storage_bucket
VITE_MESSAGINGSENDERID=your_firebase_messaging_sender_id
VITE_APPID=your_firebase_app_id
```

---

## 📦 Deployment

### Deploy to Vercel

For step-by-step Vercel deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

**Quick Steps:**

1. Deploy backend to Vercel first (get the URL)
2. Deploy frontend to Vercel
3. Set `VITE_API_URL` in frontend env to backend URL
4. Redeploy and test

---

## 📂 Project Structure

```
food-order-system/
├── foodi_client/          # React Frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── contexts/      # Auth context
│   │   └── router/        # Route definitions
│   ├── vercel.json        # Vercel config
│   └── package.json
├── foodi_server/          # Express Backend
│   ├── api/
│   │   ├── controllers/   # Request handlers
│   │   ├── routes/        # API routes
│   │   ├── models/        # MongoDB schemas
│   │   └── middleware/    # Auth middleware
│   ├── vercel.json        # Vercel config
│   └── package.json
├── DEPLOYMENT.md          # Deployment guide
└── README.md              # This file
```

---

## 🔒 Security Features

- ✅ JWT Authentication
- ✅ Role-based Access Control (Admin/User)
- ✅ Secure password storage (Firebase)
- ✅ CORS protection
- ✅ Environment variables for secrets

---

## 📞 API Endpoints

### Authentication

- `POST /jwt` - Generate JWT token

### Menu

- `GET /menu` - Get all menu items
- `GET /menu/:id` - Get menu item by ID
- `POST /menu` - Add new menu item (Admin)
- `PUT /menu/:id` - Update menu item (Admin)
- `DELETE /menu/:id` - Delete menu item (Admin)

### Cart

- `GET /carts` - Get user's cart
- `POST /carts` - Add to cart
- `PUT /carts/:id` - Update cart item
- `DELETE /carts/:id` - Remove from cart

### Users

- `POST /users` - Create user
- `GET /users` - Get all users (Admin)
- `GET /users/admin/:email` - Check if user is admin
- `PATCH /users/admin/:id` - Make user admin (Admin)

---

## 🎨 Screenshots

Frontend displays:

- Home page with featured dishes
- Menu page with category filtering
- Shopping cart management
- Checkout with payment
- User dashboard
- Admin panel

---

## 📄 License

MIT License - Feel free to use this project for learning

---

## 👨‍💻 Author

**Arshiya Makwana**  
GitHub: [@arshiyamakwana](https://github.com/arshiyamakwana)

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## ⚠️ Important Notes

- Configure MongoDB Atlas before running
- Set up Firebase Authentication
- Update environment variables before deployment
- Test locally before deploying to production

---

## 📞 Support

For issues or questions:

1. Check [DEPLOYMENT.md](./DEPLOYMENT.md)
2. Create an issue on GitHub
3. Contact the developer

---

**Happy Coding! 🚀**

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Firebase** - Authentication service
- **Axios** - HTTP client

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **JWT** - Token-based authentication

## Project Structure

```
project/
├── foodi_client/          # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components
│   │   ├── contexts/      # React context for state management
│   │   ├── hooks/         # Custom React hooks
│   │   ├── layout/        # Layout components
│   │   ├── router/        # Route configuration
│   │   ├── firebase/      # Firebase configuration
│   │   └── PrivateRoute/  # Protected route wrapper
│   ├── public/            # Static assets (menu.json, images)
│   └── package.json
│
└── foodi_server/          # Express backend application
    ├── api/
    │   ├── controllers/   # Route controllers
    │   ├── models/        # MongoDB models
    │   ├── routes/        # API routes
    │   └── middleware/    # Authentication middleware
    └── package.json
```

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas connection)
- Firebase project credentials

### Backend Setup

1. Navigate to the server directory:

```bash
cd foodi_server
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the `foodi_server` directory with the following variables:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

4. Start the server:

```bash
npm start
```

The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the client directory:

```bash
cd foodi_client
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the `foodi_client` directory with Firebase credentials:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. Start the development server:

```bash
npm run dev
```

The client will run on `http://localhost:5173`

## Running the Application

### Development Mode

Terminal 1 - Backend:

```bash
cd foodi_server
npm start
```

Terminal 2 - Frontend:

```bash
cd foodi_client
npm run dev
```

### Production Build

For frontend:

```bash
cd foodi_client
npm run build
```

## API Endpoints

### Authentication & Users

- `POST /api/users/signup` - Create new user
- `POST /api/users/login` - User login
- `GET /api/users` - Get all users (Admin)
- `PATCH /api/users/:id` - Update user role (Admin)

### Menu

- `GET /api/menu` - Get all menu items
- `GET /api/menu/:id` - Get single menu item
- `POST /api/menu` - Add new menu item (Admin)
- `PATCH /api/menu/:id` - Update menu item (Admin)
- `DELETE /api/menu/:id` - Delete menu item (Admin)

### Cart

- `GET /api/carts` - Get user's cart items
- `POST /api/carts` - Add item to cart
- `PATCH /api/carts/:id` - Update cart item
- `DELETE /api/carts/:id` - Remove item from cart

## User Roles

### Regular User

- Browse menu items
- Manage shopping cart
- Place orders
- View order history

### Admin User

- All user privileges
- Add/edit/delete menu items
- View and manage all orders
- Manage user roles

## Key Components

### Frontend

- **Navbar** - Navigation with cart icon
- **Banner** - Hero section with background
- **Modal** - Popup for login/signup or additional info
- **Cards** - Display menu items
- **LoadingSpinner** - Loading state indicator
- **PrivateRoute** - Protected routes for authenticated users

### Backend

- **verifyToken** - Middleware for JWT validation
- **verifyAdmin** - Middleware to check admin privileges
- **userControllers** - User-related operations
- **menuControllers** - Menu CRUD operations
- **cartControllers** - Shopping cart operations

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Contact

For questions or support, please reach out through the project repository.'

images

homepage

<img width="1829" height="1019" alt="Screenshot 2024-03-01 192335" src="https://github.com/user-attachments/assets/d09b0bf6-7a4d-43e8-a9dd-bb36e0b16dd2" />

---

menu items

<img width="1917" height="1078" alt="Screenshot 2024-03-08 105506" src="https://github.com/user-attachments/assets/53e37dab-9d82-4a01-9a0e-df7b0218c1ba" />

--

category

<img width="727" height="808" alt="image" src="https://github.com/user-attachments/assets/466f5c3a-be52-4f69-ad3f-663b1daf809c" />

--
cart

<img width="1690" height="815" alt="image" src="https://github.com/user-attachments/assets/6c591231-b431-4c5f-ab51-9c3d5d094115" />

--

admin dashboard

<img width="1907" height="1071" alt="Screenshot 2024-03-08 105640" src="https://github.com/user-attachments/assets/c05d786d-afa5-4b2b-b0cd-2e5f3aad665b" />

<img width="1638" height="870" alt="image" src="https://github.com/user-attachments/assets/acd2d339-f4a9-45a6-8d51-c76473595604" />

<img width="1688" height="791" alt="image" src="https://github.com/user-attachments/assets/e8b639cf-7b77-404b-a389-4aa3d4b8d416" />

Happy coding! 🍽️
