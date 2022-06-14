import './App.css';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import AssetApr from './charts/AssetApr'
import AssetTvl from './charts/AssetTvl'
import Card from '@mui/material/Card';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
      <div className="App">
        <ThemeProvider theme={darkTheme}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Card variant="outlined">
                <AssetApr />
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card variant="outlined">
                <AssetTvl />
              </Card>
            </Grid>
          </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
