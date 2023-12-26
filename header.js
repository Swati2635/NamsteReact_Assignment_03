import logo from './assets/logofly.avif';
import { BiSolidUserCircle, BiSearch } from "react-icons/bi";
const Header=()=>{
 
    return(
        <div style={{display:"flex",flexDirection:"row",alignItems:"center", justifyContent:"space-between"}}>
        <img src={logo} style={{height:"100px",width:"100px", borderRadius:"50px"}} alt='logo'/>
        <div style={{position:"relative"}}>
        
        <input type="text" style={{ height:"30px",width:"400px", borderRadius:"10px"}}/>  

      <BiSearch  style={{ height:"25px",width:"25px",position:"absolute", right:"10px", top:"6px"}}/>

        </div>
         <BiSolidUserCircle style={{height:"50px",width:"50px"}}/> 
        </div>
    )
}

export default Header;







