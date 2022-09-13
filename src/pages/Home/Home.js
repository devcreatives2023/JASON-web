import React from "react";
import { Navbar, Slides } from "../../components";
import { motion } from "framer-motion";
import { icon} from '../../constants';
const Home = () => {
  return (
    <>
      <Navbar text={ <icon.AiOutlinePlus/>}  link='./'   />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        exit={{ opacity: 1 }}
        className="p-[1rem]"
      >
        <Slides />
      </motion.div>
    </>
  );
};

export default Home;
