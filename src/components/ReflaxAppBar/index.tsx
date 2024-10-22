import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FlaxICO from '../../images/FlaxBig.png'
import sFlaxICO from '../../images/sFlaxBig.png'
import USDC from '../../images/USDC.png'
import { Theme, useMediaQuery } from '@mui/material';
import ImageBalanceHeader from './ImageBalanceHeader';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function ReflaxAppBar() {

  // const ImageBalanceHeader = (props: { image: any, name: string, balance: string, unclaimed?: string }) => {
  //   // Use Material UI's breakpoint to check screen size
  //   const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  //   const displayText = `${props.name}: ${props.balance} ${props.unclaimed ? "(unclaimed: " + props.unclaimed + ")" : ""}`;

  //   return (
  //     <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
  //       {isSmallScreen ? (
  //         // On small screens, show only the image and wrap in a Tooltip
  //         <Tooltip title={displayText}>
  //           <img src={props.image} width={20} alt={props.name} />
  //         </Tooltip>
  //       ) : (
  //         // On larger screens, show the full info
  //         <>
  //           <img src={props.image} width={20} alt={props.name} />
  //           <Typography variant="body1" sx={{ ml: 2 }}>
  //             {displayText}
  //           </Typography>
  //         </>
  //       )}
  //     </Box>
  //   );
  // }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* Left-aligned Box for Logo and Name */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>

            <ElectricBoltIcon sx={{ mr: 2 }} />

            <Typography variant="h6" component="div">
              ReFlax
            </Typography>
          </Box>

          {/* This Box will take up the remaining space */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Right-aligned Box for items on the right */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ImageBalanceHeader name="Flax" balance='1000' image={FlaxICO} />
            <ImageBalanceHeader name="sFlax" balance='21000' image={sFlaxICO} unclaimed='4000' />
            <ImageBalanceHeader name="USDC" balance='5000' image={USDC} />
            <ConnectButton />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>);
}
