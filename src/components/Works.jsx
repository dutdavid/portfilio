import tilt from "react-tilt";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>What I have done so far</p>
         <h2 className={styles.sectionHeadText}>Work Experience</h2>
    </motion.div>
    <div className="mt-20 flex flex-col">
     <VerticalTimeline>
       {experiences.map((experience, index) => (
         <ExperienceCard key={index} experience={experience} />
       ))}
     </VerticalTimeline>
 
    </div>
    </>
  )
}

export default SectionWrapper(Works, "");