import React, { useState } from "react";
import { motion } from "framer-motion";

import wallpaper1 from "./assets/wallpaper 1.jpg";
import wallpaper2 from "./assets/wallpaper 2.jpg";
import wallpaper3 from "./assets/wallpaper 3.jpg";
import wallpaper4 from "./assets/wallpaper 4.jpg";

import CharacterCard from "./component/CharacterCard";

function App() {
  // Dummy data for the characters
  const characters = [
    {
      id: 1,
      name: "Tanjiro Kamado",
      description: "A kind-hearted demon slayer determined to save his sister.",
      wallpaper: wallpaper1,
      details:
        "A determined demon slayer seeking to cure his sister Nezuko, who turned into a demon.",
    },
    {
      id: 2,
      name: "Nezuko Kamado",
      description:
        "A demon who fights to protect humans alongside her brother.",
      wallpaper: wallpaper2,
      details: "Transformed into a demon but still fights to protect others.",
    },
    {
      id: 3,
      name: "Zenitsu Agatsuma",
      description: "A cowardly but deadly fighter with lightning speed.",
      wallpaper: wallpaper3,
      details:
        "A coward, but unleashes deadly powers with his Breath of Thunder technique.",
    },
    {
      id: 4,
      name: "Tengen Uzui",
      description: "A flamboyant Sound Hashira with incredible strength.",
      wallpaper: wallpaper4,
      details: "The Sound Hashira with a flashy personality and immense power.",
    },
  ];

  // State to keep track of the selected character
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Function to handle character click
  const handleCharacterClick = (index) => {
    setSelectedIndex(index);
  };

  // Function to go to the previous character
  const handlePrevClick = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? characters.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next character
  const handleNextClick = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === characters.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="w-full h-dvh relative">
        {/* Background Image with Framer Motion Animation */}
        <motion.img
          key={characters[selectedIndex].wallpaper} // Ensure animation happens when wallpaper changes
          src={characters[selectedIndex].wallpaper}
          alt={characters[selectedIndex].name}
          className="absolute -z-10 top-0 w-full h-dvh object-cover"
          initial={{ opacity: 0 }} // Starting opacity for fade-in effect
          animate={{ opacity: 1 }} // Ending opacity for fade-in effect
          exit={{ opacity: 0 }} // Fade-out effect when unmounting
          transition={{ duration: 0.5 }} // Animation duration
        />

        <div className="container flex flex-col justify-between h-dvh px-5 md:px-10 mx-auto text-white py-8 md:pt-20 md:pb-10">
          <motion.div
            className="flex flex-col gap-2 justify-start"
            key={characters[selectedIndex].name} // Ensure animation happens when character changes
            initial={{ opacity: 0, y: 20 }} // Starting animation: fade in from below
            animate={{ opacity: 1, y: 0 }} // Animate to final position
            exit={{ opacity: 0, y: 20 }} // Fade-out effect on exit
            transition={{ duration: 0.5 }} // Animation duration
          >
            <h1 className="uppercase tracking-[.75em] font-bold text-base">
              demon slayer
            </h1>
            <h2 className="uppercase font-extrabold text-5xl my-2">
              {characters[selectedIndex].name}
            </h2>
            <p className="w-full md:w-[45%] font-medium">
              {characters[selectedIndex].details}
            </p>
            <button className="mt-5 w-fit border px-5 py-2.5 rounded-md">
              More details
            </button>
          </motion.div>

          <div className="flex items-start md:justify-between gap-5 overflow-x-auto md:overflow-x-visible scrollbar-hide">
            <div className="flex gap-5 items-center">
              <button
                onClick={handlePrevClick}
                className="border bg-transparent rounded-full py-2.5 px-4"
              >
                {"<"}
              </button>
              <button
                onClick={handleNextClick}
                className="border bg-transparent rounded-full py-2.5 px-4"
              >
                {">"}
              </button>
            </div>
            <div className="flex gap-5 overflow-x-auto md:overflow-x-visible scrollbar-hide">
              {characters.map((character, index) => (
                <CharacterCard
                  key={character.id}
                  character={character}
                  onClick={() => handleCharacterClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
