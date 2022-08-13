import React from 'react'
import { useSelector,useDispatch } from 'react-redux/es/exports'
import { loadPosts,selectPosts } from '../posts/PostsSlice'
import {NavLink,BrowserRouter} from "react-router-dom"
import logo from "./likesLogo.png"
import "./header.css"
export default function Header() {

  const posts = useSelector(selectPosts);
  const dispatch = useDispatch()
  const isactiveLink = ({isActive}) => isActive ? 'acive-link' : 'link'
  const scrolltoTop = ()=>{
    window.scrollTo(0,0)
  }
  return (
    <header id='headerContain'>
      <img id='logo' onClick={scrolltoTop} src={logo}/>
      <BrowserRouter basename="/LikesWeb">
        <NavLink className={isactiveLink} to='/posts'>Posts</NavLink>
        <NavLink className={isactiveLink} to='/liked'>Liked</NavLink>
        {(posts.length === 0)?<NavLink className='load' to='/posts' onClick={()=>dispatch(loadPosts())}>Load</NavLink>:null}
        </BrowserRouter>
    </header>
  )
}
