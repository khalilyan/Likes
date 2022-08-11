import { selectPosts,onLiked } from './PostsSlice'
import { useDispatch, useSelector } from 'react-redux'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import "./List.css"
import Item from './Item'
import { useState } from 'react';


export default function List() {

  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const [limit,setLimit] = useState(10) 
  
  return (
    <div id='listContain' >
        {
          posts.slice(0,limit).map((post) =>{
              return <Item 
                url={post.download_url}
                author={post.author} 
                key={post.id} 
                comment={post.comment}
                picture={post}
                onChange={(newpicture)=>{
                  dispatch(onLiked(newpicture))
                }}
                />
              })
            }
            {(posts.length>=30 && posts.length!==0)?<ExpandCircleDownIcon id='moreBtn' onClick={()=>setLimit(limit+10)}>More</ExpandCircleDownIcon>:null}
            
    </div>
  )
}
