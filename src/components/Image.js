import React from "react";
import "../App.css";
import { motion, AnimatePresence } from "framer-motion";

function Image({ src = "", alt = "" }) {
  return (
    <AnimatePresence>
      <motion.div className="gallery-item" layout>
        <img src={src} className="gallery-image" alt={alt} />
      </motion.div>
    </AnimatePresence>
  );
}

export default Image;
