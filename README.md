# Zerodha

The Zerodha Clone project replicates basic stock trading functionalities, including buying stocks and placing orders, in a dummy-based environment. The backend powers user authentication, and mock transactions, providing a safe space for users to experience stock trading without financial risks.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure (MVC)](#project-structure-mvc)
- [Live Demo](#live-demo)
- [Contributing](#contributing)
- [License](#license)

## About the Project - Zerodha-Dashboard

The Zerodha Dashboard is a React-based web application that mimics core stock trading functionalities like placing orders and tracking positions, holdings, and funds. It is a protected route, available only after login/signup. The project is powered by an Express backend, which needs to be set up with the Backend URI (mentioned in the installation section) for data fetching and interaction. This dashboard is part of a Zerodha clone for dummy stock trading.

## Features

- **User Authentication**: Secure login/signup functionality for accessing the dashboard.
- **Dashboard Overview**: Displays key details about holdings, orders, positions, and funds.
- **Orders Management**: Allows users to place new stock orders and view all orders.
- **Holdings & Positions Tracking**: Displays user holdings and positions in real time.
- **Funds Management**: Allows users to track their available funds.
- **Responsive Design**: Optimized for both desktop and mobile views.

 

## Tech Stack

- **Frontend**:

  - React.js
  - HTML5, CSS3
  - Bootstrap (for responsive design)
  - Material UI Icons (for UI components)

- **Backend**:

  - Express.js 
  - Node.js

- **Authentication**:

  - JWT (JSON Web Token)

- **Database**:

  - MongoDB

- **Version Control**: Git, GitHub

- **Other**:
  - React Router (for routing)
  - Chart.js (for data visualization)
  - Axios (for backend requests)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/abdulsattar0617/zerodha-dashboard.git
   cd zerodha-dashboard
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```bash
   PORT=3000
   REACT_APP_SERVER_URL=your-backend-server-uri
   ```

4. **Run the application:**

   ```bash
   npm start
   ```

   Visit `http://localhost:3000` to view the app.

## API Endpoints & Components

### Main Paths and Components

| Path    | Component                               |
| ------- | --------------------------------------- |
| /signup | Signup.js                               |
| /login  | Login.js                                |
| /       | Home.js (Accessible after login/signup) |

### Components Inside Home Component

- **TopBar.js**
- **Dashboard.js** (Protected route, accessible only after login/signup)

### Routes Inside Dashboard Component

| Path       | Component    |
| ---------- | ------------ |
| /          | Summary.js   |
| /orders    | Orders.js    |
| /holdings  | Holdings.js  |
| /positions | Positions.js |
| /funds     | Funds.js     |
| /apps      | Apps.js      |

## Usage

- Clone the repository to your local machine.
- Ensure the backend is running (you can refer to the [Backend repository](https://github.com/abdulsattar0617/zerodha-backend) for setup instructions).
- Use the frontend by navigating to the `/login` or `/signup` routes to authenticate the user.
- After logging in, the user will be able to access the protected dashboard and view various details such as orders, holdings, positions, and funds.
- The frontend communicates with the backend API for real-time data retrieval.


## Live Demo

You can access the live version of the application here: [Zerodha-Dashboard Live Demo](https://zerodha-dashboard-p.onrender.com)

## Project Structure

```bash
Zerodha-Dashboard/
│
├── public/
│   ├── index.html
│   ├── logo.png
│   └── style.css
│
├── src/
│   ├── components/
│   │   ├── Pages/
│   │   │   ├── Login.js
│   │   │   ├── Signup.js
│   │   │   ├── style.css
│   │   │   └── utils.js
│   │   ├── App.js
│   │   ├── BuyActionWindow.css
│   │   ├── BuyActionWindow.js
│   │   ├── Dashboard.js
│   │   ├── DoughnutChart.js
│   │   ├── Funds.js
│   │   ├── GeneralContext.js
│   │   ├── Holdings.js
│   │   ├── Home.js
│   │   ├── Menu.js
│   │   ├── Orders.js
│   │   ├── Positions.js
│   │   ├── SellActionWindow.js
│   │   ├── Summary.js
│   │   ├── TopBar.js
│   │   ├── VerticalGraph.js
│   │   └── WatchList.js
│   ├── data/
│   │   └── data.js
│   ├── index.css
│   └── index.js
├── package.json
├── package-lock.json
└── README.md
```

## Contributing

We welcome contributions to the Zerodha Clone Backend project! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request with a description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/abdulsattar0617/zerodha-dashboard/blob/main/LICENSE) file for more details.
