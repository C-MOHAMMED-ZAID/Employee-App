import React, { useState } from "react";
import axios from "axios"

function CreateEmployee() {
  const [userForm,setUserForm]=useState({
    name: "",
    email: "",
    empno: "",
    phoneno: "",
    
  });

  const inputsHandler=(e)=>{
    setUserForm((prev)=>({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:4000/employee/create-employee",userForm)
    .then((res)=>{
      console.log(res.data);
      setUserForm({
        name: "",
        email: "",
        empno: "",
        phoneno: "",
      })
    })
  }
  return(
    <div>
      <div className='form-wrapper' style={{padding:"30px",backgroundColor:'	#404040',color:'white',width:'1227px',height:'500px'}}>
        <form onSubmit={onSubmit}>
          <div className='mb-3'>
            <label className='form-label'>Name</label>
            <input type="text" name="name" id="name" className='form-control' value={userForm.name} onChange={inputsHandler} />
          </div>

          <div className='mb-3'>
            <label className='form-label'>Email</label>
            <input type="email" name="email" id="email" className='form-control' value={userForm.email} onChange={inputsHandler} />
          </div>

          <div className='mb-3'>
            <label className='form-label'>Emp ID</label>
            <input type="text" name="empno" id="empno" className='form-control' value={userForm.empno} onChange={inputsHandler} />
          </div>

          <div className='mb-3'>
            <label className='form-label'>Phone No</label>
            <input type="number" name="phoneno" id="phoneno" className='form-control' value={userForm.phoneno} onChange={inputsHandler} />
          </div>

          <div className='mb-3'>
            <button type="submit" className='btn btn-primary'>Submit</button>
          </div>
          </form>
      </div>
    </div>
  )
}

export default CreateEmployee