import React from 'react';
import {
  RouterProvider, createBrowserRouter, Outlet,
} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import RatesPage from './components/RatesPage';
import './style.scss';

// New EC Function

function Layout() {
  return (
    <>
      {/* <Nav /> */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

function FallBack() {
  return <div>404 Page Not Found</div>;
}

// Doing the EC stuff
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'services-and-rates', element: <RatesPage /> },
      { path: '*', element: <FallBack /> },
    ],
  },
]);

const root = createRoot(document.getElementById('main'));
root.render(<RouterProvider router={router} />);
