import React, { useEffect, useState } from 'react'
import { addCom,delCom,onLiked } from './PostsSlice'
import { useDispatch,useSelector } from 'react-redux/es/exports'
import "./Item.css"
import { Checkbox } from '@mui/material'
import {FavoriteBorder,Favorite} from "@mui/icons-material"
import { selectUser } from './PostsSlice'
import { motion } from 'framer-motion'

export default function Item({url,author,picture,onChange,comment}) {

  function handlecheck(e){
    onChange({ ...picture,
      liked: e.target.checked
    })
  }

  const [txt,setTxt] = useState("");
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  const onEnterPress = (e) => {
    if(e.keyCode == 13 && e.shiftKey == false && e.target.value.length>=3 ) {
      e.preventDefault();
      dispatch(addCom({
        id: picture.id,
        comment: txt
      }))
      setTxt("")
    }
  }

  return (
    <motion.div 
    id='itemContain'
    initial={{opacity: 0,y: 500}}
    animate={{opacity: 1,y: 0}}
    transition={{duration: 0.5,delay: 0.2}}
    exit={{opacity: 0}}
    >

    <div id='authorContain' >
        <img src={url} id="user" alt={author} width="50" height="50" />
        <a id='authorName' >{author}</a> 
    </div>

    <img src={url} alt={`photo by ${author}`} width="600" max-height="400" onDoubleClick={()=> dispatch(onLiked({...picture,liked: !picture.liked}))} />

    <div id='commentsContain'>
      {comment.map((com)=><div key={com.id} id='comItem'> 
          <p id='creator'>{user}: </p> 
          <p id='text'>{com.text}</p>
          <button id='comdelbtn' onClick={()=>dispatch(delCom({
              id: picture.id,
              commentID: com.id
            }
          ))}>X</button>
      </div>)}
    </div>

    <div id='likecontain' >
    
    <textarea
      onKeyDown={onEnterPress}
      spellCheck="false" 
      className='comment'
      value={txt} 
      placeholder='Comment...' 
      type="text"
      onChange={(e)=>{
        setTxt(e.target.value)
      }}
      />
    
    <Checkbox  
      className='likebtn'
      icon={<FavoriteBorder  />}
      checked={picture.liked}
      checkedIcon={<Favorite className='heart' />}
      size='large'
      onChange={handlecheck}
    />
    </div>
  </motion.div>
  )
}
