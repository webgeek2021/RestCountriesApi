import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { routers } from './utility/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Sass/style.scss"

const  router = createBrowserRouter(routers);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


