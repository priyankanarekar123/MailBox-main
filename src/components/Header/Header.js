import React from 'react'
import './header.css'
import ReorderIcon from '@mui/icons-material/Reorder';
import { IconButton,Avatar} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';


const Header = () => {
  return (
    <div className='header'>
        <div className='header_left'>
          <IconButton>
            <ReorderIcon/>
          </IconButton>
          <img className='gmail' src='data:image/png;base64,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'/>
       </div>

       <div className='header_middle'>
        <div className='search_mail'>
          <IconButton>
            <SearchIcon/>
          </IconButton>
          <input type='text' placeholder='search mail'/>
          <IconButton>
            <ArrowDropDownIcon/>
          </IconButton>
        </div>
       </div>

       <div className='header_right'>
         <IconButton>
            <HelpIcon/>
         </IconButton>
         <IconButton>
            <SettingsIcon/>
         </IconButton>
         <IconButton>
            <AppsIcon/>
         </IconButton>
         <IconButton>
        <Avatar src=''/>
         </IconButton>
       </div>
    </div>
  )
}

export default Header
