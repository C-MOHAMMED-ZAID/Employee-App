import React from 'react'
import Home from './pages/Home'
import EmployeeList from './pages/EmployeeList'
import CreateEmployee from './pages/CreateEmployee'
import EditEmployee from './pages/EditEmployee'
import MenuBar from './Components/MenuBar'
import Editsalary from './pages/EditSalary'
import CreateSalary from './pages/CreateSalary'
import SalaryList from './pages/SalaryList'
import { BrowserRouter as Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <MenuBar></MenuBar>
      
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/EmployeeList' element={<EmployeeList/>}></Route>
          <Route path='/create-employee' element={<CreateEmployee/>}></Route>
          <Route path='/edit-employee/:id' element={<EditEmployee/>}></Route>
          <Route path='/create-salary' element={<CreateSalary/>}></Route>
          <Route path='/salary-list' element={<SalaryList/>}></Route>
          <Route path='/edit-salary/:id' element={<Editsalary/>}></Route>
        </Routes>
      
    
    </div>
  )
}

export default App
