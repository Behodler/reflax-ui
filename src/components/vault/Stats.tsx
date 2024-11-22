import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Assesment from '@mui/icons-material/Assessment';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import InsightsIcon from '@mui/icons-material/Insights';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import { Divider } from '@mui/material';
import { useReadAVaultConfig } from '../../hooks/contract/reflax';
import { useBlockchainContext } from '../../contexts/BlockchainContextProvider';

interface LineItem {
  icon: any,
  title: string,
  description: string,
  textColor?: string,
  divider?: boolean
  important?: boolean
}

const getLineItems = (apy: bigint ) => {

  return [
    {
      icon: <ShowChartIcon sx={{ color: 'text.secondary' }} />,
      title: 'Base APY',
      description:
        `${apy==0n?'-':apy}%`,
      important: true
    },
    {
      icon: <InsightsIcon sx={{ color: 'text.secondary' }} />,
      title: 'Boost',
      description:
        '1% per 10000 sFlax',
      important: true
    },
    {
      icon: <RocketLaunchIcon sx={{ color: 'text.secondary' }} />,
      title: 'Your effective APY',
      description:
        '23%',
      important: true,
      divider: true
    },
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


  ];
}
export default function Stats() {

  //
  const { vaultStats } = useBlockchainContext()
  const { TVIPS } = vaultStats

  const SECONDS_IN_YEAR = 31_536_000n; // 365 days * 24 hours * 60 minutes * 60 seconds
  const SCALE_FACTOR = 1_000_000_000_000n; // 1e12 for trillion adjustment


  // Calculate APY
  const apy = (((TVIPS || 0n) * SECONDS_IN_YEAR*100n) / SCALE_FACTOR); 
  const items: LineItem[] = getLineItems(apy)
  return (
    <Stack
      sx={{
        border: '1px solid rgba(200,200,200,0.4)',
        padding: '20px', flexDirection: 'column',
        alignSelf: 'center', gap: 1, width: "300px"
      }}
    >
      {items.map((item, index) => (
        <div key={index}>
          <Stack direction="row" sx={{ gap: 2 }}>
            {item.icon}
            <div>
              <Typography
                sx={item.important ? {
                  background: 'linear-gradient(120deg, #FC18FF, #1640E4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                  fontWeight: 'medium'
                } : { fontWeight: 'medium', color: "white" }}
                variant={item.important ? "h6" : "body2"} gutterBottom >
                {item.title}
              </Typography>
              <Typography variant={item.important ? "h6" : "body2"} sx={{ color: item.textColor ? item.textColor : 'text.secondary' }}>
                {item.description}
              </Typography>
            </div>

          </Stack>
          {item.divider && <Divider
            sx={{
              height: 4,    // thickness for horizontal divider
              backgroundColor: '#FFF',  // optional, to set color
            }}
          />
          }
        </div>
      ))}
    </Stack>
  );
}
