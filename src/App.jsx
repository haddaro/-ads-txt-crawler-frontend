import { useState } from "react";
import { Typography, CircularProgress } from "@mui/material";
import Form from "./components/Form";
import MyTable from "./components/MyTable";

const URL = "https://ads-txt-crawler-backend.onrender.com/advertisers?domain=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState(null);
  const [domainName, setDomainName] = useState(null);
  const [isError, setIsError] = useState(false);

  const getData = async (domain) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${URL}${domain}`);
      if (!response.ok) {
        setIsError(true);
        throw new Error("Could not read from url");
      }
      const fetchedData = await response.json();
      console.log(fetchedData.data);
      if (fetchedData.status != "success") {
        setIsError(true);
        throw new Error("Could not read data");
      }
      return fetchedData.data;
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (domain) => {
    setIsError(false);
    try {
      const ans = await getData(domain);
      setInfo(ans);
      setDomainName(domain);
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <div
      style={{ padding: "20px", minHeight: "100vh", boxSizing: "border-box" }}
    >
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
        {isError && (
          <Typography
            variant="h4"
            color="black"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            Something went wrong
          </Typography>
        )}
        {info && <MyTable tableInfo={info} domain={domainName} />}
      </div>
    </div>
  );
}

export default App;
