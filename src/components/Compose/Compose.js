import React, { useEffect, useRef } from 'react'
import './compose.css'
import RemoveIcon from '@mui/icons-material/Remove';
import PinchIcon from '@mui/icons-material/Pinch';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import AttachmentIcon from '@mui/icons-material/Attachment';
import LinkIcon from '@mui/icons-material/Link';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import LockIcon from '@mui/icons-material/Lock';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { composeAction } from '../../store/composeSlice';
import { toast } from 'react-toastify';

const Compose = () => {
   const dispatch=useDispatch();
   const show=useSelector((state)=> state.compose.showCompose)
   //const email=useSelector((state)=>state.login.email)
   const RecieptValue=useSelector((state)=>state.compose.sendEmail);
   const RecieveEmail=RecieptValue.replace(/[@.]/g,'');
   console.log("r",RecieveEmail);

   const email=localStorage.getItem("email")
   const ChangeEmail=email.replace(/[@.]/g,'')
   
   const reciepentInputRef=useRef();
   const subjectInputRef=useRef();
   const textareaInputRef=useRef();


   const fetchCompose=async ()=>{
      try{
         const response=await fetch(`https://mailbox-b5387-default-rtdb.firebaseio.com/users/${ChangeEmail}/sent.json`)
         if(!response.ok){
            throw new Error('Failed to fetch compose.')
         }
         const data=await response.json();
         const loadedMessage=[];
         for(const key in data){
            const currentMessage={
               id: key,
               reciept: data[key].reciept,
               subject: data[key].subject,
               textarea: data[key].textarea,
            }
            loadedMessage.push(currentMessage);
         }
         dispatch(composeAction.setCompose(loadedMessage));
      } catch (error){
         console.log(error);
      }
   }
    
   const fetchRecieve=async ()=>{
      try{
         const response=await fetch(`https://mailbox-b5387-default-rtdb.firebaseio.com/users/${ChangeEmail}/Recieved.json`)
         if(!response.ok){
            throw new Error('Failed to fetch compose.')
         }
         const data=await response.json();
         const loadedMessage=[];
         for(const key in data){
            const currentMessage={
               id: key,
               reciept: data[key].reciept,
               subject: data[key].subject,
               textarea: data[key].textarea,
            }
            loadedMessage.push(currentMessage);
         }
         dispatch(composeAction.setRecieve(loadedMessage));
      } catch (error){
         console.log(error);
      }
   }
 

   useEffect(() => {
      setInterval(() => {
        fetchCompose();
      }, 5000);
      setInterval(() => {
        fetchRecieve();
      }, 5000);
      
      dispatch(composeAction.Showcompose());
    }, [ChangeEmail]);

 

   const ClearHandler=()=>{
      toast.error('Remove Compose Box', {
         position: 'top-center',
         autoClose: 3000,
       });
      dispatch(composeAction.Showcompose());
   }
   const sendHandler=async(event)=>{
       const composeValue={
          reciept: reciepentInputRef.current.value,
          subject: subjectInputRef.current.value,
          textarea: textareaInputRef.current.value,
       };
       const ChangeReciept=composeValue.reciept.replace(/[@.]/g,'');
       try{
         const response=await fetch(`https://mailbox-b5387-default-rtdb.firebaseio.com/users/${ChangeReciept}/Recieved.json`,{
            method: 'POST',
            body: JSON.stringify(composeValue),
            headers: {
               'Content-Type': 'application/json',
            },            
         });
         if(!response.ok){
            throw new Error('Failed to send.');
         }
         const data=await response.json();
         const updateSendValue={...composeValue,id: data.name}
         console.log("RecieveValue",updateSendValue);
         alert("sent sucessful");
         toast.success('send sucessful', {
            position: 'top-center',
            autoClose: 3000,
          });
       } catch (error){
         console.error(error);
         alert("Failed to send value. try again.")
       }
       reciepentInputRef.current.value='';
       subjectInputRef.current.value='';
       textareaInputRef.current.value='';
       //
       try{
         console.log("sendEmail",ChangeEmail);
         const response=await fetch(`https://mailbox-b5387-default-rtdb.firebaseio.com/users/${ChangeEmail}/sent.json`,{
            method: 'POST',
            body: JSON.stringify(composeValue),
            headers: {
               'Content-Type': 'application/json',
            },            
         });
         if(!response.ok){
            throw new Error('Failed to send.');
         }
         const data=await response.json();
         const updateSendValue={...composeValue,id: data.name}
         console.log("sendValue",updateSendValue);
         dispatch(composeAction.sendMessage(updateSendValue))
         //dispatch(composeAction.Showcompose());
         toast.success('send sucessful', {
            position: 'top-center',
            autoClose: 3000,
          });
       } catch (error){
         console.error(error);
         alert("Failed to send value. try again.")
       }
       reciepentInputRef.current.value='';
       subjectInputRef.current.value='';
       textareaInputRef.current.value='';
   }

  return (
   <>
    {show && <div className='compose'>
       <div className='compose_header'>
          <div className='compose_header_left'>
             <span>New Message</span>
          </div>

          <div className='compose_header_right'>
            <RemoveIcon/>
            <PinchIcon/>
            <ClearIcon onClick={ClearHandler}/>
          </div>
       </div>

       <div className='compose_body'>
           <div className='compose_bodyform'>
             <input type='email' placeholder='Reciepents' ref={reciepentInputRef}/>
             
             <input type='text' placeholder='Subject' ref={subjectInputRef}/>
             <textarea rows='20' ref={textareaInputRef}></textarea>
           </div>
       </div>

       <div className='compose_footer'>
          <div className='compose_footerleft'>
             <button type='submit' onClick={sendHandler}>send <ArrowDropDownIcon/></button>
          </div>
          <div className='compose_footerright'>
             <TextFormatIcon/>
             <AttachmentIcon/>
             <LinkIcon/>
             <TagFacesIcon/>
             <AddToDriveIcon/>
             <InsertPhotoIcon/>
             <LockIcon/>
             <MoreVertIcon/>
             <DeleteIcon/>
          </div>
       </div>
    </div>}
    </>
  )
}

export default Compose
