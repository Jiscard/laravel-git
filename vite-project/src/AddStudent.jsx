import { useState } from "react";

function AddStudent(){
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile,setMobile] = useState('');
        
    const handleNameChange =(event)=>{
        setName(event.target.value);
    };
    const handleLastName =(event)=>{
        setLastName(event.target.value);
    };
    const handleMobile =(even)=>{
      setMobile(even.target.value)
    }
    const handleEmail = (event) =>{
        setEmail(event.target.value);
    };

    const submit = (event)=>{
        event.preventDefault();
console.log(email,name,lastName,mobile);
fetch('http://127.0.0.1:8000/api/students', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({
      name: name,
      last_name: lastName,
      email: email,
      mobile: mobile
  })
})
.then(response => response.json())
.then(data => {
  console.log('Student added:', data);
    setEmail('');
    setName('');
    setLastName('');
    setMobile('');

})
.catch(error => {
  console.log('Error:', error);
});


    };

    return (
        <div>
            <form onSubmit={submit}>
            <label>First Name</label>
            <input type="text" value={name} onChange={handleNameChange} />
            <br />
            <label>Last Name</label>
            <input type="text" value={lastName} onChange={handleLastName} />
            <br />
            <label>Email </label>
            <input type="email" value={email} onChange={handleEmail} />
            <br />
            <label>Mobile </label>
            <input type="text" value={mobile} onChange={handleMobile} />
            <br />
            <button type="submit">add student</button>
            </form>
           
        </div>
    );
}
export default AddStudent