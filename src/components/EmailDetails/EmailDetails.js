import React from 'react'
import '../EmailListSetting/emaillistsetting.css'
import { IconButton } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import { composeAction } from '../../store/composeSlice';

const EmailDetails = () => {
    const openMessage=useSelector((state)=>state.compose.openMessage)

    const dispatch=useDispatch();
    const BackHandler=()=>{
       dispatch(composeAction.ShowEmail());
    }
  return (
    <div className='emailDetails'>
        <ArrowBackIcon onClick={BackHandler}/>
    <div className='emaillist_setting'>
    <div className='emaillist_settingleft'>
      <IconButton>
       <CheckBoxOutlineBlankIcon/>
      </IconButton>

      <IconButton>
        <KeyboardArrowDownIcon/>
      </IconButton>

      <IconButton>
        <RefreshIcon/>
      </IconButton>

      <IconButton>
        <MoreVertIcon/>
      </IconButton>
    </div>
    <div className='emaillist_settingright'>
      <IconButton>

      </IconButton>
    </div>
    </div>
    <div className='emailDetails_header'>

    </div>
    <div className='emailDetails_headerleft'>
        <h2>{openMessage.name}</h2>
       <h3>{openMessage.subject}</h3>
       <h4>{openMessage.message}</h4>
    </div>
    <div className='emailDetails_headerright'>

    </div>
    </div>
  )
}

export default EmailDetails
