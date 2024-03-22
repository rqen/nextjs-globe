"use client"

import { motion } from 'framer-motion'

export default function Hero () {
  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      >
      <h1 className="hero-text">
        <span className="text-row text-4xl font-bold">
          <span className='regular-text'>CHRISTIAN</span> <span className='colored-text'><span className="gradient-text">RØEN</span></span>
        </span>
        <span className="text-row text-4xl font-bold">
          <span className='colored-text'><span className="gradient-text">RQEN</span></span><span className='regular-text'>.COM</span>
        </span>
      </h1>
    </motion.div>
  )
}