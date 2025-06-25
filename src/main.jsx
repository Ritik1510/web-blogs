import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/USer.jsx'
import Culture from './components/Culture/Culture.jsx'
import Hustling from './components/HustleIdeas/Hustling.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import UrbanNature from './components/UrbanNature/UrbanNature.jsx'
import { CategoriesProvider } from './components/CategoriesComponent/CategoriesComponent.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/hustling' element={<Hustling/>}/>
      <Route path='culture' element={<Culture />} />
      <Route path='urban-nature' element={<UrbanNature />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route
        path='about'
        element={<About />}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CategoriesProvider>
      <RouterProvider router={router} />
    </CategoriesProvider>
  </React.StrictMode>,
)