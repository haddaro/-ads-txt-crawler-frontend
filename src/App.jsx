import { useState } from "react";
import { Typography, CircularProgress } from "@mui/material";
import Form from "./components/Form";
import MyTable from "./components/MyTable";

const URL = "https://ads-txt-crawler-backend.onrender.com/advertisers?domain=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState(null);
  const [domainName, setDomainName] = useState(null);

  const getData = async (domain) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${URL}${domain}`);
      if (!response.ok) {
        throw new Error("Could not read from url");
      }
      const fetchedData = await response.json();
      console.log(fetchedData.data);
      if (fetchedData.status != "success")
        throw new Error("Could not read data");
      return fetchedData.data;
    } catch (error) {
      console.log(`Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (domain) => {
    try {
      const ans = await getData(domain);
      setInfo(ans);
      setDomainName(domain);
    } catch (error) {
      setInfo({ error: 0 });
    }
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
        {info && <MyTable tableInfo={info} domain={domainName} />}
      </div>
    </>
  );
}

export default App;
