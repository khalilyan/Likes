import React from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { editUser,addPhoto,selectUser } from '../posts/PostsSlice'
import { AddAPhotoOutlined } from '@mui/icons-material'
import "./userStyle.css"
import { useSelector } from 'react-redux'
export default function UserName() {
  const filereader = new FileReader()
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

 const handlechange = (e) => {
    const file = e.target.files[0]
    filereader.readAsDataURL(file)
  }

  filereader.onloadend = () =>{
  //  console.log(filereader.result)
    dispatch(addPhoto({
      "id": Math.random(),
      "author": user,
      "download_url": `${filereader.result}`,
      liked: false,
      comment: []
    }))
  }

  return (
    <div id='setuserContain'>
      <div className='container'>
        <input 
            type="text" 
            id="usernam" 
            placeholder='Username'
            onChange={(e)=>{
              dispatch(editUser(e.target.value))
            }}
          />

          <input id="choose"type={'file'} visbility="hidden"  accept="image/png , image/jpeg" onChange={handlechange} />
          <AddAPhotoOutlined  id="upload" aria-hidden="true"/>
      </div>
    </div>
  )
}
