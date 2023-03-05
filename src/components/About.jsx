import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from  '../styles';
import { services } from "../constants";
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        A competent full stack and Mobile app developer with a proven track record in developing mobile applications, 
        networking and managing databases. Very keen on acquiring knowledge to develop and improve myself. 
        My career goal is to gain a role which allows me to further my knowledge and skills, 
        as well as increased responsibility at a market-leading and innovative company.
      </motion.p>
    </>
  )
}

export default About