import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  useTheme, 
  alpha 
} from '@mui/material';
import { 
  TrackChanges as TargetIcon, 
  Lightbulb as LightbulbIcon, 
  Favorite as HeartIcon, 
  Bolt as ZapIcon 
} from '@mui/icons-material';

const About = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <TargetIcon sx={{ fontSize: 24 }} />,
      title: 'Our Vision',
      desc: 'To be a global leader in technology innovation, creating a future where technology elevates the quality of life and drives collaboration on a global scale.',
      color: theme.palette.secondary.main,
    },
    {
      icon: <LightbulbIcon sx={{ fontSize: 24 }} />,
      title: 'Our Mission',
      desc: 'Empowering businesses and individuals globally with cutting-edge technology solutions that drive innovation, efficiency, and sustainability.',
      color: theme.palette.accent.main,
    },
    {
      icon: <HeartIcon sx={{ fontSize: 24 }} />,
      title: 'Our Passion',
      desc: 'Relentless pursuit of elegant solutions to complex challenges. We push boundaries to inspire the future of technology.',
      color: theme.palette.primary.main,
    },
    {
      icon: <ZapIcon sx={{ fontSize: 24 }} />,
      title: 'Global Impact',
      desc: 'Innovating 480 products spanning 24 industries. Starting in 2027, our solutions will reach 30 countries transforming lives.',
      color: '#FB923C', // Orange
    },
  ];

  return (
    <Box 
      id="about" 
      component="section" 
      sx={{ 
        py: { xs: 10, md: 15 }, 
        bgcolor: 'white', 
        position: 'relative', 
        overflow: 'hidden' 
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          {/* Left: Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: 'inline-block', px: 2, py: 1, bgcolor: alpha(theme.palette.primary.main, 0.1), borderRadius: 2, color: 'primary.main', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: 1, mb: 3 }}>
              About Techbrain Networks
            </Box>
            <Typography variant="h2" sx={{ mb: 3, lineHeight: 1.2 }}>
              Leading the <Box component="span" sx={{ color: 'primary.main', fontStyle: 'italic' }}>Digital Revolution</Box> in Education Technology
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'text.secondary', mb: 6, lineHeight: 1.7 }}>
              Techbrain Networks is a leading Software Product Development company specializing in AI, IoT, 
              Big Data, Blockchain, Cloud Computing, Quantum Computing, and Digital Marketing.
            </Typography>

            <Grid container spacing={4}>
              {features.map((item, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                  <Box sx={{ group: 'true' }}>
                    <Box 
                      sx={{ 
                        width: 48, 
                        height: 48, 
                        bgcolor: alpha(item.color, 0.1), 
                        borderRadius: 3, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        color: item.color, 
                        mb: 2,
                        transition: 'all 0.3s ease',
                        '.group:hover &': {
                          bgcolor: item.color,
                          color: 'white',
                          transform: 'translateY(-4px)'
                        }
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right: Visual/Founder */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: 'relative' }}>
              <Box 
                sx={{ 
                  position: 'absolute', 
                  inset: -16, 
                  bgcolor: alpha(theme.palette.primary.main, 0.05), 
                  borderRadius: 8, 
                  transform: 'rotate(-3deg)', 
                  zIndex: 0 
                }} 
              />
              <Box 
                sx={{ 
                  position: 'relative', 
                  zIndex: 1, 
                  bgcolor: 'white', 
                  p: 4, 
                  borderRadius: 8, 
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)', 
                  border: '1px solid', 
                  borderColor: 'grey.100' 
                }}
              >
                <Box 
                  sx={{ 
                    width: '100%', 
                    aspectRatio: '1/1', 
                    borderRadius: 4, 
                    backgroundImage: `url('https://images.unsplash.com/photo-1507005316197-7d683234149e?auto=format&fit=crop&q=80&w=800')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(100%)',
                    transition: 'all 0.7s ease',
                    mb: 4,
                    '&:hover': {
                      filter: 'grayscale(0%)'
                    }
                  }}
                />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>Ramkumar Arunachalam</Typography>
                    <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 700 }}>Founder of Techbrain Networks</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {[0, 1, 2].map((i) => (
                      <Box 
                        key={i} 
                        sx={{ 
                          width: 8, 
                          height: 8, 
                          borderRadius: '50%', 
                          bgcolor: i === 0 ? 'primary.main' : i === 1 ? 'secondary.main' : 'accent.main',
                          animation: 'pulse 1.5s infinite',
                          animationDelay: `${i * 0.2}s`
                        }} 
                      />
                    ))}
                  </Box>
                </Box>
                <Box 
                  component="blockquote" 
                  sx={{ 
                    fontStyle: 'italic', 
                    color: 'text.secondary', 
                    borderLeft: '4px solid', 
                    borderColor: 'primary.main', 
                    pl: 2, 
                    py: 1,
                    m: 0
                  }}
                >
                  <Typography variant="body1">
                    "At Techbrain, we don't just build software; we architect the digital scaffolding 
                    for the next generation of academic excellence."
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(0.95); opacity: 0.5; }
            50% { transform: scale(1.05); opacity: 1; }
            100% { transform: scale(0.95); opacity: 0.5; }
          }
        `}
      </style>
    </Box>
  );
};

export default About;
