import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Button, 
  useTheme, 
  alpha,
  Paper,
  Chip
} from '@mui/material';
import { 
  Work as BriefcaseIcon, 
  ChevronRight as ChevronRightIcon, 
  CheckCircle as CheckCircleIcon 
} from '@mui/icons-material';
import { CAREERS } from '../constants';

const Careers = () => {
  const theme = useTheme();

  return (
    <Box 
      id="careers" 
      component="section" 
      sx={{ 
        py: { xs: 10, md: 15 }, 
        bgcolor: 'white', 
        position: 'relative' 
      }}
    >
      <Container maxWidth="lg">
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
            Join Our Team
          </Box>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Build the Future of <Box component="span" sx={{ color: 'primary.main', fontStyle: 'italic' }}>Education</Box>
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
            We are looking for passionate innovators to help us revolutionize technology 
            across 24 industries and impact lives in 30 countries.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {CAREERS.map((job, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <Paper 
                elevation={0}
                sx={{ 
                  p: 4, 
                  bgcolor: theme.palette.background.default, 
                  borderRadius: 6, 
                  border: '1px solid transparent', 
                  transition: 'all 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    bgcolor: 'white',
                    borderColor: 'rgba(37, 99, 235, 0.2)',
                    boxShadow: '0 25px 50px -12px rgba(37, 99, 235, 0.15)',
                    '& .icon-box': {
                      bgcolor: 'primary.main',
                      color: 'white',
                      transform: 'rotate(6deg)',
                    },
                    '& .job-title': {
                      color: 'primary.main',
                    },
                    '& .apply-btn': {
                      bgcolor: 'primary.main',
                      color: 'white',
                      borderColor: 'transparent',
                    }
                  }
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 4 }}>
                  <Box 
                    className="icon-box"
                    sx={{ 
                      width: 56, 
                      height: 56, 
                      bgcolor: alpha(theme.palette.primary.main, 0.1), 
                      color: 'primary.main', 
                      borderRadius: 4, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      transition: 'all 0.3s ease' 
                    }}
                  >
                    <BriefcaseIcon sx={{ fontSize: 28 }} />
                  </Box>
                  <Box sx={{ display: 'flex', gap: 0.5 }}>
                    {[0, 1, 2].map((i) => (
                      <Box key={i} sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: alpha(theme.palette.primary.main, 0.2) }} />
                    ))}
                  </Box>
                </Box>

                <Typography 
                  variant="h5" 
                  className="job-title"
                  sx={{ 
                    fontWeight: 800, 
                    mb: 3, 
                    lineHeight: 1.3,
                    transition: 'color 0.3s ease'
                  }}
                >
                  {job.title}
                </Typography>

                <Box sx={{ mb: 4, flexGrow: 1 }}>
                  <Typography variant="overline" sx={{ fontWeight: 800, color: 'text.secondary', letterSpacing: 1.5, display: 'block', mb: 2 }}>
                    Recommended Skills
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {job.skill.split(',').map((skill, sIndex) => (
                      <Chip 
                        key={sIndex}
                        icon={<CheckCircleIcon sx={{ fontSize: 10 }} />}
                        label={skill.trim()}
                        sx={{ 
                          height: 24, 
                          fontSize: '0.65rem', 
                          fontWeight: 800, 
                          bgcolor: 'white', 
                          color: 'primary.main', 
                          border: '1px solid',
                          borderColor: alpha(theme.palette.primary.main, 0.1),
                          '& .MuiChip-icon': { ml: 1, color: 'inherit' },
                          transition: 'border-color 0.3s ease',
                          '.MuiPaper-root:hover &': {
                            borderColor: alpha(theme.palette.primary.main, 0.3)
                          }
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                <Button 
                  className="apply-btn"
                  variant="outlined" 
                  fullWidth
                  endIcon={<ChevronRightIcon sx={{ fontSize: 18 }} />}
                  sx={{ 
                    borderRadius: 3, 
                    py: 1.5, 
                    fontWeight: 800, 
                    color: 'primary.main', 
                    borderColor: alpha(theme.palette.primary.main, 0.2), 
                    bgcolor: 'white',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Apply Now
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Global Impact CTA Card */}
        <Box 
          sx={{ 
            mt: 12, 
            p: { xs: 6, md: 10 }, 
            borderRadius: 8, 
            background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`, 
            color: 'white', 
            textAlign: 'center', 
            position: 'relative', 
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(37, 99, 235, 0.25)'
          }}
        >
          <Box 
            sx={{ 
              position: 'absolute', 
              top: 0, 
              right: 0, 
              width: 260, 
              height: 260, 
              bgcolor: 'rgba(255,255,255,0.1)', 
              borderRadius: '50%', 
              transform: 'translate(40%, -40%)', 
              filter: 'blur(40px)',
              opacity: 0.5
            }} 
          />
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, position: 'relative', zIndex: 1 }}>
            Starting in 2027, our solutions will reach 30 countries.
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'rgba(255,255,255,0.8)', 
              maxWidth: 700, 
              mx: 'auto', 
              fontWeight: 400,
              fontSize: '1.2rem',
              position: 'relative', 
              zIndex: 1 
            }}
          >
            Be part of a global impact. Our mission is to make advanced technology 
            accessible to all, creating a brighter future for humanity.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Careers;
