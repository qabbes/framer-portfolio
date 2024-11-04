"use client";
import { animate, motion } from "framer-motion";

import React from "react";

const RotatingShape = ({ content, direction, duration }) => {
  //defining the animation
  const rotationAnimation = {
    animate: {
      //self explanatory: 360 degrees for right, -360 for left, 0 for none
      rotate: direction === "right" ? 360 : "left" ? -360 : 0,
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "linear", // smooth rotation
      },
    },
  };
  return (
    <motion.div variants={rotationAnimation} animate="animate">
      {content}
    </motion.div>
  );
};

export default RotatingShape;
