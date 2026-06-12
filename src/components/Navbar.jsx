import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Box, 
  Container, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  useTheme, 
  useMediaQuery 
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  Close as CloseIcon, 
  School as SchoolIcon 
} from '@mui/icons-material';
import { NAV_LINKS } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isHomePage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: scrolled ? 'white' : 'transparent',
          transition: 'all 0.3s ease',
          py: { xs: 0.5, sm: scrolled ? 1 : 2 },
          color: scrolled ? 'text.primary' : 'white',
          px: { xs: 1, sm: 0 }
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 56, sm: 64 } }}>
            {/* Logo */}
            <Box 
              component="a" 
              href={isHomePage ? "#home" : "/"} 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: { xs: 0.8, sm: 1.5 }, 
                textDecoration: 'none', 
                color: 'inherit' 
              }}
            >
              <Box 
                sx={{ 
                  width: { xs: 32, sm: 40 }, 
                  height: { xs: 32, sm: 40 }, 
                  bgcolor: 'primary.main', 
                  borderRadius: 2, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}
              >
                <SchoolIcon sx={{ color: 'white', fontSize: { xs: 18, sm: 24 } }} />
              </Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700, 
                  letterSpacing: '-0.5px',
                  display: 'block',
                  fontSize: { xs: '0.75rem', sm: '1rem' },
                  lineHeight: { xs: 1, sm: 1.2 }
                }}
              >
                <Box sx={{ display: { xs: 'block', sm: 'inline' } }}>
                  Techbrain <Box component="span" sx={{ color: 'secondary.main' }}>Networks</Box>
                </Box>
                <Box 
                  component="p" 
                  sx={{
                    fontFamily: "var(--font-heading)",
                    marginTop: { xs: "2px", sm: "3px" },
                    marginLeft: { xs: "2px", sm: "4px" },
                    fontSize: { xs: "0.6rem", sm: "0.9rem" },
                    fontWeight: "500",
                    color: "var(--secondary)",
                    letterSpacing: { xs: "0.75em", sm: "0.6em" },
                    textTransform: "uppercase",
                    margin: 0,
                    padding: 0
                  }}
                >
                  Education
                </Box>
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                {NAV_LINKS.map((link) => (
                  <Typography
                    key={link.name}
                    component="a"
                    href={isHomePage ? link.href : `/${link.href}`}
                    sx={{
                      fontWeight: 600,
                      textDecoration: 'none',
                      color: 'inherit',
                      fontSize: '0.95rem',
                      '&:hover': { color: 'secondary.main' },
                      transition: 'color 0.2s',
                    }}
                  >
                    {link.name}
                  </Typography>
                ))}
                {/* <Button 
                  variant="contained" 
                  color="primary" 
                  sx={{ 
                    borderRadius: 50, 
                    px: 3,
                    boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.39)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(37, 99, 235, 0.23)',
                    }
                  }}
                >
                  Get Started
                </Button> */}
              </Box>
            )}

            {/* Mobile Menu Toggle */}
            {isMobile && (
              <IconButton 
                edge="end" 
                color="inherit" 
                aria-label="menu" 
                onClick={toggleDrawer(true)}
              >
                <MenuIcon sx={{ fontSize: 28 }} />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { width: '100%', maxWidth: 300, p: 3 }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </Box>
        <List>
          {NAV_LINKS.map((link) => (
            <ListItem 
              button 
              key={link.name} 
              component="a" 
              href={isHomePage ? link.href : `/${link.href}`}
              onClick={toggleDrawer(false)}
              sx={{ py: 2 }}
            >
              <ListItemText 
                primary={link.name} 
                primaryTypographyProps={{ 
                  variant: 'h5', 
                  fontWeight: 700,
                  textAlign: 'center'
                }} 
              />
            </ListItem>
          ))}
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Button 
              fullWidth
              variant="contained" 
              color="primary" 
              sx={{ borderRadius: 50, py: 1.5 }}
            >
              Contact Us
            </Button>
          </Box>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
