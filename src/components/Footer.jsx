import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Link, 
  Stack, 
  IconButton, 
  useTheme, 
  alpha 
} from '@mui/material';
import { 
  Facebook as FacebookIcon, 
  Twitter as TwitterIcon, 
  LinkedIn as LinkedInIcon, 
  Instagram as InstagramIcon,
  Mail, 
  Phone, 
  LocationOn,
  Rocket
} from '@mui/icons-material';
import { NAV_LINKS } from '../constants';

const Footer = () => {
  const theme = useTheme();

  const socialLinks = [
    { icon: <FacebookIcon sx={{ fontSize: 18 }} />, href: '#' },
    { icon: <TwitterIcon sx={{ fontSize: 18 }} />, href: '#' },
    { icon: <LinkedInIcon sx={{ fontSize: 18 }} />, href: '#' },
    { icon: <InstagramIcon sx={{ fontSize: 18 }} />, href: '#' },
  ];

  const quickLinks = NAV_LINKS;

  const solutions = [
    { name: 'Adaptive Learning', href: '#products' },
    { name: 'VR Classroom', href: '#products' },
    { name: 'Student Analytics', href: '#products' },
    { name: 'School ERP', href: '#products' },
    { name: 'Custom Development', href: '#services' },
  ];

  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: '#1E293B', 
        color: 'white', 
        pt: 10, 
        pb: 5 
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} sx={{ mb: 8 }}>
          {/* Brand Column */}
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Stack spacing={3}>
              <Box 
                component="a" 
                href="#home" 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1.5, 
                  textDecoration: 'none', 
                  color: 'inherit',
                  '&:hover .logo-box': { transform: 'rotate(12deg)' }
                }}
              >
                <Box 
                  className="logo-box"
                  sx={{ 
                    width: 40, 
                    height: 40, 
                    bgcolor: 'primary.main', 
                    borderRadius: 2, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <Rocket sx={{ color: 'white', fontSize: 24 }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Techbrain <Box component="span" sx={{ color: 'secondary.main' }}>Networks</Box>
                </Typography>
              </Box>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'rgba(255,255,255,0.6)', 
                  lineHeight: 1.7, 
                  maxWidth: 260 
                }}
              >
                Empowering global education through cutting-edge technology. 
                Starting in 2027, our solutions will reach 30 countries.
              </Typography>
              <Stack direction="row" spacing={1.5}>
                {socialLinks.map((social, index) => (
                  <IconButton 
                    key={index}
                    component="a"
                    href={social.href}
                    sx={{ 
                      width: 40, 
                      height: 40, 
                      bgcolor: 'rgba(255,255,255,0.1)', 
                      color: 'white',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: 'primary.main',
                        transform: 'translateY(-4px)'
                      }
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Quick Links Column */}
          <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 700, 
                mb: 4, 
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 40,
                  height: 3,
                  bgcolor: 'primary.main'
                }
              }}
            >
              Quick Links
            </Typography>
            <Stack spacing={2}>
              {quickLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  sx={{ 
                    color: 'rgba(255,255,255,0.7)', 
                    textDecoration: 'none', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1.5,
                    fontSize: '0.9rem',
                    transition: 'all 0.2s ease',
                    '&:hover': { color: 'primary.main', pl: 1 }
                  }}
                >
                  <Box sx={{ width: 4, height: 4, bgcolor: 'primary.main', borderRadius: '50%' }} />
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Solutions Column */}
          <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 700, 
                mb: 4, 
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 40,
                  height: 3,
                  bgcolor: 'secondary.main'
                }
              }}
            >
              Solutions
            </Typography>
            <Stack spacing={2}>
              {solutions.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  sx={{ 
                    color: 'rgba(255,255,255,0.7)', 
                    textDecoration: 'none', 
                    fontSize: '0.9rem',
                    transition: 'all 0.2s ease',
                    '&:hover': { color: 'primary.main', pl: 1 }
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Contact Column */}
          <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 700, 
                mb: 4, 
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 40,
                  height: 3,
                  bgcolor: 'accent.main'
                }
              }}
            >
              Contact Info
            </Typography>
            <Stack spacing={3}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <LocationOn sx={{ fontSize: 20, color: 'primary.main' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                  6/12 Papa vaikal Street, Thanjavur, India.
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Phone sx={{ fontSize: 20, color: 'primary.main' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  +91 8754906714
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Mail sx={{ fontSize: 20, color: 'primary.main' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  contact@techbrainnetworks.com
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box 
          sx={{ 
            pt: 4, 
            borderTop: '1px solid rgba(255,255,255,0.1)', 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            gap: 3 
          }}
        >
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
            © 2026 Techbrain Networks. All Rights Reserved.
          </Typography>
          <Stack direction="row" spacing={4}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((text) => (
              <Link 
                key={text} 
                href="#" 
                sx={{ 
                  color: 'rgba(255,255,255,0.5)', 
                  textDecoration: 'none', 
                  fontSize: '0.75rem',
                  transition: 'color 0.2s',
                  '&:hover': { color: 'white' } 
                }}
              >
                {text}
              </Link>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
