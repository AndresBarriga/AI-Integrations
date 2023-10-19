import { createTheme } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[400],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

export default theme;
