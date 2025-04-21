import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import * as d3 from 'd3';

const StatCard = ({ title, value, change, chartData }) => {
  const chartRef = useRef();

  useEffect(() => {
    if (!chartData || chartData.length === 0) return;

    const svg = d3.select(chartRef.current);
    svg.selectAll('*').remove(); // Clear before redraw

    const width = 140;
    const height = 40;
    svg.attr('width', width).attr('height', height);

    const x = d3.scaleLinear()
      .domain([0, chartData.length - 1])
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([d3.min(chartData), d3.max(chartData)])
      .range([height - 5, 5]);

    const line = d3.line()
      .x((_, i) => x(i))
      .y(d => y(d))
      .curve(d3.curveMonotoneX);

    svg.append('path')
      .datum(chartData)
      .attr('fill', 'none')
      .attr('stroke', '#003D1E')
      .attr('stroke-width', 2)
      .attr('d', line);
  }, [chartData]);

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        borderRadius: '12px',
        padding: '16px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontSize="14px" fontWeight={500} color="text.secondary">
          {title} <span style={{ fontSize: '10px' }}>🟡</span>
        </Typography>
        <Box
          sx={{
            backgroundColor: '#E6F4EA',
            color: '#1B5E20',
            fontSize: '12px',
            fontWeight: 600,
            px: 1,
            py: 0.25,
            borderRadius: '12px',
          }}
        >
          +1.2 ↗
        </Box>
      </Box>

      <Box mt={1} display="flex" alignItems="center" justifyContent="space-between">
        <Typography
          variant="h4"
          fontWeight={600}
          sx={{ color: '#003D1E', fontSize: '32px' }}
        >
          {value}
        </Typography>
        <svg ref={chartRef} style={{ marginTop: '4px' }} />
      </Box>
    </Box>
  );
};

export default StatCard;
