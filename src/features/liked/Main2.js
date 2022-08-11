import React from 'react'
import LikedList from './LikedList'
import { motion } from 'framer-motion';
export default function Main2() {
  return (
    <motion.div
      initial={{x: 700,opacity: 0}}
      animate={{x:0,opacity: 1}}
      exit={{x: 700,opacity: 0}}
      transition={{duration: 0.5}}
    >
      <LikedList/>
    </motion.div>
  )
}
