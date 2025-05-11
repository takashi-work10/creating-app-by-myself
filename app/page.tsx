// app/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import {
  Container,
  Box,
  Typography,
  Button,
} from '@mui/material';

export default function HomePage() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        background: 'linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)',
        minHeight: '100vh',
        px: { xs: 2, sm: 4 },
        py: { xs: 4, sm: 6 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 400,
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(6px)',
          borderRadius: 2,
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          textAlign: 'center',
          p: { xs: 3, sm: 4 },
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            color: '#8E2DE2',
            mb: 1,
            fontSize: { xs: '1.75rem', sm: '2.25rem' },
          }}
        >
          不安タイプ診断テスト
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            mb: 3,
            fontSize: { xs: '0.875rem', sm: '1rem' },
          }}
        >
          約5分で完了！20問の質問で、あなたのタイプを5つに分類します。
        </Typography>

        <Link href="/diagnosis" passHref>
          <Button
            fullWidth
            variant="contained"
            sx={{
              py: 1.75,
              borderRadius: 3,
              background: 'linear-gradient(90deg, #CF9FFF 0%, #8E2DE2 100%)',
              color: '#FFF',
              fontWeight: 700,
              fontSize: { xs: '1rem', sm: '1.125rem' },
              textTransform: 'none',
              boxShadow: '0 6px 16px rgba(142,45,226,0.4)',
              '&:hover': {
                background: 'linear-gradient(90deg, #8E2DE2 0%, #CF9FFF 100%)',
              },
            }}
          >
            診断を始める →
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
