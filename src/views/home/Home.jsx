import Navbar from '../../components/navbar/Navbar'
import Board from '../../components/grid/Board'
import ExternalLinks from '../../components/external-links/ExternalLinks'
import CoverLoader from '../cover-loader/CoverLoader'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from "framer-motion"

function Home() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
  }, [])

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div key="cover-loader" 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0, transition: {delay: 1}}}
                    transition={{delay: 0.5, duration: 0.5}}>
          <CoverLoader />
        </motion.div>
      ) : (
        <motion.div initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1.5, duration: 1}}>
          <Navbar />
          <Board />
          <ExternalLinks />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Home