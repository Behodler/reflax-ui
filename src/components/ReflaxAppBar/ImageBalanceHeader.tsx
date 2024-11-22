import * as React from 'react';
import { Box, Typography, useMediaQuery, Theme, IconButton, Popover } from '@mui/material';
import { formatUnits } from 'ethers'

const ImageBalanceHeader = (props: { image: any, name: string, balance: bigint | undefined, unclaimed?: bigint | undefined, decimalPlaces: number }) => {
  // State to manage popover open/close
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // Use Material UI's breakpoint to check screen size
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const balanceString = props.balance === undefined ? '-' : `${formatUnits(props.balance, props.decimalPlaces)}`
  const displayText = `${props.name}: ${balanceString} ${props.unclaimed ? "(unclaimed: " + props.unclaimed + ")" : ""}`;

  // Handle popover open
  const handleIconClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle popover close
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Popover is open if anchorEl is not null
  const open = Boolean(anchorEl);
  const id = open ? 'balance-popover' : undefined;

  return (
    <Box sx={{ mr: isSmallScreen ? 0 : 2, display: 'flex', alignItems: 'center' }}>
      {isSmallScreen ? (
        // On small screens, show only the icon and make it clickable
        <>
          <IconButton onClick={handleIconClick}>
            <img src={props.image} width={20} alt={props.name} />
          </IconButton>

          {/* Popover acts like a tooltip on press */}
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography sx={{ p: 1 }}>{displayText}</Typography>
          </Popover>
        </>
      ) : (
        // On larger screens, show the full info
        <>
          <img src={props.image} width={20} alt={props.name} />
          <Typography variant="body1" sx={{ ml: 2 }}>
            {displayText}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default ImageBalanceHeader;
