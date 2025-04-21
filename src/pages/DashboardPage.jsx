import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Tabs,
  Tab,
  Toolbar,
  Typography,
  Avatar,
  Container,
  Paper,
  MenuItem,
  Select,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import DashboardTab from '../tabs/DashboardTab';


// Dummy content components
// const DashboardTab = () => <Paper sx={{ p: 3 }}>📊 Dashboard Content</Paper>;
const SourcingTab = () => <Paper sx={{ p: 3 }}>🌱 Sourcing Content</Paper>;
const ReportingTab = () => <Paper sx={{ p: 3 }}>📈 Reporting Content</Paper>;
const SettingsTab = () => <Paper sx={{ p: 3 }}>⚙️ Settings Content</Paper>;

const DashboardPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathToTabIndex = {
    '/dashboard': 0,
    '/sourcing': 1,
    '/reporting': 2,
    '/settings': 3,
  };

  const tabIndexToPath = ['/dashboard', '/sourcing', '/reporting', '/settings'];

  const initialTabIndex = pathToTabIndex[location.pathname] ?? 0;
  const [activeTab, setActiveTab] = useState(initialTabIndex);
  const [selectedPlant, setSelectedPlant] = useState('All Plants');
  const [selectedRange, setSelectedRange] = useState('Month');

  useEffect(() => {
    const newIndex = pathToTabIndex[location.pathname];
    if (newIndex !== undefined && newIndex !== activeTab) {
      setActiveTab(newIndex);
    }
  }, [location.pathname]);

  const handleTabChange = (_, newValue) => {
    setActiveTab(newValue);
    navigate(tabIndexToPath[newValue]);
  };

  const handleRangeChange = (range) => {
    setSelectedRange(range);
  };

  const tabContent = [
    <DashboardTab />,
    <SourcingTab />,
    <ReportingTab />,
    <SettingsTab />,
  ];

  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#DEEBE5' }}>
      {/* Header */}
      <AppBar position="static" sx={{ bgcolor: 'white', borderBottom: '1px solid #ccc', color: '#003D1E' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#003D1E' }}>
            G.A.G.E.
          </Typography>

          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="inherit"
            sx={{
              mx: 'auto',
              '& .MuiTab-root': { color: 'black', fontWeight: '500' },
              '& .Mui-selected': { color: '#800000' },
              '& .MuiTabs-indicator': { backgroundColor: '#800000' },
            }}
          >
            <Tab label="Dashboard" />
            <Tab label="Sourcing" />
            <Tab label="Reporting" />
            <Tab label="Settings" />
          </Tabs>

          <Avatar sx={{ bgcolor: '#003D1E' }}>AK</Avatar>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 3, bgcolor: '#F0F0F0' }}>
        <Container maxWidth="xl">
          {/* Title Row */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="h5">Clear Lake Energy</Typography>

              <Box sx={{ width: '1px', height: 24, bgcolor: '#ccc' }} />

              <Select
                value={selectedPlant}
                onChange={(e) => setSelectedPlant(e.target.value)}
                variant="standard"
                sx={{ minWidth: 120 }}
              >
                <MenuItem value="All Plants">All Plants</MenuItem>
                <MenuItem value="NorthEast">Northeast</MenuItem>
                <MenuItem value="NorthWest">Northwest</MenuItem>
                <MenuItem value="SouthEast">Southeast</MenuItem>
                <MenuItem value="SouthWest">Southwest</MenuItem>
              </Select>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="caption" sx={{ color: 'text.secondary', mr: 2 }}>
                Last updated: {today}
              </Typography>
              {['Day', 'Week', 'Month', 'Year'].map((label) => (
                <Box
                  key={label}
                  onClick={() => handleRangeChange(label)}
                  sx={{
                    px: 1.5,
                    py: 0.5,
                    border: '1px solid #ccc',
                    bgcolor: selectedRange === label ? '#003D1E' : 'white',
                    color: selectedRange === label ? 'white' : 'black',
                    fontSize: '0.875rem',
                    borderRadius: 1,
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: selectedRange === label ? '#003D1E' : '#f0f0f0',
                    },
                  }}
                >
                  {label}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Tab Content */}
          {tabContent[activeTab]}
        </Container>
      </Box>
    </Box>
  );
};

export default DashboardPage;
