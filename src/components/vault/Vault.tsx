import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Stats from './Stats';
import AppTheme from '../shared-theme/AppTheme';
import RotatedText from '../RotatedText';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Form from './Form';

export default function SignInSide(props: { sectionName: string }) {
  const theme = useTheme();
  const isMediumOrLarger = useMediaQuery(theme.breakpoints.up('md')); // Check if screen is medium or larger

  return (

    <Stack direction={isMediumOrLarger?"row":"column"} sx={{
      justifyContent: 'center',
      gap: { xs: 6, sm: 12 },
      p: { xs: 2, sm: 4 },
      m: 'auto',
    }}>
     {isMediumOrLarger && <RotatedText text={props.sectionName} />}
      <Form />
      <Stats />
    </Stack>

  );
}
