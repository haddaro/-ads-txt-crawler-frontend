import { useRef } from "react";
import { TextField, Fab } from "@mui/material";

const Form = ({ onFormSubmit }) => {
  const domainRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (domainRef.current) onFormSubmit(domainRef.current.value);
    domainRef.current.value = "";
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <TextField
          label="Enter a domain"
          inputRef={domainRef}
          variant="standard"
          margin="normal"
          style={{ width: "90%" }}
        />
        <Fab type="submit" variant="extended" color="primary">
          Parse Ads.txt
        </Fab>
      </form>
    </div>
  );
};

export default Form;
