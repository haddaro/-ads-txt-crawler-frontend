import { useState } from "react";
import { Typography, CircularProgress } from "@mui/material";
import Form from "./components/Form";
import MyTable from "./components/MyTable";

const URL = "https://ads-txt-crawler-backend.onrender.com/advertisers?domain=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState(null);
  const [domainName, setDomainName] = useState(null);
  const [domainDisplay, setDomainDisplay] = useState(null);
  const [isError, setIsError] = useState(false);
  const [responseTime, setResponseTime] = useState(0);

  const getData = async (domain) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${URL}${domain}`);
      if (!response.ok) {
        setIsError(true);
        throw new Error("Could not read from url");
      }
      const fetchedData = await response.json();
      if (fetchedData.status != "success") {
        setIsError(true);
        throw new Error("Could not read data");
      }
      setResponseTime(fetchedData.duration);
      setDomainDisplay(fetchedData.domain);
      return fetchedData.data;
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (domain) => {
    setResponseTime(0);
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
        {info && (
          <MyTable
            tableInfo={info}
            domain={domainDisplay}
            time={responseTime}
          />
        )}
      </div>
    </div>
  );
}

export default App;
