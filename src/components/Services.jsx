import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  useTheme, 
  alpha 
} from '@mui/material';
import { SERVICES } from '../constants';

const Services = () => {
  const theme = useTheme();

  return (
    <Box 
      id="services" 
      component="section" 
      sx={{ 
        py: { xs: 10, md: 15 }, 
        bgcolor: 'white', 
        position: 'relative' 
      }}
    >
      <Container maxWidth={false}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Box 
            sx={{ 
              display: 'inline-block', 
              px: 3, 
              py: 1, 
              bgcolor: alpha(theme.palette.accent.main, 0.1), 
              borderRadius: 50, 
              color: 'accent.main', 
              fontWeight: 700, 
              fontSize: '0.75rem', 
              textTransform: 'uppercase', 
              letterSpacing: 2, 
              mb: 3 
            }}
          >
            Core Expertise
          </Box>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Our specialized <Box component="span" sx={{ color: 'accent.main' }}>Services</Box>
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              maxWidth: 700, 
              mx: 'auto', 
              color: 'text.secondary', 
              fontSize: '1.1rem',
              lineHeight: 1.7
            }}
          >
            We take pride in being an innovative organization where the digital 
            revolution thrives and new advances are always on the horizon.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {SERVICES.map((service, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
              <Box 
                sx={{ 
                  position: 'relative', 
                  height: 400, 
                  borderRadius: 8, 
                  overflow: 'hidden', 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  '&:hover': {
                    '& img': {
                      transform: 'scale(1.1)',
                    },
                    '& .content-box': {
                      transform: 'translateY(-16px)',
                    },
                    '& .description': {
                      opacity: 1,
                    },
                    '& .hover-line': {
                      width: 80,
                    },
                    '& .arrow': {
                      transform: 'translateX(8px)',
                    }
                  }
                }}
              >
                {/* Background Image */}
                <Box 
                  component="img"
                  src={service.image}
                  alt={service.title}
                  sx={{ 
                    position: 'absolute', 
                    inset: 0, 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    transition: 'transform 0.7s ease' 
                  }}
                />
                
                {/* Gradient Overlay */}
                <Box 
                  sx={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)' 
                  }} 
                />
                
                {/* Content */}
                <Box 
                  className="content-box"
                  sx={{ 
                    position: 'absolute', 
                    inset: 0, 
                    p: 4, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'flex-end',
                    transition: 'transform 0.5s ease'
                  }}
                >
                  <Box 
                    className="hover-line"
                    sx={{ 
                      width: 48, 
                      height: 4, 
                      bgcolor: 'accent.main', 
                      mb: 2, 
                      transition: 'width 0.5s ease' 
                    }} 
                  />
                  <Typography variant="h5" sx={{ fontWeight: 800, color: 'white', mb: 2 }}>
                    {service.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    className="description"
                    sx={{ 
                      color: 'rgba(255,255,255,0.8)', 
                      lineHeight: 1.6, 
                      opacity: 0, 
                      transition: 'opacity 0.5s ease',
                      mb: 3
                    }}
                  >
                    {service.description}
                  </Typography>
                  <Box 
                    className="arrow"
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1, 
                      color: 'accent.main', 
                      fontWeight: 800, 
                      fontSize: '0.8rem', 
                      textTransform: 'uppercase', 
                      letterSpacing: 2,
                      transition: 'transform 0.5s ease'
                    }}
                  >
                    Learn More <Typography component="span" sx={{ fontSize: '1.2rem' }}>→</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
