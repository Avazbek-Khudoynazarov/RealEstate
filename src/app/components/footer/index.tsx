import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box className="footer">
      <Container className="footer-container">
        <Grid container className="footer-grid">
          <Grid item className="footer-column">
            <Typography variant="h6" gutterBottom>
              RealEstate Korea
            </Typography>
            <Typography variant="body2" color="textSecondary">
              1234 Real Estate Street
              <br />
              Seoul, Korea
              <br />
              Phone: +82 123-456-7890
              <br />
              Email: info@realestatekorea.com
            </Typography>
          </Grid>
          <Grid item className="footer-column">
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <ul>
              <li>
                <Link href="#" color="inherit" variant="body2">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit" variant="body2">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit" variant="body2">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit" variant="body2">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item className="footer-column">
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <div className="footer-icons">
              <IconButton
                href="https://www.facebook.com"
                target="_blank"
                color="inherit"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://www.twitter.com"
                target="_blank"
                color="inherit"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                href="https://www.instagram.com"
                target="_blank"
                color="inherit"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com"
                target="_blank"
                color="inherit"
              >
                <LinkedInIcon />
              </IconButton>
            </div>
          </Grid>
        </Grid>
        <Box className="footer-bottom">
          <Typography variant="body2" color="textSecondary">
            &copy; {new Date().getFullYear()} RealEstate Korea. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
