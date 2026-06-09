import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box, Container, Typography, Divider, Paper, Button, Chip, List, ListItem, ListItemIcon, ListItemText, useTheme, alpha
} from '@mui/material';
import { ArrowBack as BackIcon, Gavel as GavelIcon } from '@mui/icons-material';

const sections = [
  {
    title: "1. Acceptance of Terms",
    points: [
      "By accessing or using any Techbrain Networks product, website, or service, you confirm that you have read, understood, and agree to be bound by these Terms of Service.",
      "If you are using our services on behalf of a school, university, or organization, you represent that you have authority to bind that entity to these Terms.",
      "If you do not agree with any part of these Terms, you must discontinue use of our services immediately.",
      "We reserve the right to update these Terms at any time. Continued use after an update constitutes your acceptance of the revised Terms."
    ]
  },
  {
    title: "2. User Accounts & Registration",
    points: [
      "To access certain features, you must create an account using accurate, complete, and current information. You are responsible for maintaining the confidentiality of your credentials.",
      "You must promptly notify us of any unauthorized access to your account. We are not liable for losses resulting from unauthorized use of your account.",
      "You may not create accounts using false identities, impersonate others, or share account access with unauthorized third parties.",
      "We reserve the right to suspend or terminate accounts that violate these Terms, contain false information, or pose a security risk."
    ]
  },
  {
    title: "3. Permitted Use of Services",
    points: [
      "Our services are licensed, not sold. You are granted a limited, non-exclusive, non-transferable licence to use our platform for lawful educational purposes only.",
      "You agree not to copy, modify, reverse-engineer, decompile, or create derivative works from our software or platform without written permission.",
      "You may not use our platform to distribute malware, conduct phishing, spam other users, or engage in any unauthorized automated data collection (scraping).",
      "Commercial resale or sublicensing of our services without a written partnership agreement from Techbrain Networks is strictly prohibited."
    ]
  },
  {
    title: "4. Subscription, Payments & Refunds",
    points: [
      "Access to premium features requires a valid subscription. Subscriptions renew automatically unless cancelled at least 7 days before the renewal date.",
      "All prices are listed in the applicable currency and are exclusive of applicable taxes, which will be added at checkout.",
      "Refunds are available within 14 days of initial purchase for annual plans, provided the platform has not been substantially used. Monthly plans are non-refundable.",
      "In cases of billing errors or disputes, please contact billing@techbrainnetworks.com within 30 days of the charge."
    ]
  },
  {
    title: "5. Intellectual Property",
    points: [
      "All content, trademarks, logos, software code, user interfaces, and documentation on our platform are the exclusive intellectual property of Techbrain Networks.",
      "User-generated content (e.g., uploaded assignments, custom courses) remains the property of the user. By uploading content, you grant us a limited licence to host and display it within the platform.",
      "You may not use our brand name, logo, or trademarks in any manner without our prior written consent.",
      "Unauthorized reproduction, distribution, or public display of our proprietary content is a violation of copyright law and these Terms."
    ]
  },
  {
    title: "6. User Content & Conduct",
    points: [
      "You are solely responsible for all content you upload, submit, or transmit through our platform. You must not post content that is illegal, defamatory, abusive, or infringes third-party rights.",
      "We reserve the right to remove content that violates these Terms, applicable law, or our Community Guidelines without prior notice.",
      "You agree not to harass, bully, or threaten other users. Any reports of misconduct will be investigated and appropriate action taken.",
      "We may cooperate with law enforcement authorities and disclose user information when legally required in connection with investigated misconduct."
    ]
  },
  {
    title: "7. Disclaimers & Limitation of Liability",
    points: [
      "Our services are provided on an 'as is' and 'as available' basis without warranties of any kind, express or implied, including fitness for a particular purpose.",
      "We do not guarantee that the platform will be error-free, uninterrupted, or free of viruses or other harmful components.",
      "To the maximum extent permitted by law, Techbrain Networks shall not be liable for any indirect, incidental, special, or consequential damages arising from use of our services.",
      "Our total cumulative liability to you for any claims arising under these Terms shall not exceed the fees paid by you in the 3 months preceding the claim."
    ]
  },
  {
    title: "8. Third-Party Links & Integrations",
    points: [
      "Our platform may contain links to or integrations with third-party websites, tools, or services. We are not responsible for the content, policies, or practices of any third-party.",
      "Your use of third-party services connected to our platform is governed by their respective terms and privacy policies.",
      "We do not endorse any third-party products or services displayed on or linked from our platform.",
      "If you encounter a problematic third-party integration, please report it to our support team so we can review the partnership."
    ]
  },
  {
    title: "9. Termination of Service",
    points: [
      "You may terminate your account at any time by submitting a deletion request through your account settings or by contacting our support team.",
      "We reserve the right to suspend or terminate your access at any time, with or without notice, for violation of these Terms or for any other lawful reason.",
      "Upon termination, your right to access the platform ceases immediately. Data export options will be made available for up to 30 days post-termination.",
      "Provisions of these Terms that by their nature should survive termination (including intellectual property, disclaimers, and dispute resolution) shall continue to apply."
    ]
  },
  {
    title: "10. Governing Law & Dispute Resolution",
    points: [
      "These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.",
      "Any disputes arising from or in connection with these Terms shall first be attempted to be resolved through good-faith negotiation between the parties.",
      "If negotiation fails, disputes shall be referred to binding arbitration under the Arbitration and Conciliation Act, 1996, with proceedings held in Thanjavur, Tamil Nadu, India.",
      "You agree that any claims must be brought in your individual capacity and not as part of a class action or representative proceeding."
    ]
  }
];

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Terms of Service | Techbrain Networks';
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
      <Box sx={{ background: 'linear-gradient(135deg, #0f172a 0%, #1a3a2a 100%)', color: 'white', py: { xs: 8, md: 12 }, mb: 8 }}>
        <Container maxWidth="lg">
          <Chip label="Legal" color="secondary" size="small" sx={{ mb: 3, fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <GavelIcon sx={{ fontSize: 48, color: 'secondary.main' }} />
            <Typography variant="h1" sx={{ fontSize: { xs: '2.2rem', md: '3.5rem' }, fontWeight: 800 }}>
              Terms of Service
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.75)', maxWidth: 700, fontWeight: 400, lineHeight: 1.7 }}>
            These Terms govern your access to and use of Techbrain Networks products and services. Please read them carefully before using our platform.
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
                '&:hover': { borderColor: 'secondary.light', boxShadow: '0 8px 24px rgba(16,185,129,0.05)' }
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
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'secondary.main', flexShrink: 0 }} />
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
        <Box sx={{ mt: 8, p: { xs: 5, md: 7 }, borderRadius: 5, bgcolor: 'secondary.main', color: 'white', textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Questions about our Terms?</Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255,255,255,0.85)' }}>
            Reach our legal team at <strong>legal@techbrainnetworks.com</strong>
          </Typography>
          <Button component={RouterLink} to="/#contact" variant="contained"
            sx={{ bgcolor: 'white', color: 'secondary.main', fontWeight: 700, px: 5, py: 1.8, borderRadius: 50, '&:hover': { bgcolor: 'grey.100' } }}>
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TermsOfService;
