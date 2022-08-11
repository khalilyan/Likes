import React from 'react'
import "./LikedItem.css"
import { Checkbox } from '@mui/material'
import { Delete,DeleteTwoTone } from '@mui/icons-material'
import { motion } from 'framer-motion'
export default function LikedItem({url,author,picture,onChange}) {

  function handlecheck(e){
    onChange({ ...picture,
      liked: e.target.checked
    })
  }

  return (
    <motion.div 
        id='LikeditemContain'
        initial={{opacity: 0,y: 500}}
        animate={{opacity: 1,y: 0}}
        transition={{duration: 0.5,delay: 0.2}}
        exit={{opacity: 0}}
    >

      <div id='LikedauthorContain' >
          <img src={url} id="user" alt={author} width="50" height="50" />
          <a id='LikedauthorName' >{author}</a> 
      </div>
      
         <img src={url} alt={`photo by ${author}`} width="600" max-height="400" />

       <div id='Likelikedcontain' > 
          <Checkbox  
              icon={<DeleteTwoTone />}
              checked={picture.liked}
              checkedIcon={<Delete className='deleteicon'/>}
              size='large'
              onChange={handlecheck}
          />
       </div>
     </motion.div>
  )
}
