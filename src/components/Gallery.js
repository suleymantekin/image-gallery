import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import Image from "./Image";
import "../App.css";

function Gallery({ images = [] }) {
  return (
    <AnimateSharedLayout>
      <motion.div
        className="gallery"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        layout
      >
        {images.map((image) => (
          <Image src={image} key={image} />
        ))}
      </motion.div>
    </AnimateSharedLayout>
  );
}

export default React.memo(Gallery);
