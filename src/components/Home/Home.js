import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../SideBar/sidebarIcon'
import './home.css'
import EmailList from '../EmailList/EmailList'
import Compose from '../Compose/Compose'
import EmailDetails from '../EmailDetails/EmailDetails'
import { useSelector } from 'react-redux'
import Profile from '../Profile/Profile'

const Home = () => {
  const showemail=useSelector((state)=>state.compose.showEmail)
  return (
      <div>
      <Header/><br/><br/><br/>
      <Profile/>
      <div className='side'>
      <Sidebar/>
      <div>
        {showemail ? <EmailList/>:<EmailDetails/>}
        </div>
        <Compose/>
        </div>
      {/* <div><EmailDetails/></div> */}
    </div>
  )
}

export default Home
