/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/

import React from 'react';
import ReactDOM from'react-dom/client';
//import {BrowserRouter, Routes} from "react-router-dom"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import routes from './routes';


const router = createBrowserRouter(routes);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);


//ReactDOM.render(
//  <BrowserRouter>
//    <Routes>
//      {/* Map over the routes array to render each route and its child routes */}
//      {routes.map((route, index) => (
//        <Route
//          key={index}
//          path={route.path} // Set the path for the route
//          element={route.element} // Set the element to render when the route matches
//          errorElement={route.errorElement} // Set the element to render if an error occurs while rendering the route
//        >
//          {/* Check if the route has children (nested routes) */}
//          {route.children && route.children.map((childRoute, childIndex) => (
//            <Route
//              key={childIndex}
//              path={childRoute.path} // Set the path for the child route
//              element={childRoute.element} // Set the element to render when the child route matches
//            />
//          ))}
//        </Route>
//      ))}
//    </Routes>
//  </BrowserRouter>,
//  document.getElementById('root') // Render the application inside the root element in the HTML document
//);