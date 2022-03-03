import React, { KeyboardEventHandler, useState } from "react";
import { Box, InputBase } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";

const SearchItem: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const navigate = useNavigate();
  const classes = useStyles();

  const search = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      setInput("");
      navigate("/search", {
        state: { searchTerm: input },
      });
    }
  };

  return (
    <Box className={classes.searchContainer}>
      <Box className={classes.searchIconWrapper}>
        <SearchIcon />
      </Box>
      <InputBase
        onKeyDown={search}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={classes.inputBase}
        placeholder='Search…'
        inputProps={{ "aria-label": "search" }}
      />
    </Box>
  );
};

export default SearchItem;
