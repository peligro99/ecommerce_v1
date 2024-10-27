import { Button } from '@mui/material';
import { FaAngleDown } from 'react-icons/fa6';
const CountryDropDown=()=>{
    return(
        <>
        
                                
                                   
                                
                               <Button className='countryDrop' variant="text">
                                <div className='info d-flex flex-column'>
                                <span className='label'>Your Location</span>
                               <span className='name'>India</span>
                               </div>
                               <span className='ml-auto'><FaAngleDown/></span>
                               </Button>
                           
        </>
    )
}

export default CountryDropDown;