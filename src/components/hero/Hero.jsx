import { motion } from "framer-motion";

motion;

export const Hero = ({ bgImage }) => {
  return (
    <div className="grid min-h-screen  content-center ">
      <div className=" h-[100vh] relative">
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover md:object-[center_top] object-top-left "
        />
        <div className="absolute bottom-20 left-5 z-10 text-2xl flex flex-col gap-5 ">
          <motion.h2
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
            }}
            className="font-bold text-4xl text-[#FD607B]"
          >
            Vive el estilo sin limites
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.3,
            }}
            className="flex flex-col gap-2"
          >
            <p
              className="font-bold text-white"
              style={{
                WebkitTextStroke: "0.2px black",
              }}
            >
              Nueva colección inspirada en la elegancia del camino.
            </p>
            <button className="btn btn-error w-50">DISCOVER</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
