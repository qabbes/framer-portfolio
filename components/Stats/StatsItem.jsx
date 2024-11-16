import CountUp from "react-countup";
import { AnimatePresence, motion } from "framer-motion";

const StatsItem = ({ endCountNum, endCountText, text }) => {
  return (
    <div className="flex xl:flex-1 flex-col items-center text-center">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: "250", damping: "10" }}>
          <div className=" font-primary text-primary text-4xl xl:text-5xl leading-none">
            <CountUp end={endCountNum} delay={0.5} duration={5} />
            <span className="">{endCountText}</span>
          </div>
          <p className="text-sm">{text}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default StatsItem;
