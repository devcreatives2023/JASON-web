import React from "react";
import { Navbar, Slides } from "../../components";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        className="p-[1rem]"
      >
        <Slides />
      </motion.div>
    </>
  );
};

export default Home;
