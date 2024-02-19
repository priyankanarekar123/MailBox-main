import React from 'react'
import './emaillistsetting.css'
import { IconButton } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const EmailListSetting = () => {
  return (
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
  )
}

export default EmailListSetting
