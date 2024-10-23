import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import Assesment from '@mui/icons-material/Assessment';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import { SitemarkIcon } from './CustomIcons';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import InsightsIcon from '@mui/icons-material/Insights';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
const items = [
  {
    icon: <AccountBalanceIcon sx={{ color: 'text.secondary' }} />,
    title: 'Total Deposits',
    description:
      '2000 USDC',
  },
  {
    icon: <AssuredWorkloadIcon sx={{ color: 'text.secondary' }} />,
    title: 'Maximum Allowable Deposit',
    description:
      '5000 USDC',
  },
  {
    icon: <AgricultureIcon sx={{ color: 'text.secondary' }} />,
    title: 'Your Deposit',
    description:
      '780.10 USDC',
  },
  {
    icon: <DataThresholdingIcon sx={{ color: 'text.secondary' }} />,
    title: 'Unclaimed rewards (estimate)',
    description:
      '2000 Flax',
  },
  {
    icon: <Assesment sx={{ color: 'text.secondary' }} />,
    title: 'Utilization Ratio',
    description:
      '40%',
  },
  {
    icon: <ShowChartIcon sx={{ color: 'text.secondary' }} />,
    title: 'Base APY',
    description:
      '17%',
  },
  {
    icon: <InsightsIcon sx={{ color: 'text.secondary' }} />,
    title: 'Boost',
    description:
      '1% per 10000 sFlax',
  },
  {
    icon: <RocketLaunchIcon sx={{ color: 'text.secondary' }} />,
    title: 'Your current effective APY',
    description:
      '23%',
    textColor: 'lightgreen'
  },

];

export default function Stats() {
  return (
    <Stack
      sx={{
        border: '1px solid rgba(200,200,200,0.4)',
        padding: '20px', flexDirection: 'column',
        alignSelf: 'center', gap: 1, maxWidth: 450
      }}
    >
      {items.map((item, index) => (
        <Stack key={index} direction="row" sx={{ gap: 2 }}>
          {item.icon}
          <div>
            <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: item.textColor ? item.textColor : 'text.secondary' }}>
              {item.description}
            </Typography>
          </div>
        </Stack>
      ))}
    </Stack>
  );
}
