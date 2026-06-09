import React, { useEffect, useState } from 'react';
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Chip,
  Paper,
  useTheme,
  alpha
} from '@mui/material';
import {
  ArrowBack as BackIcon,
  InfoOutlined as InfoIcon,
  StarBorder as StarIcon,
  ReportProblemOutlined as ProblemIcon,
  SettingsOutlined as SettingsIcon,
  HandshakeOutlined as HandshakeIcon,
  RouteOutlined as RouteIcon,
  DnsOutlined as DnsIcon,
  CodeOutlined as CodeIcon,
  SchoolOutlined as SchoolIcon,
  EmojiEventsOutlined as EventsIcon,
  ErrorOutline as WarningIcon,
  PsychologyOutlined as PsychologyIcon,
  LanguageOutlined as LanguageIcon,
  CheckCircleOutline as CheckIcon
} from '@mui/icons-material';
import { PRODUCT_DETAILS } from '../data/productDetailsData';

const sectionIcons = {
  "Introduction": <InfoIcon color="primary" />,
  "Key Features": <StarIcon color="primary" />,
  "Problem & Solution": <ProblemIcon color="primary" />,
  "Core Functionalities": <SettingsIcon color="primary" />,
  "How We Deliver Value": <HandshakeIcon color="primary" />,
  "Workflow / The Process (Step-by-Step)": <RouteIcon color="primary" />,
  "Technical Architecture": <DnsIcon color="primary" />,
  "Technologies Used": <CodeIcon color="primary" />,
  "Real-World Applications": <SchoolIcon color="primary" />,
  "Benefits / The Advantage": <EventsIcon color="primary" />,
  "Challenges & Limitations": <WarningIcon color="primary" />,
  "Future Scope": <PsychologyIcon color="primary" />,
  "Industry Impact": <LanguageIcon color="primary" />,
  "Conclusion": <CheckIcon color="primary" />
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const [activeSection, setActiveSection] = useState("Introduction");

  const product = PRODUCT_DETAILS.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <Container sx={{ py: 15, textAlign: 'center' }}>
        <Typography variant="h4" color="error" gutterBottom>
          Product Not Found
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          The product you are looking for does not exist or has been moved.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/"
          startIcon={<BackIcon />}
          sx={{ borderRadius: 50 }}
        >
          Back to Home
        </Button>
      </Container>
    );
  }

  const handleSectionClick = (sectionName) => {
    setActiveSection(sectionName);
    const element = document.getElementById(sectionName.replace(/\s+/g, '-'));
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const sectionsList = Object.keys(product.sections);

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 10 }}>
      {/* Top Header Navigation */}
      <Box
        sx={{
          py: 3,
          bgcolor: 'white',
          borderBottom: '1px solid',
          borderColor: 'grey.100',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)'
        }}
      >
        <Container maxWidth="xl">
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid>
              <Button
                component={RouterLink}
                to="/"
                startIcon={<BackIcon />}
                sx={{
                  color: 'text.primary',
                  fontWeight: 700,
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: 'transparent',
                    transform: 'translateX(-4px)'
                  }
                }}
              >
                Back to Home
              </Button>
            </Grid>
            <Grid sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                {product.category} &bull; ID: {String(product.id).padStart(3, '0')}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Main Layout Container */}
      <Container maxWidth="xl" sx={{ mt: 6 }}>
        {/* Banner Card */}
        <Card
          elevation={0}
          sx={{
            borderRadius: 6,
            overflow: 'hidden',
            position: 'relative',
            mb: 6,
            height: { xs: 300, md: 450 },
            boxShadow: '0 20px 45px rgba(0,0,0,0.05)'
          }}
        >
          <CardMedia
            component="img"
            image={product.image}
            alt={product.title}
            sx={{ height: '100%', objectFit: 'cover' }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 20%, rgba(15, 23, 42, 0.2) 80%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              p: { xs: 4, md: 6 },
              color: 'white'
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Chip
                label={product.category}
                color="secondary"
                size="small"
                sx={{ fontWeight: 800, borderRadius: 1.5, px: 1, textTransform: 'uppercase', fontSize: '0.75rem', mr: 2 }}
              />
              <Chip
                label={`ID: ${String(product.id).padStart(3, '0')}`}
                variant="outlined"
                size="small"
                sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)', fontWeight: 600, borderRadius: 1.5 }}
              />
            </Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', md: '3.5rem' },
                fontWeight: 800,
                lineHeight: 1.2,
                mb: 2,
                textShadow: '0 4px 12px rgba(0,0,0,0.3)'
              }}
            >
              {product.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.8)',
                fontWeight: 400,
                maxWidth: 800,
                fontSize: { xs: '1rem', md: '1.2rem' },
                lineHeight: 1.6
              }}
            >
              {product.description}
            </Typography>
          </Box>
        </Card>

        {/* Content Layout */}
        <Grid container spacing={5}>
          {/* Main Details Content - Full Width */}
          <Grid size={{ xs: 12 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {sectionsList.map((sectionName) => {
                const points = product.sections[sectionName] || [];
                return (
                  <Paper
                    key={sectionName}
                    id={sectionName.replace(/\s+/g, '-')}
                    elevation={0}
                    sx={{
                      p: { xs: 4, md: 5 },
                      borderRadius: 5,
                      border: '1px solid',
                      borderColor: 'grey.100',
                      bgcolor: 'white',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'primary.light',
                        boxShadow: '0 10px 30px rgba(37,99,235,0.03)'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 3,
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {sectionIcons[sectionName] || <InfoIcon />}
                      </Box>
                      <Typography variant="h4" sx={{ fontWeight: 800, fontSize: { xs: '1.5rem', md: '1.75rem' } }}>
                        {sectionName}
                      </Typography>
                    </Box>
                    <Divider sx={{ mb: 4 }} />
                    <List sx={{ p: 0 }}>
                      {points.map((point, index) => (
                        <ListItem
                          key={index}
                          alignItems="flex-start"
                          disableGutters
                          sx={{
                            py: 1.5,
                            borderBottom: index < points.length - 1 ? '1px dashed' : 'none',
                            borderColor: 'grey.50'
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                            <Box
                              sx={{
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                bgcolor: 'secondary.main'
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={point}
                            primaryTypographyProps={{
                              fontSize: '1.05rem',
                              lineHeight: 1.6,
                              color: 'text.primary',
                              fontWeight: 500
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                );
              })}
            </Box>

            {/* Bottom Call to Action Card */}
            <Box
              sx={{
                mt: 6,
                p: { xs: 5, md: 8 },
                borderRadius: 5,
                bgcolor: 'primary.main',
                color: 'white',
                textAlign: 'center',
                boxShadow: '0 20px 40px rgba(37, 99, 235, 0.25)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
                Interested in this solution?
              </Typography>
              <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, mb: 4, maxWidth: 600, mx: 'auto' }}>
                Schedule a customized live demo with our engineers to see how we can adapt this tool to your institution.
              </Typography>
              <Button
                variant="contained"
                component={RouterLink}
                to="/#contact"
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  fontWeight: 700,
                  px: 5,
                  py: 1.8,
                  borderRadius: 50,
                  fontSize: '1rem',
                  '&:hover': {
                    bgcolor: 'grey.100',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Contact Specialist
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductDetail;
