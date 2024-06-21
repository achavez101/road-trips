import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import Blog from './Pages/BlogPage';

import {
  createBrowserRouter, 
  RouterProvider,
  Route,
} from "react-router-dom";
import BlogPage from './Pages/BlogPage';
import DestinationPage from './Pages/DestinationPage';
import PicturesPage from './Pages/PicturesPage';
import ContactPage from './Pages/ContactPage';
import Highlights from './components/Highlights';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "story",
    element: <BlogPage />,
  },
  {
    path: "destinations",
    element: <DestinationPage />,
  },
  {
    path: "destinations/highlights",
    element: <Highlights />
  },
  {
    path: "pictures",
    element: <PicturesPage />,
  },
  {
    path: "contact",
    element: <ContactPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={(router)} />
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
