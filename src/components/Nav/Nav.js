import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import { useThemeMode } from 'hooks';

export function Nav() {
  const theme = useTheme();
  const { toggleThemeMode } = useThemeMode();

  return (
    <AppBar component="nav">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" sx={{ color: 'white'}}>GIT-ALT</Link>
        </Typography>
        <Box onClick={toggleThemeMode}>
          {theme.palette.mode === 'dark' ? (
            <IconButton aria-label="dark-mode">
              <DarkModeIcon />
            </IconButton>
          ) : (
            <IconButton
              aria-label="light-mode"
              sx={{ color: theme.palette.common.white }}
            >
              <LightModeIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
