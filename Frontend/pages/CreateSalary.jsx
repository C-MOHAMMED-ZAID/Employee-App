import React, { useState, useEffect } from "react";
import axios from "axios"

function CreateSalary() {
  const [userForm,setUserForm]=useState({
    monthyear: "",
    netsal: "",
    employeeid: "",
    
    
  });
  const[employees,setEmployees]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:4000/employees/")
    .then((res)=>{
        setEmployees(res.data.data)
    })
    .catch((error)=>{
        console.log(error)
    })
  },[employees])

  const inputsHandler=(e)=>{
    setUserForm((prev)=>({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:4000/salary/create-salary",userForm)
    .then((res)=>{
      console.log(res.data);
      setUserForm({
        monthyear: "",
        netsal: "",
        employeeid: "",
      })
    })
  }
  return(
    <div>
      <div className='form-wrapper' style={{padding:"30px",backgroundColor:'	#404040',color:'white',width:'1227px',height:'500px'}}>
        <form onSubmit={onSubmit}>
          <div className='mb-3'>
            <label className='form-label'>Month & Year</label>
            <input type="month" name="monthyear" id="name" className='form-control' value={userForm.monthyear} onChange={inputsHandler} />
          </div>

          <div className='mb-3'>
            <label className='form-label'>Net Salary</label>
            <input type="number" name="netsal" id="netsal" className='form-control' value={userForm.netsal} onChange={inputsHandler} />
          </div>

          <div className='mb-3'>
            <label className='form-label'>Employee</label>
            <select name="employeeid" id="" value={userForm.employeeid} onChange={inputsHandler}>

                <option value="">Select Employee</option>
                {employees.map((employee)=>(
                    <option value={employee._id} key={employee._id}>{employee.name}</option>
                ))}
            </select>

          </div>

          <div className='mb-3'>
            <button type="submit" className='btn btn-primary'>Submit</button>
          </div>
          </form>
      </div>
    </div>
  )
}

export default CreateSalary