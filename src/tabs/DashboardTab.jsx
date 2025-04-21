import React from 'react';
import { Box } from '@mui/material';

const DashboardTab = () => {
  return (
    <Box sx={{ display: 'flex', gap: 3, padding: 3, bgcolor: '#f5f6f8' }}>
      {/* LEFT COLUMN – 40% */}
      <Box sx={{ flex: '0 0 40%', display: 'flex', flexDirection: 'column', gap: 3 }}>
        {/* Top: Contracted CI Score */}
        <CardBox height={130} />

        {/* Middle: Operational Net CI Score */}
        <CardBox height={280} />

        {/* Bottom: Bushels by CI Score */}
        <CardBox height={280} />
      </Box>

      {/* RIGHT COLUMN – 60% */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
        {/* Top Row: Three Stat Cards */}
        <Box sx={{ display: 'flex', gap: 3 }}>
          <CardBox flex="0 0 20%" height={100} />
          <CardBox flex="0 0 20%" height={100} />
          <CardBox flex="0 0 20%" height={100} />
          <Box sx={{ flex: 1 }} /> {/* spacer */}
        </Box>

        {/* Bottom: Large Card */}
        <CardBox height={500} />
      </Box>
    </Box>
  );
};

// Reusable styled card component
const CardBox = ({ height = 'auto', flex = 'initial' }) => (
  <Box
    sx={{
      flex,
      height,
      bgcolor: '#ffffff',
      borderRadius: 3,
      boxShadow: 2,
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  />
);

export default DashboardTab;
