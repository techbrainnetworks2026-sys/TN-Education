import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box, Container, Typography, Divider, Paper, Button, Chip, List, ListItem, ListItemIcon, ListItemText
} from '@mui/material';
import { ArrowBack as BackIcon, Cookie as CookieIcon } from '@mui/icons-material';

const sections = [
  {
    title: "1. What Are Cookies?",
    points: [
      "Cookies are small text files placed on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work efficiently and to provide information to website owners.",
      "Cookies may be 'session cookies' that expire when you close your browser, or 'persistent cookies' that remain on your device until they expire or you delete them.",
      "Similar technologies such as web beacons, pixel tags, local storage, and JavaScript trackers may also be used to achieve similar functions and are covered by this Cookie Policy.",
      "Cookies are generally safe and do not contain personal information by themselves, but they may be used in conjunction with other data to identify you."
    ]
  },
  {
    title: "2. Types of Cookies We Use",
    points: [
      "Strictly Necessary Cookies: These are essential for the operation of our website and platform. They enable you to log in, navigate securely, and use core features. These cannot be disabled.",
      "Performance & Analytics Cookies: These collect anonymized information about how visitors interact with our site (e.g., which pages are visited most, error messages encountered).",
      "Functional Cookies: These allow the platform to remember your preferences such as language, region, and saved settings to provide a more personalized experience.",
      "Targeting & Advertising Cookies: These are used to deliver relevant ads and measure the effectiveness of our marketing campaigns on third-party channels."
    ]
  },
  {
    title: "3. Cookies Set by Third Parties",
    points: [
      "We use Google Analytics to understand website traffic and user behaviour. Google may set its own cookies and use the data according to its Privacy Policy.",
      "Social media plugins (e.g., LinkedIn Share, Twitter/X embed) may place cookies when you interact with embedded content from those platforms.",
      "Payment processors (e.g., Razorpay, Stripe) use cookies during transaction processing to ensure security and prevent fraud.",
      "We have no control over third-party cookies. Please refer to the respective third-party's cookie and privacy policies for details."
    ]
  },
  {
    title: "4. Specific Cookies Used on Our Platform",
    points: [
      "session_id — A strictly necessary session cookie that maintains your authenticated login state. Expires when you close the browser.",
      "tn_prefs — A functional cookie that stores your UI preferences such as theme, language, and notification settings. Expires after 365 days.",
      "_ga / _gid — Google Analytics performance cookies that track page views and session information. Expires after 2 years / 24 hours respectively.",
      "csrf_token — A security cookie used to prevent Cross-Site Request Forgery attacks on form submissions. Expires with the session."
    ]
  },
  {
    title: "5. Duration of Cookies",
    points: [
      "Session cookies are temporary and are automatically deleted from your device when you close your browser or end your session.",
      "Persistent cookies remain on your device for a defined period (from hours to years) or until you manually delete them.",
      "The specific expiry duration of each cookie we use is defined in Section 4 and may vary depending on the purpose of the cookie.",
      "You can view and delete cookies stored by our platform at any time through your browser's developer tools or settings."
    ]
  },
  {
    title: "6. How to Manage & Control Cookies",
    points: [
      "You can set your browser to refuse all or some cookies, or to alert you when websites attempt to set or access cookies. Refer to your browser's help documentation for guidance.",
      "Our cookie consent banner allows you to accept or decline non-essential cookie categories (analytics, functional, targeting) at any time.",
      "You can withdraw or change your cookie consent at any time by clicking the 'Cookie Settings' link in the footer of our website.",
      "Note that blocking essential cookies may prevent certain parts of our platform from functioning correctly, including the login system and course progress tracking."
    ]
  },
  {
    title: "7. Cookie Consent & Legal Basis",
    points: [
      "For users in the EU/EEA and UK, we process cookies on the legal basis of 'consent' (Article 6(1)(a) GDPR) for non-essential cookies, and 'legitimate interest' for strictly necessary cookies.",
      "We obtain your explicit consent for analytics, functional, and targeting cookies through our cookie consent banner displayed on your first visit.",
      "You may withdraw your consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.",
      "For users outside the EU, local regulations may apply. We aim to comply with all applicable cookie laws globally including India's DPDP Act."
    ]
  },
  {
    title: "8. Do Not Track (DNT) Signals",
    points: [
      "Some browsers include a 'Do Not Track' (DNT) feature that signals to websites that you do not want to be tracked.",
      "At this time, our platform does not respond to DNT browser signals as there is no industry-wide consensus on how to interpret them.",
      "You can achieve similar results by adjusting your cookie preferences through our Cookie Consent banner or your browser settings.",
      "We continue to monitor developments in DNT standards and will update this policy if we implement DNT support in the future."
    ]
  },
  {
    title: "9. Cookies & Children",
    points: [
      "Where our platform is used in K-12 school environments, we minimize the use of non-essential cookies and disable advertising and targeting cookies by default.",
      "Schools and institutions deploying our platform for students under 13 should review our education-specific data processing agreement to ensure compliant cookie usage.",
      "We do not use cookies to profile or track children for advertising purposes, and we comply fully with COPPA and equivalent regulations.",
      "Parents who are concerned about cookies collected in relation to their child's use of our platform may contact our Data Protection Officer."
    ]
  },
  {
    title: "10. Updates to This Cookie Policy",
    points: [
      "We may update this Cookie Policy periodically to reflect changes in the cookies we use or for operational, legal, or regulatory reasons.",
      "When we make material changes, we will notify you by updating the 'Last Updated' date on this page and, where appropriate, by displaying a revised cookie consent notice.",
      "Your continued use of our website after any update to this policy constitutes your acceptance of the revised cookie practices.",
      "For any questions or concerns about our use of cookies, please contact us at privacy@techbrainnetworks.com."
    ]
  }
];

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Cookie Policy | Techbrain Networks';
  }, []);

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 10 }}>
      {/* Sticky Top Bar */}
      <Box sx={{ py: 3, bgcolor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', borderBottom: '1px solid', borderColor: 'grey.100', position: 'sticky', top: 0, zIndex: 1000 }}>
        <Container maxWidth="lg">
          <Button component={RouterLink} to="/" startIcon={<BackIcon />} sx={{ fontWeight: 700, color: 'text.primary', '&:hover': { color: 'primary.main', bgcolor: 'transparent' } }}>
            Back to Home
          </Button>
        </Container>
      </Box>

      {/* Hero */}
      <Box sx={{ background: 'linear-gradient(135deg, #0f172a 0%, #2d1a0f 100%)', color: 'white', py: { xs: 8, md: 12 }, mb: 8 }}>
        <Container maxWidth="lg">
          <Chip label="Legal" color="secondary" size="small" sx={{ mb: 3, fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <CookieIcon sx={{ fontSize: 48, color: 'secondary.main' }} />
            <Typography variant="h1" sx={{ fontSize: { xs: '2.2rem', md: '3.5rem' }, fontWeight: 800 }}>
              Cookie Policy
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.75)', maxWidth: 700, fontWeight: 400, lineHeight: 1.7 }}>
            This policy explains what cookies are, the types we use, why we use them, and how you can manage your cookie preferences on our platform.
          </Typography>
          <Typography variant="body2" sx={{ mt: 3, color: 'rgba(255,255,255,0.45)' }}>
            Last Updated: June 9, 2026 &nbsp;|&nbsp; Effective: June 9, 2026
          </Typography>
        </Container>
      </Box>

      {/* Content */}
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {sections.map((section, idx) => (
            <Paper
              key={idx}
              elevation={0}
              sx={{
                p: { xs: 4, md: 5 },
                borderRadius: 4,
                border: '1px solid',
                borderColor: 'grey.100',
                bgcolor: 'white',
                transition: 'all 0.3s ease',
                '&:hover': { borderColor: 'warning.light', boxShadow: '0 8px 24px rgba(245,158,11,0.05)' }
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
                {section.title}
              </Typography>
              <Divider sx={{ mb: 3 }} />
              <List sx={{ p: 0 }}>
                {section.points.map((point, pIdx) => (
                  <ListItem key={pIdx} alignItems="flex-start" disableGutters sx={{ py: 1.2, borderBottom: pIdx < section.points.length - 1 ? '1px dashed' : 'none', borderColor: 'grey.100' }}>
                    <ListItemIcon sx={{ minWidth: 28, mt: 0.6 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'warning.main', flexShrink: 0 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={point}
                      primaryTypographyProps={{ fontSize: '1rem', lineHeight: 1.7, color: 'text.secondary', fontWeight: 400 }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          ))}
        </Box>

        {/* Contact CTA */}
        <Box sx={{ mt: 8, p: { xs: 5, md: 7 }, borderRadius: 5, background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: 'white', textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Cookie questions or concerns?</Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255,255,255,0.8)' }}>
            Contact our privacy team at <strong>privacy@techbrainnetworks.com</strong>
          </Typography>
          <Button component={RouterLink} to="/#contact" variant="contained"
            sx={{ bgcolor: 'primary.main', color: 'white', fontWeight: 700, px: 5, py: 1.8, borderRadius: 50, '&:hover': { bgcolor: 'primary.dark' } }}>
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CookiePolicy;
