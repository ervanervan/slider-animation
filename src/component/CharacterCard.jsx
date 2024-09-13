import { motion } from "framer-motion";

const CharacterCard = ({ character, onClick, isSelected }) => {
  return (
    <motion.div
      className="relative w-40 h-52 rounded-lg border overflow-hidden cursor-pointer"
      onClick={() => onClick(character)}
      whileHover={{ scale: 1.05 }} // Add scale on hover for a nice effect
      initial={{ scale: 0.9, opacity: 0 }} // Initial scale and opacity for entering
      animate={{
        scale: isSelected ? 1.1 : 1, // Animate scale when selected
        opacity: 1, // Make sure the opacity is 100% when visible
      }}
      exit={{ scale: 0.9, opacity: 0 }} // Scale and fade out when exiting
      transition={{ duration: 0.5 }} // Duration for the animation
    >
      <div className="flex flex-col justify-end text-end p-4 w-40 h-52">
        <img
          src={character.wallpaper}
          alt={character.name}
          className="absolute top-0 left-0 -z-10 w-full h-full object-cover"
        />
        <h3>{character.name}</h3>
        <p className="text-[10px]">{character.description}</p>
      </div>
    </motion.div>
  );
};

export default CharacterCard;
