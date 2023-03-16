import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setloading] = useState(false);

  const handleChange = (e) => {}

  const handleSubmit = (e) => {}

return (
  <div className="xl:mt xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">

  </div>
)
}

export default Contact