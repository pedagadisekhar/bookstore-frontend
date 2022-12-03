import react,{useEffect,useState} from 'react' 
import axios from 'axios';
import "./add.css"
import { Navigate, useNavigate } from "react-router-dom";

const Addnew=()=>{
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [author,setAuthor] = useState("");
    const [bookname,setBookname] = useState("");
    
    const [image,setImage] = useState("");
    const [price,setPrice] = useState("");
    const Navigate = useNavigate();
    // function refreshPage() {
    //     window.location.reload(true);
    //   }
  const Submithandler = (e)=>{

    e.preventDefault()
    
    axios.post("http://localhost:8080/add",{
      name:name,
      description:description,
      author:author,
      bookname:bookname,
      image:image,
      price:price
  
    }).then(response=>console.log("postingdata",response)).catch(err=>console.log(err))
  
    //refreshPage()
    Navigate("/");
   
  }
  

    return(
        <>
        <h1>Create new book</h1>
 <form onSubmit={Submithandler}>
      <input type="text" placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/>
      <input type="text" placeholder="description" value={description} onChange={(e)=>{setDescription(e.target.value)}}/><br/>
      <input type="text" placeholder="author" value={author} onChange={(e)=>{setAuthor(e.target.value)}}/><br/>
      <input type="text" placeholder="bookname" value={bookname} onChange={(e)=>{setBookname(e.target.value)}}/><br/>
      <input type="text" placeholder="image" value={image} onChange={(e)=>{setImage(e.target.value)}}/><br/>
      <input type="text" placeholder="price" value={price} onChange={(e)=>{setPrice(e.target.value)}}/><br/>
       <input type="submit" className='submit'/>
      </form>

        </>
    )
}

export default Addnew;