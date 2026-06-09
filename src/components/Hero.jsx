import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import bg from "../../public/images/education_background.jpg"

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        color: 'white',
      }}
    >
      {/* Background Image with Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'transform 10s ease',
          '&:hover': {
            transform: 'scale(1.1)',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(to right, ${theme.palette.primary.main}CC, ${theme.palette.secondary.main}CC)`,
            mixBlendMode: 'multiply',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.4)',
          }
        }}
      />

      {/* Content */}
      <Container maxWidth={false} sx={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <Box>
          <Box
            sx={{
              display: 'inline-block',
              px: 3,
              py: 0.5,
              bgcolor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(8px)',
              borderRadius: 50,
              fontWeight: 600,
              fontSize: '0.875rem',
              mb: 4
            }}
          >
            Revolutionizing Modern Classrooms
          </Box>
          <Typography
            variant={isMobile ? 'h3' : 'h1'}
            sx={{
              fontWeight: 800,
              mb: 3,
              lineHeight: 1.1,
              textShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}
          >
            Smart Digital <Box component="span" sx={{ color: 'secondary.light' }}>Learning</Box> Solutions
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 6,
              fontWeight: 400,
              opacity: 0.9,
              maxWidth: 700,
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Empowering Education Through Technology. Over 480 innovative products
            spanning 24 industries designed for the future of learning.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', gap: 3 }}>
            <Button
              variant="contained"
              color="primary"
              component="a"
              href="#products"
              endIcon={<ChevronRightIcon sx={{ fontSize: 20 }} />}
              sx={{
                borderRadius: 50,
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 700,
                boxShadow: '0 10px 20px rgba(37, 99, 235, 0.4)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 15px 30px rgba(37, 99, 235, 0.5)',
                }
              }}
            >
              Explore Products
            </Button>

            <Button
              variant="outlined"
              component="a"
              href="#contact"
              sx={{
                borderRadius: 50,
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.5)',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'translateY(-4px)',
                }
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Decorative Wave */}
      <Box
        sx={{
          position: 'absolute',
          bottom: -1,
          left: 0,
          width: '100%',
          lineHeight: 0,
          overflow: 'hidden'
        }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{
            position: 'relative',
            display: 'block',
            width: '120%',
            height: 60,
            color: '#F8FAFC',
            fill: 'currentColor'
          }}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.05,120,113.58,126,170.47,114.34c38.16-7.82,75.05-22.3,109.11-39.63,13.78-7,27.27-14.39,41.81-20.27Z"></path>
        </svg>
      </Box>
    </Box>
  );
};

export default Hero;
