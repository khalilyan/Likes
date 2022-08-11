import React from 'react'
import List from './List'
import { motion } from 'framer-motion';

export default function Main1() {
  return (
    <motion.div
      initial={{x: -700,opacity: 0}}
      animate={{x:0,opacity: 1}}
      exit={{x: -800,opacity: 0}}
      transition={{duration: 0.5}}
    >
      <List/>
    </motion.div>
  )
}
