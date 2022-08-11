import { selectLikes,onLiked } from '../posts/PostsSlice';
import { useDispatch, useSelector } from 'react-redux'
import LikedItem from './LikedItem';
import "./LikedList.css"
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';


export default function LikedList() {

  const dispatch = useDispatch();
  const likes = useSelector(selectLikes);
 
  return (
    <div id='LikedlistContain' >
      {
        (likes.length === 0)?<h1>is Empty</h1>:
          likes.map((post,i) =>{
            return (
              <AnimatePresence>
                <motion.div
                    initial={{opacity: 0,y: 500}}
                    animate={{opacity: 1,y: 0}}
                    transition={{duration: 0.5,delay: 0.2*i}}
                    >
                    <LikedItem 
                      url={post.download_url}
                      author={post.author} 
                      key={post.id} 
                      picture={post}
                      onChange={(newpicture)=>dispatch(onLiked(newpicture))}
                      />
                </motion.div>
              </AnimatePresence>
                    )})
        }
    </div>
  )
}
