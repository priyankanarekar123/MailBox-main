import React from 'react'
import './sidebar.css';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import {Button} from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SideBarOption from '../SideBarOption/SideBarOption';
import MailIcon from '@mui/icons-material/Mail';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import { composeAction } from '../../store/composeSlice';
import {toast} from 'react-toastify'


const SidebarIcon = () => {
  const count=useSelector((state)=>state.compose.count)
  const RecieveCount=useSelector((state)=>state.compose.RecieveCount)
  
  const dispatch=useDispatch();  
  const composeHandler=()=>{
    toast.success('Open Compose Box', {
      position: 'top-center',
      autoClose: 3000,
    });
    dispatch(composeAction.Showcompose())
  }
  const logoutHandler=()=>{
    localStorage.removeItem("tokenId")
    localStorage.removeItem("email")
    localStorage.removeItem("showLogin");
    
    toast.error('Logout Sucessful', {
      position: 'top-center',
      autoClose: 3000,
    });
  }
  const SentShowHandler=()=>{
      dispatch(composeAction.SentShowMessage())
  }
  const RecieveShowHandler=()=>{
     dispatch(composeAction.RecieveShowMessage());
  }
  return (
     <div className='sidebar'>
       <Button startIcon={<ControlPointIcon/>} className='compose_btn' onClick={composeHandler}>Compose</Button><br/><br/>
       
       <div onClick={RecieveShowHandler}><SideBarOption Icon={MailIcon} title='Inbox' number={RecieveCount} isactive={true}/>
       </div>
       <SideBarOption Icon={StarBorderIcon} title='Starred' number='234'/>

       <SideBarOption Icon={AccessTimeFilledIcon} title='Snoozed' number='234'/>

       <div onClick={SentShowHandler}><SideBarOption Icon={SendIcon} title='Sent' number={count} isactive={true}/>
       </div>
       <SideBarOption Icon={DraftsIcon} title='Drafts' number='234'/>

       <SideBarOption Icon={DeleteForeverIcon} title='Trash' number='234'/>
       <button className='logoutBtn' onClick={logoutHandler}><Link to='/'><b className='logout_Btn'>Logout</b></Link></button>
     </div>
  )
}

export default SidebarIcon;
