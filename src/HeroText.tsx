import { motion } from "framer-motion";
import ComplementaryIcon from "./ComplementaryIcon";
import { animationStart, reveal } from "./utils/animation";

function HeroText() {
  return (
    <motion.div
      layout
      initial={{ height: 0 }}
      animate={{ height: "unset" }}
      transition={{ delay: animationStart, duration: 1 }}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1, duration: 0.5 }}
        className="mb-[30px] pt-[100px] text-[14px] font-bold sm:text-[3vw] md:flex md:flex-col"
      >
        <span className="flex items-center justify-center gap-[10px] text-center font-display font-medium">
          L'élégance
          <ComplementaryIcon size="60" />
          connectée,
        </span>
        <span className="text-center font-display font-medium ">
          au service de <span className="text-yellow">votre</span> bien-être.
        </span>
      </motion.div>
      <motion.span
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1.2, duration: 0.5 }}
        className="mb-2 w-[90%] text-sm md:w-2/5 lg:mb-[30px] xl:w-2/5 xl:text-base "
      >
        Un studio de design spécialisé dans la création de mobilier qui utilise
        la technologie IoT pour améliorer votre confort et créer une atmosphère
        harmonieuse.
      </motion.span>
    </motion.div>
  );
}

export default HeroText;
