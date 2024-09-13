import React from "react";

const CharacterCard = ({ character, onClick }) => {
  return (
    <div
      className="relative w-40 h-52 rounded-lg border overflow-hidden cursor-pointer"
      onClick={() => onClick(character)}
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
    </div>
  );
};

export default CharacterCard;
