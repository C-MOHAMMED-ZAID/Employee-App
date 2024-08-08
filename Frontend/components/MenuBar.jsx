import React from 'react'

function MenuBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid" style={{padding:"10px 10px 10px 30px",backgroundColor:'#c5aa6a'}}>
    <a class="navbar-brand" href="/">React MERN Stack App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/CreateEmployee" >Create Employee</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/EmployeeList">Employee List</a>
        </li>

        <li className='nav-item'>
          <a href={"/create-salary"} className='nav-link'>Create Salary</a>
        </li>

        <li className='nav-item'>
          <a href={"/salary-list"} className='nav-link'>Salary List</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default MenuBar
