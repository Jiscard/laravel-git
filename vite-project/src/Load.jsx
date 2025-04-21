import React, { useEffect, useState } from 'react';

function Load(){
    const [student, setStudent] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/students')
        .then((res)=>{
          if(!res.ok){
            setLoading(true);
          }else{
            return res.json();
          }
        })
          
        .then((data)=>{
       
            setStudent(data);
            setLoading(false);
        })
        .catch((error)=>{
            console.error('error fetching data: ', error);
            setLoading(false);
        });
        
    }, []);
    if (loading) return <p>loading users...</p>
return(
    <>
 <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {student.map((s, index) => (
            <tr key={s.id || index}>
              <th scope="row">{index + 1}</th>
              <td>{s.name}</td>
              <td>{s.last_name}</td>
              <td>{s.email}</td>
              <td>{s.mobile}</td>
              <td className='btn btn-secondary'>Delete</td>
              <td className='btn btn-primary'>Update</td>
            </tr>
          ))}
        </tbody>
      </table>
</>
)

}

export default Load;