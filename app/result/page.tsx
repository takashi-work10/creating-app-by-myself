// app/result/page.tsx
import React, { Suspense } from 'react';
import ResultContent from './ResultContent';
import { Box, Typography } from '@mui/material';

export default function Page() {
return (
    <Suspense
    fallback={
        <Box
        sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: 2,
        }}
        >
        <Typography>結果を読み込んでいます…</Typography>
        </Box>
    }
    >
    <ResultContent />
    </Suspense>
);
}
