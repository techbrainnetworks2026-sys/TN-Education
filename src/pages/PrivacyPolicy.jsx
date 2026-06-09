import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box, Container, Typography, Divider, Paper, Button, Chip, List, ListItem, ListItemIcon, ListItemText, useTheme, alpha
} from '@mui/material';
import { ArrowBack as BackIcon, Shield as ShieldIcon } from '@mui/icons-material';

const sections = [
  {
    title: "1. Information We Collect",
    points: [
      "We collect personal information you voluntarily provide, including your name, email address, phone number, and institution name when you register or contact us.",
      "We automatically collect usage data such as IP addresses, browser type, device identifiers, pages visited, and session duration through cookies and tracking technologies.",
      "We may collect educational data including course progress, quiz results, and interaction logs when you use our learning platform products.",
      "Third-party integrations (e.g., Google SSO, payment processors) may share limited profile information with us in accordance with their own privacy policies."
    ]
  },
  {
    title: "2. How We Use Your Information",
    points: [
      "To create and manage your account, process transactions, and deliver the educational services you have subscribed to.",
      "To personalize your learning experience, generate adaptive content recommendations, and improve our AI-powered platform features.",
      "To send you product updates, newsletters, and promotional communications — you may opt out at any time via the unsubscribe link in each email.",
      "To comply with legal obligations, enforce our terms, and protect the rights, safety, and security of our users and platform."
    ]
  },
  {
    title: "3. Data Sharing & Disclosure",
    points: [
      "We do not sell, rent, or trade your personal information to third-party marketers or advertisers under any circumstances.",
      "We may share data with trusted service providers (e.g., cloud hosts, analytics vendors) who process data strictly on our behalf and under confidentiality agreements.",
      "We may disclose your information if required by law, court order, or governmental authority, or to prevent fraud, abuse, or harm to users.",
      "Anonymized and aggregated data may be shared publicly for research, reporting, and industry benchmarking purposes."
    ]
  },
  {
    title: "4. Cookies & Tracking Technologies",
    points: [
      "We use essential cookies to maintain your login session, remember preferences, and ensure the platform functions correctly.",
      "Analytics cookies (e.g., Google Analytics) help us understand how users navigate our platform so we can improve performance and content.",
      "You can manage or disable non-essential cookies through your browser settings or our Cookie Consent banner at any time.",
      "Disabling essential cookies may impair certain core platform features such as session persistence and access control."
    ]
  },
  {
    title: "5. Data Retention",
    points: [
      "We retain your personal account data for as long as your account remains active or as needed to provide services.",
      "Upon account deletion, we will purge identifiable personal data within 30 days, except where retention is required for legal, tax, or audit obligations.",
      "Anonymized usage logs and aggregated analytics data may be retained indefinitely for platform improvement purposes.",
      "Backup copies of deleted data may persist in encrypted archives for up to 90 days before permanent deletion."
    ]
  },
  {
    title: "6. Children's Privacy",
    points: [
      "Our services are designed for use by educational institutions and are not directed at children under 13 without verified parental or institutional consent.",
      "Where our platform is deployed in K-12 settings, the school or institution acts as the data controller and is responsible for obtaining appropriate parental consent.",
      "We comply fully with the Children's Online Privacy Protection Act (COPPA) and similar regulations in applicable jurisdictions.",
      "If we become aware that personal data of a child under 13 was collected without proper consent, we will promptly delete that data."
    ]
  },
  {
    title: "7. Your Rights & Choices",
    points: [
      "You have the right to access, correct, update, or delete your personal data at any time by contacting our support team or via your account settings.",
      "You may request a portable copy of your personal data in a structured, machine-readable format (data portability).",
      "You have the right to restrict or object to certain types of processing, including direct marketing and automated profiling.",
      "Residents of the EU/EEA may lodge a complaint with their local Data Protection Authority if they believe their rights have been violated."
    ]
  },
  {
    title: "8. Data Security",
    points: [
      "We implement industry-standard security measures including AES-256 encryption at rest, TLS 1.3 in transit, and multi-factor authentication for admin access.",
      "Regular third-party penetration testing and security audits are conducted to identify and remediate vulnerabilities in our infrastructure.",
      "In the event of a data breach affecting your personal information, we will notify you and relevant authorities within 72 hours as required by applicable law.",
      "Access to personal data is strictly limited to authorized employees on a need-to-know basis, governed by role-based access controls."
    ]
  },
  {
    title: "9. International Data Transfers",
    points: [
      "Techbrain Networks is headquartered in India. Your data may be processed in countries where we or our service providers operate, which may have different data protection laws.",
      "For transfers of EU personal data outside the EEA, we rely on Standard Contractual Clauses (SCCs) approved by the European Commission.",
      "We ensure that any international data recipient maintains data protection standards equivalent to those required under applicable law.",
      "You may contact us to obtain copies of the safeguards in place for international data transfers."
    ]
  },
  {
    title: "10. Changes to This Policy",
    points: [
      "We may update this Privacy Policy periodically to reflect changes in our practices, technologies, or applicable laws.",
      "Significant changes will be communicated to you via email or a prominent notice on our platform at least 14 days before they take effect.",
      "Your continued use of our services after the effective date of any change constitutes your acceptance of the updated policy.",
      "We encourage you to review this page regularly. The 'Last Updated' date at the top of this page indicates when the policy was last revised."
    ]
  }
];

const PrivacyPolicy = () => {
  const theme = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Privacy Policy | Techbrain Networks';
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
      <Box sx={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)', color: 'white', py: { xs: 8, md: 12 }, mb: 8 }}>
        <Container maxWidth="lg">
          <Chip label="Legal" color="secondary" size="small" sx={{ mb: 3, fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <ShieldIcon sx={{ fontSize: 48, color: 'secondary.main' }} />
            <Typography variant="h1" sx={{ fontSize: { xs: '2.2rem', md: '3.5rem' }, fontWeight: 800 }}>
              Privacy Policy
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.75)', maxWidth: 700, fontWeight: 400, lineHeight: 1.7 }}>
            Your privacy matters to us. This policy explains what data we collect, how we use it, and what rights you have over your personal information.
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
                '&:hover': { borderColor: 'primary.light', boxShadow: '0 8px 24px rgba(37,99,235,0.05)' }
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
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main', flexShrink: 0 }} />
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
        <Box sx={{ mt: 8, p: { xs: 5, md: 7 }, borderRadius: 5, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Questions about your privacy?</Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255,255,255,0.8)' }}>
            Contact our Data Protection Officer at <strong>privacy@techbrainnetworks.com</strong>
          </Typography>
          <Button component={RouterLink} to="/#contact" variant="contained"
            sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 700, px: 5, py: 1.8, borderRadius: 50, '&:hover': { bgcolor: 'grey.100' } }}>
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
