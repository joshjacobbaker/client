import React from "react"
import { motion } from "framer-motion"
const SecondPage = () => {
  return (
    <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} exit={{ scaleY: 0 }}>
      SecondPage
    </motion.div>
  )
}

export default SecondPage
