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
import { useBlockchainContext } from '../../contexts/BlockchainContextProvider';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function ReflaxAppBar() {
  const { balances } = useBlockchainContext()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar sx={{ backgroundColor: '#212233' }}>
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
            <ImageBalanceHeader name="Flax" balance={balances.flaxBalance} image={FlaxICO} decimalPlaces={18} />
            <ImageBalanceHeader name="sFlax" balance={balances.sFlaxBalance} image={sFlaxICO} unclaimed={balances.unclaimedSFlax} decimalPlaces={18} />
            <ImageBalanceHeader name="USDC" balance={balances.usdcBalance} image={USDC} decimalPlaces={6} />
            <ConnectButton />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>);
}
