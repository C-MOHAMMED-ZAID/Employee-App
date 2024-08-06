import React,{ useEffect,useState } from "react"
import { useParams,useNavigate } from "react-router-dom"
import axios from "axios"

function EditEmployee() {
  const[userForm,setUserForm]=useState({
    name:"",
    email:"",
    empno:"",
    phoneno:"",
  });
  let params=useParams();
  let navigate=useNavigate();
  const inputsHandler=(e)=>{
    setUserForm((prevNext)=>({
      ...prevNext,
      [e.target.name]: e.target.value,
    }))
  }
  const onUpdate=(e)=>{
    e.preventDefault();
    axios.put("http://localhost:4000/employees/update-employee/"+params.id,{
      name:userForm.name,
      email:userForm.email,
      empno:userForm.empno,
      phoneno:userForm.phoneno,
    })
    .then((res)=>{
      console.log({status:res.status});
      navigate("/EmployeeList")
    })
  };
  useEffect(()=>{
    axios.get("http://localhost:4000/employees/get-employee/"+params.id)
    .then((res)=>{
      setUserForm({
        name:res.data.data.name,
        email:res.data.data.email,
        empno:res.data.data.empno,
        phoneno:res.data.data.phoneno,
      })
    })
  },[])
  return (
    <div style={{padding:"30px",backgroundColor:'	#404040',color:'white',width:'1227px',height:'500px'}}>
      <h1>Edit Employee</h1>

      <div>
        <div className="form-wrapper">
          <form onSubmit={onUpdate}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" name="name" className="form-control" id="name" value={userForm.name} onChange={inputsHandler} />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-control" id="email" value={userForm.email} onChange={inputsHandler} />
            </div>

            <div className="mb-3">
              <label className="form-label">Emp ID</label>
              <input type="text" name="empno" className="form-control" id="empno" value={userForm.empno} onChange={inputsHandler} />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone no</label>
              <input type="number" name="phoneno" className="form-control" id="phoneno" value={userForm.phoneno} onChange={inputsHandler} />
            </div>

            <div className="mb-3">
              <button type="submit" className="btn btn-primary">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditEmployee