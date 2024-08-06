import React,{ useEffect,useState } from "react"
import { useParams,useNavigate } from "react-router-dom"
import axios from "axios"

function EditSalary() {
  const[userForm,setUserForm]=useState({
    monthyear:"",
    netsal:"",
    employeeid:"",

  });

  const [employees,setEmployees]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:4000/employees/")
    .then((res)=>{
        setEmployees(res.data.data)
    })
    .catch((error)=>{
        console.log(error)
    })
  },[employees])
  useEffect(()=>{
    axios.get("http://localhost:4000/salary/get-salary/"+params.id)
    .then((res)=>{
        setUserForm({
            monthyear:res.data.data.monthyear,
            netsal:res.data.data.netsal,
            employeeid:res.data.data.employeeid,
        })
    })
  },[])
  let params=useParams();
  let navigate=useNavigate();
  const inputsHandler=(e)=>{
    setUserForm((prev)=>({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const onUpdate=(e)=>{
    e.preventDefault();
    axios.put("http://localhost:4000/salary/update-salary/"+params.id,{
      monthyear:userForm.monthyear,
      netsal:userForm.netsal,
      employeeid:userForm.employeeid,
    })
    .then((res)=>{
      console.log({status:res.status});
      navigate("/salary-List")
    })
  };
  
  return (
    <div style={{padding:"30px",backgroundColor:'	#404040',color:'white',width:'1227px',height:'500px'}}>
      <h1>Edit salary</h1>

      <div>
        <div className="form-wrapper">
          <form onSubmit={onUpdate}>
            <div className="mb-3">
              <label className="form-label">Month & Year</label>
              <input type="month" name="monthyear" className="form-control" id="monthyear" value={userForm.monthyear} onChange={inputsHandler} />
            </div>

            <div className="mb-3">
              <label className="form-label">Net Salary</label>
              <input type="number" name="netsal" className="form-control" id="netsal" value={userForm.netsal} onChange={inputsHandler} />
            </div>

            <div className="mb-3">
              <label className="form-label">Employee</label>
              <select name="employeeid" value={userForm.employeeid} onChange={inputsHandler} id="">

                <option value="">Select Employee</option> 
                {employees.map((employee)=>(
                    <option key={employee._id} value={employee._id}>
                        {employee.name}
                    </option>
                ))}
              </select>
              </div>

            <div className="mb-3">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditSalary