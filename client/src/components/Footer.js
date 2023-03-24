import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import '../pages/dashboard/Dashboard.css';


function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Clyde Childrens Hospital
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}
export default function Footer() {
    return (
        <>
        {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>
            <Typography>
                Something here to give the footer a purpose!
            </Typography>
            <Copyright />
        </Box>
        {/* End footer */}
        </>
      )
  }