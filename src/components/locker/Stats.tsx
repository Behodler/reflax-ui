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
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { big_optional } from '../../contexts/BlockchainContextProvider';
import { useLockerContext } from '../../contexts/LockerContextProvider';
import { ethers } from 'ethers';


function parseEther(number: big_optional): string {
  if (number) {
    return ethers.formatEther(`${number}`)
  }
  return "-"
}

const getItems = (totalLocked: big_optional, lockedUserFlax: big_optional, unclaimedSFlax: big_optional, timeRemaining: big_optional) => {

  let timeRemainingString = "-"
  if (timeRemaining) {


    const day = 86400n;
    const daysRemaining = (timeRemaining) / day;
    const leftOverHours = timeRemaining - daysRemaining * day;
    const hoursRemaining = leftOverHours / (60n * 60n);

    if (daysRemaining > 0)
      timeRemainingString += `${daysRemaining} day${daysRemaining > 1 ? 's' : ''}`
    if (hoursRemaining > 0)
      timeRemainingString += `${daysRemaining > 0 ? ', ' : ''}${hoursRemaining} hour${hoursRemaining > 1 ? 's' : ''}`
  }
  return [
    {
      icon: <AccountBalanceIcon sx={{ color: 'text.secondary' }} />,
      title: 'Total Locked Flax',
      description:
        parseEther(totalLocked),
    },

    {
      icon: <AgricultureIcon sx={{ color: 'text.secondary' }} />,
      title: 'Your Locked Flax',
      description:
        parseEther(lockedUserFlax),
    },
    {
      icon: <DataThresholdingIcon sx={{ color: 'text.secondary' }} />,
      title: 'Unclaimed sFlax',
      description:
        parseEther(unclaimedSFlax),
    },
    {
      icon: <AccessTimeIcon sx={{ color: 'text.secondary' }} />,
      title: 'Time remaining to unlock',
      description:
        timeRemainingString,
    }

  ];
}
export default function Stats() {
  const { timeRemaining, unclaimedSFlax, userLockedFlax, totalLockedFlax } = useLockerContext()
  const items = getItems(totalLockedFlax, userLockedFlax, unclaimedSFlax, timeRemaining)

  return (
    <Stack
      sx={{
        border: '1px solid rgba(200,200,200,0.4)',
        padding: '20px', flexDirection: 'column',
        alignSelf: 'center', gap: 1, width: "300px"
      }}
    >
      {items.map((item, index) => (
        <Stack key={index} direction="row" sx={{ gap: 2 }}>
          {item.icon}
          <div>
            <Typography gutterBottom sx={{ fontWeight: 'medium', color: "white" }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.description}
            </Typography>
          </div>
        </Stack>
      ))}
    </Stack>
  );
}
