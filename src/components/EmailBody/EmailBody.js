import React from 'react'
import './emailbody.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import { composeAction } from '../../store/composeSlice';
import { useDispatch, useSelector } from 'react-redux';

const EmailBody = (props) => {
  const dispatch=useDispatch()
  const email=localStorage.getItem("email");
  //const email=useSelector((state)=>state.login.email);
  const ChangeEmail=email.replace(/[@.]/g,'')
    const deleteEmail=async()=>{
        try{
          console.log("Delete",props);
          const response=await fetch(
            `https://mailbox-b5387-default-rtdb.firebaseio.com/users/${ChangeEmail}/sent/${props.id}.json`,
            {
              method: 'DELETE',
            }
          );
          if(!response.ok){
            throw new Error('Failed to delete compose.')
          }
          dispatch(composeAction.deleteCompose(props))
          dispatch(composeAction.ShowEmail())
        }catch(error){
          console.log(error)
          alert('Failed to delete compose.please try again')
        }
    }
    const EmailBodyHandler=()=>{
       dispatch(composeAction.ShowEmail())
       dispatch(composeAction.openMessage(props));
    }
  return (
    <>
    <div className='emailbody' onClick={EmailBodyHandler}>
       <div className='emailbody_left'>
         <StarBorderIcon/>&nbsp;
         <h4>{props.name}</h4>
       </div>
       <div className='emailbody_middle'>
        <div className='emailbody_middle_msg'>
          <p><b>{props.subject}</b>&nbsp;{props.message}</p>
        </div>

       </div>
       <div className='emailbody_right'>
           <p>{props.time}</p>
       </div>
       <div className='deleteIcon'>
         <DeleteIcon onClick={()=>deleteEmail(props)}/>
       </div>
    </div>
    <br/>
    </>
  )
}

export default EmailBody
