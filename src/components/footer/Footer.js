import React from 'react';
import { Typography } from '@mui/material';
// import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <Typography variant="overline" display="block" gutterBottom>
        <p>&#169; Code Fellows 2021 | Created by Ryan Emmans | <a href="https://www.linkedin.com/in/ryanemmans/" target="_blank" rel="noreferrer">LinkedIn</a> | <a href="https://github.com/ryanemmans" target="_blank" rel="noreferrer">GitHub</a></p>
      </Typography>
    </footer>
  );
}

export default Footer;
