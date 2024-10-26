"use client";

import { darkTheme, lightTheme } from "@/theme";
import {
  Container,
  CssBaseline,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  ThemeProvider,
  Typography,
  Grid,
} from "@mui/material";
import { useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface DataTableProps {
  initialData: Post[];
}

const DataTable: React.FC<DataTableProps> = ({ initialData }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const theme = darkMode ? darkTheme : lightTheme;

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const toggleTheme = () => setDarkMode(!darkMode);
  const paginatedData = initialData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ my: 4 }}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          flexDirection={{ xs: "column", sm: "row" }} // Responsive layout
        >
          <Typography variant="h4" sx={{ mb: { xs: 2, sm: 0 } }}>
            Data Table
          </Typography>
          <Grid container alignItems="center">
            <Typography variant="body1" sx={{ mr: 1 }}>
              Change Theme
            </Typography>
            <Switch
              checked={darkMode}
              onChange={toggleTheme}
              inputProps={{ "aria-label": "toggle theme" }}
              color="default"
              sx={{
                "& .MuiSwitch-thumb": {
                  backgroundColor: darkMode ? "white" : "black",
                },
                "& .MuiSwitch-track": {
                  backgroundColor: darkMode ? "#grey.800" : "#grey.400",
                },
              }}
            />
          </Grid>
        </Grid>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Body</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.body}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={initialData.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
            sx={{ display: { xs: "block", sm: "flex" } }} // Responsive pagination display
          />
        </TableContainer>
      </Container>
    </ThemeProvider>
  );
};

export { DataTable };
