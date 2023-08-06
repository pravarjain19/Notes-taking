import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Text() {
    
    const [name , setName] = useState("");
    const [note, setNote] = useState("");
    const [data , setData] = useState([]);
    const submit = ()=>{
       
        setData([...data , {
            name , note
        }])
        console.log(data);
        setName("");
        setNote("");
    }
    const del= (i)=>{
        let arr = [...data ];
        arr.splice(i,1);
        console.log(arr);
        setData([...arr]);


    }
    const edit = (i) =>{
        let name = data[i].name;
        let note = data[i].note;
        console.log(name,note);
        setName(name);
        setNote(note);
        del(i);
    }
  return (
    <>
    <div className='main-form'>
         <Form>
      <Form.Group className="mb-5" controlId="">
        <Form.Label>Topic</Form.Label>
        <Form.Control type="name" placeholder="Heading" value={name} onChange={(e)=>{setName(e.target.value)}} />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Notes</Form.Label>
        <Form.Control as="textarea" rows={4} placeholder="notes" value={note} onChange={(e)=>{setNote(e.target.value)}} />
      </Form.Group>
      
      <div className='text-centre'>
      <Button variant="success"  onClick={submit}>
        Submit
      </Button>
      </div>
    </Form>
    </div>
        {
          data.map((e,i)=>{
            return(
            <div className="notes" key={i}>
            <div className="notes-card">
            <h5>{e.name}</h5>
             <p>{e.note}</p>
             <a href="#" onClick={()=>{edit(i)}}>Edit</a>
             <a href="#" onClick={()=>{del(i)}}>Delete</a>
            </div>
         </div>
            )
          })
        }
       
   </>
  );
}

export default Text;