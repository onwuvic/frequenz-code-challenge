import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '@mui/material/styles';

import { useThemeMode } from 'hooks';

export function Nav() {
  const theme = useTheme();
  const { toggleThemeMode } = useThemeMode();

  return (
    <AppBar component="nav">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GIT-ALT
        </Typography>
        <Box onClick={toggleThemeMode}>
          {theme.palette.mode === 'dark' ? (
            <IconButton aria-label="dark-mode">
              <DarkModeIcon />
            </IconButton>
          ) : (
            <IconButton aria-label="light-mode">
              <LightModeIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
