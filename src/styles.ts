import { createTheme} from '@mui/material/styles';
import { styled } from '@mui/system';
import {Card, Button, TextField } from '@mui/material';


export const theme = createTheme({
    palette: {
        primary: {
            main: "#f99597",
        },
        secondary: {
            main: "#7039a3",
        },
        success: {
            main: "#0c620c",
        },
        warning: {
            main: "#aa4806",
        },
        info: {
            main: '#c1c6cf',
        }
    },

    typography: {
        h2: {
            fontSize: '2rem',
            margin: '0 auto 10px auto',
            paddingTop: '40px',
            color: "#c1c6cf",
            fontFamily: 'Roboto',
            fontWeight: 300
        },
        h3: {
            fontSize: '1.5rem',
            margin: '0 auto 10px auto',
            paddingTop: '40px',
            color: "#c1c6cf",
            fontFamily: 'Roboto',
            fontWeight: 300
        },
        h4: {
            fontSize: '1.5rem',
            color: "#c1c6cf",
            fontFamily: 'Roboto',
            fontWeight: 300
        }
    },

});

export const StyledCard = styled(Card)(({ theme }) => ({
    color: theme.palette.primary,
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#303d4e',
    borderRadius: '.5rem',
    marginBottom: '1rem',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
    fontSize: 13,
    textTransform: 'capitalize'
}))

export const StyledButtonAdd = styled(Button)(({ theme }) => ({
    width: '20%',
    fontSize: 14,
    fontWeight: 600,
    background: "-webkit-linear-gradient(45deg, #f99597 30%, #9735a2 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
}))

export const StyledInput = styled(TextField)(({ theme }) =>({
    input: {
        color: "#fff",
        fontSize: 14
    }
  }));