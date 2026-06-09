import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  useTheme, 
  alpha 
} from '@mui/material';
import { Layers as LayersIcon } from '@mui/icons-material';
import { INDUSTRIES } from '../constants';

const Industries = () => {
  const theme = useTheme();

  return (
    <Box 
      id="industries" 
      component="section" 
      sx={{ 
        py: { xs: 10, md: 15 }, 
        bgcolor: 'background.default', 
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
              bgcolor: alpha(theme.palette.primary.main, 0.1), 
              borderRadius: 50, 
              color: 'primary.main', 
              fontWeight: 700, 
              fontSize: '0.75rem', 
              textTransform: 'uppercase', 
              letterSpacing: 2, 
              mb: 3 
            }}
          >
            Cross-Sector Innovation
          </Box>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Industries We <Box component="span" sx={{ color: 'primary.main', fontStyle: 'italic' }}>Transform</Box>
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
            Our technological DNA spans across diverse domains, 
            empowering global businesses and communities.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {INDUSTRIES.map((industry, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={index}>
              <Box 
                sx={{ 
                  p: 3, 
                  bgcolor: 'white', 
                  borderRadius: 4, 
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', 
                  border: '1px solid transparent', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  textAlign: 'center', 
                  gap: 2, 
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  height: '100%',
                  minHeight: 140,
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
                    borderColor: 'primary.main',
                    '& .icon-box': {
                      bgcolor: 'primary.main',
                      color: 'white',
                      transform: 'scale(1.1)',
                    },
                    '& .industry-name': {
                      color: 'primary.main',
                    }
                  }
                }}
              >
                <Box 
                  className="icon-box"
                  sx={{ 
                    width: 48, 
                    height: 48, 
                    bgcolor: alpha(theme.palette.primary.main, 0.05), 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'primary.main', 
                    transition: 'all 0.3s ease' 
                  }}
                >
                  <LayersIcon sx={{ fontSize: 20 }} />
                </Box>
                <Typography 
                  variant="subtitle2" 
                  className="industry-name"
                  sx={{ 
                    fontWeight: 700, 
                    fontSize: '0.8rem', 
                    lineHeight: 1.3,
                    transition: 'color 0.3s ease'
                  }}
                >
                  {industry}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Industries;
