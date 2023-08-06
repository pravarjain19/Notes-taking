import React, { useState } from 'react'


const Form = () => {
    const [name , setName] = useState("");
    const [email, setEmail] = useState("");
    const [data , setData] = useState([]);
    const submit = ()=>{
       
        setData([...data , {
            name , email
        }])
        setName("");
        setEmail("");
    }
    const del= (i)=>{
        let arr = [...data ];
        arr.splice(i,1);
        console.log(arr);
        setData([...arr]);


    }
    const edit = (i) =>{
        let name = data[i].name;
        let email = data[i].email;
        console.log(name,email);
        setName(name);
        setEmail(email);
        del(i);
    }
  return (
    <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={email} onChange={(e) =>{setEmail(e.target.value)}} />
        <button type="submit" onClick={submit}>Submit</button>

        <br />
        <p>name</p>
        <p>email</p>

        {
            data.map((e,i)=>{
                return(
                    <div key={i}>               
                  
                  <h4>{e.name}</h4>
                    <h4>{e.email}</h4>
                    <button onClick={()=>{del(i)}}>Delete</button>
                    <button onClick={()=>{edit(i)}}>Edit</button>
               
                </div>
                );
            })
        }
    </div>
  )
}

export default Form