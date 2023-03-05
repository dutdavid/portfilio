import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from  '../styles';
import { services } from '../constants';
import { fadein, textVariant } from '../utils/motion';

const About = () => {
  return (
    <>
    <motion.div>
      <p className={sectionSubText}>
        Introduction
      </p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    </>
  )
}

export default About