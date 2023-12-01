import { useState } from "react";
import { Typography, CircularProgress } from "@mui/material";
import Form from "./components/Form";
import MyTable from "./components/MyTable";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState(null);

  const handleSubmit = async (domain) => {
    setIsSubmitted(true);
    const ans = { [domain]: 2, hello: 3 };
    setInfo(ans);
  };

  return (
    <>
      <div>
        <Typography
          variant="h3"
          color="blue"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          Ads.txt Crawler
        </Typography>
      </div>
      <div>
        <Form onFormSubmit={handleSubmit} />
      </div>
      <div>
        {isLoading && <CircularProgress />}
        {isSubmitted && <MyTable tableInfo={info} />}
      </div>
    </>
  );
}

export default App;
