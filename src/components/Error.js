import React from "react";
import "../App.css";
import { motion, AnimatePresence } from "framer-motion";

function Image({ error = "" }) {
  return (
    <AnimatePresence>
      {error && (
        <motion.p className="error-message" layout>
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

export default Image;
