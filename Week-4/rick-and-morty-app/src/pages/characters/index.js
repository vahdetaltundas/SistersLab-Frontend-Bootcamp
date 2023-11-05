import React, { useEffect, useState } from "react";
import { fetchCharacters } from "../api";
import CharacterCard from "@/Components/characterComponent/CharacterCard";
import { Stack } from "@mui/material";
import AppBarComponent from "@/Components/AppBarComponent";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [searchText, setSearchText] = useState("");
  const callBackSearchText = (text) => {
    setSearchText(text);
  };
  useEffect(() => {
    const getCharacters = async () => {
      const characters = await fetchCharacters();
      setCharacters(characters);
    };
    getCharacters();
  }, []);

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div>
      <AppBarComponent callBackSearchText={callBackSearchText} />
      <Stack
        spacing={{ xs1: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        justifyContent="center"
      >
        {filteredCharacters.map((character) => (
          <CharacterCard character={character} />
        ))}
      </Stack>
    </div>
  );
};

export default Characters;
