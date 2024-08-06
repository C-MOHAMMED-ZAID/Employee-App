import React, { useState,useEffect } from "react"
import axios from "axios"

function SalaryList() {
  
  const [userForm,setUserForm]=useState([]);
  const deleteSalary=(_id)=>{
    console.log(_id)
    axios.delete("http://localhost:4000/salary/delete-salary/"+_id)
    .then(()=>{
      console.log("Data successfully Deleted!");
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    axios.get("http://localhost:4000/salary/")
    .then((res)=>{
      setUserForm(res.data.data);
      console.log(res.data.data)
    })
    .catch((error)=>{
      console.log(error);
    },[userForm]);
  })
  return (
    <div style={{padding:'30px',backgroundColor:'	#404040',color:'white',width:'1227px',height:'500px'}}> 
     <h1>salary List</h1><br />
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Month and Year</th>
            <th scope="col">Salary</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userForm.map((salary,index)=>{
            return(
              <tr key={index}>
                <td>{salary.employee[0].name}</td>
                <td>{salary.monthyear}</td>
                <td>{salary.netsal}</td>
                <td>
                  <a className="btn btn btn-primary btn-sm me-2" href={"/edit-salary/"+ salary._id}>Edit</a>

                  <button className="btn btn-danger btn-sm" onClick={()=>deleteSalary(salary._id)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>

      </table>

      

    </div>
    </div>
  )
}

export default SalaryList