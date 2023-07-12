import { Routes, Route } from 'react-router-dom';

import { CreateNote } from '../pages/CreateNote';
import { Home } from '../pages/home';
import { Profile } from '../pages/Profile';


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/createNote" element={<CreateNote/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/home/:id" element={<Home/>} />
    </Routes>
  )
}