import React from 'react'
import './emaillist.css'
import EmailListSetting from '../EmailListSetting/EmailListSetting'
import EmailType from '../EmailType/EmailType'
import { IconButton } from '@mui/material'
import EmailBody from '../EmailBody/EmailBody'
import { useSelector } from 'react-redux'
import RecieveEmailBody from '../EmailBody/RecieveEmailBody'

const EmailList = () => {
  const message=useSelector((state)=>state.compose.message)
  const RecieveMessage=useSelector((state)=>state.compose.RecieveMessage)
  const SentShow=useSelector((state)=>state.compose.SentShow)
  const RecieveShow=useSelector((state)=>state.compose.RecieveShow);
  console.log("EmailListMessage",message);
  console.log("RecieveValue",RecieveMessage);
  return (
    <>
    <div className='emailList'>
      <EmailListSetting/>
       
    </div>
    <IconButton>
    <EmailType/>
    </IconButton>
    { RecieveShow && <div>
    {RecieveMessage.map((message)=>(
       <RecieveEmailBody id={message.id} name={message.reciept} subject={message.subject} message={message.textarea} time='02:30 PM'/>
    ))}
    </div>}

    {SentShow && <div>
    {message.map((message)=>(
       <EmailBody id={message.id} name={message.reciept} subject={message.subject} message={message.textarea} time='03:20'/>
    ))}
    </div>}
    {/* <EmailBody name={composeValue.reciept} subject={composeValue.subject} message={composeValue.textarea} time='03:20'/> */}
    </>
  )
}

export default EmailList
