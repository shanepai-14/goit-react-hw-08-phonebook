import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <AppBar position="static" color="success">
    <Toolbar>
      <Box sx={{ flexGrow: 1 }}>
        <Button component={Link} to="/goit-react-hw-08-phonebook" color="inherit">Home</Button>
        <Button component={Link} to="/goit-react-hw-08-phonebook/register" color="inherit">Register</Button>
        <Button component={Link} to="/goit-react-hw-08-phonebook/login" color="inherit">Login</Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navigation;
