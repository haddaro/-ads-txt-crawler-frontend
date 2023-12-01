import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const MyTable = ({ tableInfo, domain }) => {
  const msg = `We have found ${
    Object.keys(tableInfo).length
  } advertisers in the ad.txt file of ${domain}`;
  return (
    <>
      <Paper
        style={{ marginTop: "50px", padding: "16px", position: "relative" }}
        elevation={2}
      >
        <Typography variant="h6" gutterBottom color="primary">
          {msg}
        </Typography>
      </Paper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>Domain</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="right">
                Count
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(tableInfo).map((key) => (
              <TableRow
                key={key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {key}
                </TableCell>
                <TableCell align="right">{tableInfo[key]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MyTable;
