import { useState } from "react";

import { NameCard } from "./NameCard";
import { useQueryNew } from "../utils/gqlQueries";
import TextField from "@mui/material/TextField";
import "./SearchForm.css";

export const SearchForm = () => {
  const { loading, error, refetch } = useQueryNew("");
  const [stateData, setStateData] = useState([]);
  const [valid, setValid] = useState(true);

  const handleValidation = (e) => {
    const reg = new RegExp("^[a-zA-Z]*$");
    setValid(reg.test(e.target.value));
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{error.message}</pre>;

  return (
    <div className="grid">
      <div>
        <h1 className="title">SEARCH FOR PHONE</h1>
        <h4 className="phoneMagic">
          by <span className="brand">PhoneMagic</span>
        </h4>
        <br></br>
        <div className="instructions">Enter your search string: </div>
        <TextField
          onChange={(e) => {
            handleValidation(e);
            refetch({ name: e.target.value }).then((data) =>
              setStateData(data.data.number)
            );
          }}
          error={!valid}
          helperText={valid ? "" : "Please use letters only"}
        />
      </div>
      <div className="cardContainer">
        {stateData?.map((element) => (
          <NameCard element={element} />
        ))}
      </div>
    </div>
  );
};
