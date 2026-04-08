import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  TextField, 
  MenuItem, 
  Button, 
  useTheme, 
  alpha,
  Paper,
  Stack
} from '@mui/material';
import { LocationOn as MapPin, Phone, Mail, Language as Globe, Send } from '@mui/icons-material';

const Contact = () => {
  const theme = useTheme();

  const interests = [
    { value: 'ai', label: 'AI Learning Platforms' },
    { value: 'vr', label: 'Virtual Reality Tools' },
    { value: 'analytics', label: 'Institutional Analytics' },
    { value: 'custom', label: 'Custom Software Solutions' },
  ];

  return (
    <Box 
      id="contact" 
      component="section" 
      sx={{ 
        py: { xs: 10, md: 15 }, 
        bgcolor: 'background.default', 
        position: 'relative', 
        overflow: 'hidden' 
      }}
    >
      {/* Decorative Circles */}
      <Box 
        sx={{ 
          position: 'absolute', 
          top: 0, 
          right: 0, 
          width: 400, 
          height: 400, 
          bgcolor: alpha(theme.palette.primary.main, 0.05), 
          borderRadius: '50%', 
          filter: 'blur(80px)', 
          transform: 'translate(50%, -50%)' 
        }} 
      />
      <Box 
        sx={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          width: 400, 
          height: 400, 
          bgcolor: alpha(theme.palette.secondary.main, 0.05), 
          borderRadius: '50%', 
          filter: 'blur(80px)', 
          transform: 'translate(-50%, 50%)' 
        }} 
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 10 }}>
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
            Get In Touch
          </Box>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Connect with Our <Box component="span" sx={{ color: 'primary.main', fontStyle: 'italic' }}>Global</Box> Team
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
            Your all-in-one stop for digital products. We offer both digital and physical 
            products that meet our customer's requirements.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Contact Info Cards */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Stack spacing={4}>
              <Paper 
                elevation={0}
                sx={{ 
                  p: 4, 
                  borderRadius: 6, 
                  border: '1px solid', 
                  borderColor: 'grey.100', 
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                    borderColor: 'primary.light',
                    '& .icon-box': { transform: 'rotate(12deg)' }
                  }
                }}
              >
                <Box 
                  className="icon-box"
                  sx={{ 
                    width: 48, 
                    height: 48, 
                    bgcolor: 'primary.main', 
                    borderRadius: 3, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'white', 
                    mb: 4,
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <MapPin sx={{ fontSize: 24 }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>India Office</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  6/12 Papa vaikal Street, Ayyampettai Post,<br />
                  Papanasam Taluk, Thanjavur 614201,<br />
                  Tamilnadu, India.
                </Typography>
              </Paper>

              <Paper 
                elevation={0}
                sx={{ 
                  p: 4, 
                  borderRadius: 6, 
                  border: '1px solid', 
                  borderColor: 'grey.100', 
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                    borderColor: 'secondary.light',
                    '& .icon-box': { transform: 'rotate(12deg)' }
                  }
                }}
              >
                <Box 
                  className="icon-box"
                  sx={{ 
                    width: 48, 
                    height: 48, 
                    bgcolor: 'secondary.main', 
                    borderRadius: 3, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'white', 
                    mb: 4,
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <MapPin sx={{ fontSize: 24 }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>UK Office</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  71-75 Shelton Street, Covent Garden,<br />
                  London, WC2H 9JQ, United Kingdom.
                </Typography>
              </Paper>

              <Paper 
                elevation={0}
                sx={{ 
                  p: 4, 
                  borderRadius: 6, 
                  border: '1px solid', 
                  borderColor: 'grey.100', 
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                    borderColor: 'accent.light',
                    '& .icon-box': { transform: 'rotate(12deg)' }
                  }
                }}
              >
                <Box 
                  className="icon-box"
                  sx={{ 
                    width: 48, 
                    height: 48, 
                    bgcolor: 'accent.main', 
                    borderRadius: 3, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'white', 
                    mb: 4,
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <Globe sx={{ fontSize: 24 }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>Direct Contact</Typography>
                <Stack spacing={2}>
                  <Box 
                    component="a" 
                    href="tel:+918754906714" 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 2, 
                      color: 'text.secondary', 
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      '&:hover': { color: 'primary.main' } 
                    }}
                  >
                    <Phone sx={{ fontSize: 18 }} /> +91 8754906714
                  </Box>
                  <Box 
                    component="a" 
                    href="mailto:contact@techbrainnetworks.com" 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 2, 
                      color: 'text.secondary', 
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      '&:hover': { color: 'primary.main' } 
                    }}
                  >
                    <Mail sx={{ fontSize: 18 }} /> contact@techbrainnetworks.com
                  </Box>
                </Stack>
              </Paper>
            </Stack>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Paper 
              elevation={0}
              sx={{ 
                p: { xs: 5, md: 8 }, 
                borderRadius: 10, 
                border: '1px solid', 
                borderColor: 'grey.100', 
                boxShadow: '0 30px 60px -12px rgba(0,0,0,0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <Box 
                sx={{ 
                  position: 'absolute', 
                  top: 0, 
                  right: 0, 
                  width: 140, 
                  height: 140, 
                  bgcolor: alpha(theme.palette.primary.main, 0.05), 
                  borderRadius: '50%', 
                  transform: 'translate(40%, -40%)' 
                }} 
              />
              
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 4 }}>
                Send Us a <Box component="span" sx={{ color: 'primary.main', fontStyle: 'italic' }}>Message</Box>
              </Typography>
              
              <Box component="form" noValidate>
                <Grid container spacing={4}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1, ml: 1 }}>Full Name</Typography>
                    <TextField 
                      fullWidth 
                      placeholder="John Doe" 
                      variant="outlined" 
                      sx={{ 
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 4,
                          bgcolor: 'background.default',
                          '& fieldset': { borderColor: 'grey.200' },
                          '&:hover fieldset': { borderColor: 'primary.light' },
                          '&.Mui-focused fieldset': { borderColor: 'primary.main', borderWidth: 2 }
                        }
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1, ml: 1 }}>Email Address</Typography>
                    <TextField 
                      fullWidth 
                      placeholder="john@example.com" 
                      variant="outlined" 
                      sx={{ 
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 4,
                          bgcolor: 'background.default',
                          '& fieldset': { borderColor: 'grey.200' },
                          '&:hover fieldset': { borderColor: 'primary.light' },
                          '&.Mui-focused fieldset': { borderColor: 'primary.main', borderWidth: 2 }
                        }
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1, ml: 1 }}>Select Interest</Typography>
                    <TextField 
                      select
                      fullWidth 
                      defaultValue="ai"
                      variant="outlined" 
                      sx={{ 
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 4,
                          bgcolor: 'background.default',
                          '& fieldset': { borderColor: 'grey.200' },
                          '&:hover fieldset': { borderColor: 'primary.light' },
                          '&.Mui-focused fieldset': { borderColor: 'primary.main', borderWidth: 2 }
                        }
                      }}
                    >
                      {interests.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1, ml: 1 }}>Your Message</Typography>
                    <TextField 
                      fullWidth 
                      multiline
                      rows={4}
                      placeholder="How can we help you power up your business?" 
                      variant="outlined" 
                      sx={{ 
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 4,
                          bgcolor: 'background.default',
                          '& fieldset': { borderColor: 'grey.200' },
                          '&:hover fieldset': { borderColor: 'primary.light' },
                          '&.Mui-focused fieldset': { borderColor: 'primary.main', borderWidth: 2 }
                        }
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button 
                      variant="contained" 
                      color="primary"
                      endIcon={<Send sx={{ fontSize: 20 }} />}
                      sx={{ 
                        px: 6, 
                        py: 2, 
                        borderRadius: 4, 
                        fontWeight: 800, 
                        fontSize: '1.1rem',
                        boxShadow: '0 10px 20px rgba(37, 99, 235, 0.3)',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 15px 30px rgba(37, 99, 235, 0.4)'
                        }
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
