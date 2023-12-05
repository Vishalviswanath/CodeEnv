import { Box, Button } from '@mui/material';
import React from 'react';
import { CoustomTypography } from '../Styled';

const Footer = () => {
  return (
    <Box display='flex' flexDirection='column'>
      <CoustomTypography
        fontWeight={'bold'}
        fontSize={{ lg: 30, md: 24, sm: 18, xs: 14 }}
        variant='h3'
        paddingTop={3}
        textAlign={'center'}
      >
        Ready for any Team Size
      </CoustomTypography>
      <CoustomTypography
        fontSize={{ lg: 24, md: 20, sm: 16, sx: 14 }}
        variant='div'
        textAlign={'center'}
        padding={4}
      >
        Optimised for any Team Size
      </CoustomTypography>
      <Box
        padding={5}
        display={'flex'}
        justifyContent={'center'}
        margin={'auto'}
      >
        <Button
          sx={{ mr: 2, fontSize: { lg: 20, md: 17, sm: 12, xs: 8 } }}
          variant='contained'
        >
          Try codENV for free
        </Button>
        <Button
          sx={{ ml: 2, fontSize: { lg: 20, md: 17, sm: 12, xs: 8 } }}
          variant='outlined'
        >
          Talk to Sales
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
