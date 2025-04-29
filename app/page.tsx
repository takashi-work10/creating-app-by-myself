'use client';

import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link'

export default function Home() {
  return (
    <Box sx={{ display: "flex", textAlign: "center", justifyContent: "center", alignItems: "center", flexDirection: "column", minHeight: "100vh" }}>
      <Typography sx={{ fontSize: "50px" }}>Diagnosis Test</Typography>
      <Link href="/diagnosis" passHref>
        <Button
          variant="contained"
          color="secondary"
          sx={{ fontSize: "30px", borderRadius: "18px", boxShadow: 8 }}
        >
          Start→
        </Button>
      </Link>
    </Box>
  )}