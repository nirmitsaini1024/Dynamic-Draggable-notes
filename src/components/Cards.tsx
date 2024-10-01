import { FaRegFileLines } from "react-icons/fa6";
import { motion } from "framer-motion";

// @ts-ignore
function Cards({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
    >
      <div className="flex items-center">
        <FaRegFileLines />
        <h3 className="text-lg ml-2 font-bold text-gray-300">{data.name}</h3>
      </div>
      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between py-3 mb-3 px-8"></div>
        {data.tag.isOpen && (
          <div className="tag flex items-center justify-center bg-green-600 w-full py-4 "></div>
        )}
      </div>
    </motion.div>
  );
}

export default Cards;
