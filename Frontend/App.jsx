import React from 'react'
import Home from './Components/pages/Home'
import EmployeeList from './Components/pages/EmployeeList'
import CreateEmployee from './Components/pages/CreateEmployee'
import EditEmployee from './Components/pages/EditEmployee'
import MenuBar from './Components/MenuBar'
import Editsalary from './Components/pages/EditSalary'
import CreateSalary from './Components/pages/CreateSalary'
import SalaryList from './Components/pages/SalaryList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <MenuBar></MenuBar>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/EmployeeList' element={<EmployeeList/>}></Route>
          <Route path='/CreateEmployee' element={<CreateEmployee/>}></Route>
          <Route path='/edit-employee/:id' element={<EditEmployee/>}></Route>
          <Route path='/create-salary' element={<CreateSalary/>}></Route>
          <Route path='/salary-list' element={<SalaryList/>}></Route>
          <Route path='/edit-salary/:id' element={<Editsalary/>}></Route>
        </Routes>
      </Router>
    <Footer></Footer>
    </div>
  )
}

export default App

