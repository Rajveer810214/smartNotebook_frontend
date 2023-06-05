import React, { useEffect } from 'react'

import NotesForm from './AddNotes'
import Notes from './Notes'
import { useNavigate } from 'react-router-dom'

function Home(props) {
  const navigate=useNavigate();
  useEffect(() => {
if(localStorage.getItem('token')===null){
  navigate('/signup')
}
  }, [])
  
 
  return (
<div >

      
      <NotesForm showAlert={props.showAlert}/>
      <Notes showAlert={props.showAlert}/>
    
     </div>
    
  )
}

export default Home
