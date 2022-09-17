import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Grid, Typography, Divider } from "@mui/material";
import { theme, StyledInput } from "../../styles";
import { ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";

export const Filter = ({
  setSearchTerm,
  setSearchCategory
}: any) => {

  const dispatch = useDispatch();

  const inputHandler = (e: any) => {
    var lowerCase = e.target.value.toLowerCase();
    dispatch(setSearchTerm(lowerCase));
  };

  return (
    <ThemeProvider theme={theme}>
      <Typography
        variant="h3"
        align="center"
        component="h3"
        sx={{
          marginBottom: 1,
        }}
      >
        Search
      </Typography>
      <Divider
        variant="inset"
        sx={{
          borderBottomWidth: 2,
          mb: 2,
          bgcolor: "#fff",
          ml: "39%",
          mr: "39%",
        }}
      />
      <Grid container alignItems="center" spacing={3}>
        <Grid xs={12} md={8} item>
          <StyledInput
            size="small"
            id="outlined"
            variant="outlined"
            placeholder="Type to search"
            fullWidth
            onChange={inputHandler}
          />
        </Grid>
        <Grid xs={12} md={4} item>
          <ButtonGroup
            size="small"
            variant="contained"
            color="primary"
            aria-label="contained primary button group"
          >
            <Button
              sx={{
                fontSize: 12,
                textTransform: "capitalize",
              }}
              onClick={() => dispatch(setSearchCategory('All'))}
            >
              All
            </Button>
            <Button
              sx={{
                fontSize: 12,
                textTransform: "capitalize",
              }}
              onClick={() => dispatch(setSearchCategory('Important'))}
            >
              Important
            </Button>
            <Button
              sx={{
                fontSize: 12,
                textTransform: "capitalize",
              }}
              onClick={() => dispatch(setSearchCategory('Done'))}
            >
              Done
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
