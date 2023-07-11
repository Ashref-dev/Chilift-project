import Logo from "./Logo";
import ArrowRight from "./ArrowRight";
import { motion } from "framer-motion";
import { animationStart, reveal } from "./utils/animation";

function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: animationStart }}
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{
          ease: "easeIn",
          type: "tween",
          staggerChildren: 0.1,
          duration: 0.5,
          delayChildren: animationStart + 0.5,
        }}
        className="bg-white z-100 absolute top-0 flex h-20 w-full items-center justify-around"
      >
        <motion.div variants={reveal}>
          <Logo className="w-20" />
        </motion.div>
        <div className="hidden md:flex md:items-center md:gap-5">
          <motion.span variants={reveal} className="cursor-pointer">
            solutions.
          </motion.span>
          <motion.span variants={reveal} className="cursor-pointer">
            courses.
          </motion.span>
          <motion.span variants={reveal} className="cursor-pointer">
            resources.
          </motion.span>
          <motion.span variants={reveal} className="cursor-pointer">
            about.
          </motion.span>
        </div>
        <motion.div
          variants={reveal}
          className="flex cursor-pointer items-center gap-1"
        >
          <span className="mb-1">sign in</span>
          <ArrowRight />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Navbar;
