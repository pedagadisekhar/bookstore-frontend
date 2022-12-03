import logo from './logo.svg';
import './get.css';
import react,{useEffect,useState} from 'react' 
import axios from 'axios';


import { Link } from 'react-router-dom';

function Getdata() {
  const [data,setData] = useState([]);
 

  useEffect(()=>{
     axios.get("http://localhost:8080/")
     .then(response=>{setData(response.data.data);console.log(response.data)})
  },[])
  function refreshPage() {
      window.location.reload(true);
    }
  const DeleteHandler =(id)=>{
    
    axios.delete(`http://localhost:8080/delete${id}`)
    .then(res=>console.log("deleted",res))
    .then(res=>{setData(res.data.data);console.log(res.data)})
    .catch(err=>console.log(err))

    refreshPage()
  }

  return (
    <div className="App">
        <div className='header'><h1>Book-list</h1>
        <Link to="/Addnew"><button className='add-button'>+AddnewBook</button></Link></div>
    
     
      {
        data.map((item)=>{
          return(
            <>
            <div className='book-block'>
            <img src={item.image}/>
            <p className='name'>{item.name}</p>
            <p className='author'>{item.author}</p>
            <p className='description'>{item.description}</p>
            <button className='delete' onClick={()=>DeleteHandler(item._id)}>delete</button>
            </div>
           
            </>
          )
        })
      }
      {/* <Router>
      <Routes>
      <Route exact path='/addnew' element={<Addnew/>}/>
      </Routes>
      </Router> */}
      {/* <Addnew/> */}
    </div>
  );
}

export default Getdata;
