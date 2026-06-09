import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Button, 
  IconButton, 
  useTheme, 
  alpha 
} from '@mui/material';
import { OpenInNew as ExternalLink, ArrowForward as ArrowRight } from '@mui/icons-material';
import { PRODUCTS } from '../constants';
import { Link } from 'react-router-dom';

const ProductSection = () => {
  const theme = useTheme();

  return (
    <Box 
      id="products" 
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
              bgcolor: alpha(theme.palette.secondary.main, 0.1), 
              borderRadius: 50, 
              color: 'secondary.main', 
              fontWeight: 700, 
              fontSize: '0.75rem', 
              textTransform: 'uppercase', 
              letterSpacing: 2, 
              mb: 3 
            }}
          >
            Innovative Tech Portfolio
          </Box>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Our Education Technology <Box component="span" sx={{ color: 'secondary.main' }}>Products</Box>
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
            Revolutionizing the future of learning with 20 flagship digital solutions 
            designed to empower students and educators worldwide.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {PRODUCTS.map((product) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={product.id}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  borderRadius: 4,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: '1px solid',
                  borderColor: 'grey.100',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    borderColor: 'primary.light',
                    '& .product-image': {
                      transform: 'scale(1.1)',
                    },
                    '& .hover-overlay': {
                      opacity: 1,
                    },
                    '& .hover-line': {
                      width: '100%',
                    }
                  }
                }}
              >
                {/* Product Image */}
                <Box sx={{ position: 'relative', height: 220, overflow: 'hidden' }}>
                  <CardMedia
                    className="product-image"
                    component="img"
                    image={product.image}
                    alt={product.title}
                    sx={{ 
                      height: '100%', 
                      transition: 'transform 0.6s ease' 
                    }}
                  />
                  <Box 
                    className="hover-overlay"
                    sx={{ 
                      position: 'absolute', 
                      inset: 0, 
                      bgcolor: 'rgba(0,0,0,0.3)', 
                      opacity: 0, 
                      transition: 'opacity 0.3s ease' 
                    }} 
                  />
                  <Box 
                    sx={{ 
                      position: 'absolute', 
                      top: 16, 
                      right: 16, 
                      bgcolor: 'rgba(255,255,255,0.9)', 
                      backdropFilter: 'blur(4px)', 
                      px: 1.5, 
                      py: 0.5, 
                      borderRadius: 1, 
                      fontSize: '0.7rem', 
                      fontWeight: 800, 
                      color: 'primary.main', 
                      textTransform: 'uppercase' 
                    }}
                  >
                    {product.category}
                  </Box>
                </Box>

                {/* Product Info */}
                <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 700, 
                      mb: 1.5, 
                      lineHeight: 1.3,
                      transition: 'color 0.2s ease',
                      '.MuiCard-root:hover &': { color: 'primary.main' }
                    }}
                  >
                    {product.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary', 
                      lineHeight: 1.6,
                      mb: 3,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {product.description}
                  </Typography>
                  
                  <Box sx={{ mt: 'auto', pt: 2, borderTop: '1px solid', borderColor: 'grey.50', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Button 
                      component={Link}
                      to={`/product/${product.id}`}
                      size="small"
                      color="primary"
                      endIcon={<ArrowRight sx={{ fontSize: 16 }} />}
                      sx={{ 
                        fontWeight: 700, 
                        p: 0, 
                        minWidth: 0,
                        '&:hover': { bgcolor: 'transparent', gap: 0.5 } 
                      }}
                    >
                      Learn More
                    </Button>
                    <IconButton 
                      component={Link}
                      to={`/product/${product.id}`}
                      size="small" 
                      sx={{ 
                        bgcolor: alpha(theme.palette.primary.main, 0.05), 
                        color: 'primary.main',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: 'primary.main',
                          color: 'white',
                        }
                      }}
                    >
                      <ExternalLink sx={{ fontSize: 14 }} />
                    </IconButton>
                  </Box>
                </CardContent>

                {/* Hover Highlight Line */}
                <Box 
                  className="hover-line"
                  sx={{ 
                    position: 'absolute', 
                    bottom: 0, 
                    left: 0, 
                    height: 4, 
                    bgcolor: 'primary.main', 
                    width: 0, 
                    transition: 'width 0.4s ease' 
                  }} 
                />
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Global Impact CTA Card */}
        <Box 
          sx={{ 
            mt: 12, 
            p: { xs: 6, md: 10 }, 
            borderRadius: 8, 
            bgcolor: 'primary.main', 
            color: 'white', 
            textAlign: 'center', 
            position: 'relative', 
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)'
          }}
        >
          {/* Decorative Blobs */}
          <Box 
            sx={{ 
              position: 'absolute', 
              top: -80, 
              right: -80, 
              width: 240, 
              height: 240, 
              bgcolor: 'rgba(255,255,255,0.1)', 
              borderRadius: '50%', 
              filter: 'blur(60px)',
              animation: 'pulse 4s infinite'
            }} 
          />
          <Box 
            sx={{ 
              position: 'absolute', 
              bottom: -80, 
              left: -80, 
              width: 240, 
              height: 240, 
              bgcolor: 'rgba(255,255,255,0.1)', 
              borderRadius: '50%', 
              filter: 'blur(60px)',
              animation: 'pulse 4s infinite',
              animationDelay: '2s'
            }} 
          />

          <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, position: 'relative', zIndex: 1 }}>
            Ready to Transform Your Institution?
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'rgba(255,255,255,0.8)', 
              maxWidth: 700, 
              mx: 'auto', 
              mb: 6, 
              fontWeight: 400,
              position: 'relative', 
              zIndex: 1 
            }}
          >
            Our solutions reach across 30 countries starting in 2027. Contact our specialized team to tailor our technology for your unique requirements.
          </Typography>
          <Button 
            variant="contained" 
            component="a"
            href="#contact"
            sx={{ 
              bgcolor: 'white', 
              color: 'primary.main', 
              px: 6, 
              py: 1.5, 
              borderRadius: 50, 
              fontWeight: 800,
              fontSize: '1.1rem',
              position: 'relative', 
              zIndex: 1,
              '&:hover': {
                bgcolor: 'grey.100',
                transform: 'scale(1.05)'
              }
            }}
          >
            Contact Specialist
          </Button>
        </Box>
      </Container>
      
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 0.3; }
            50% { transform: scale(1.2); opacity: 0.5; }
            100% { transform: scale(1); opacity: 0.3; }
          }
        `}
      </style>
    </Box>
  );
};

export default ProductSection;
