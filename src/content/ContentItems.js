import { Box, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { CoustomTypography } from '../Styled';

const ContentItems = ({ title, discription, img, swap }) => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down('md'));
  return (
    <Box
      bgcolor={!swap && '#fff'}
      display={'flex'}
      flexDirection={isMatch ? 'column' : 'row'}
      padding={10}
      justifyContent='space-between'
      alignItems='center'
    >
      {swap ? (
        <>
          <Box>
            <CoustomTypography
              fontSize={{ lg: 32, md: 28, sm: 24, sx: 20 }}
              color='#734950'
              padding={3}
              variant='h3'
            >
              {title}
            </CoustomTypography>
            <CoustomTypography
              padding={3}
              variant='caption'
              fontSize={{ lg: 24, md: 20, sm: 16, sx: 14 }}
            >
              {discription}
            </CoustomTypography>
          </Box>
          <img
            src={img}
            alt={title}
            loading='lazy'
            width={isMatch? '100%':'50%'}
            style={{
              boxShadow: '10px 10px 20px #ccc',
              marginLeft: '10%',
              borderRadius: 20,
            }}
            height={'300px'}
          />
        </>
      ) : (
        <>
          <img
            src={img}
            alt={title}
            loading='lazy'
            width={isMatch? '100%':'50%'}
            style={{
              boxShadow: '10px 10px 20px #ccc',
              marginRight: '10%',
              borderRadius: 20,
            }}
            height={'300px'}
          />
          <Box>
            <CoustomTypography
              color='#734950'
              padding={3}
              variant='h3'
              fontSize={{ lg: 32, md: 28, sm: 24, sx: 20 }}
            >
              {title}
            </CoustomTypography>
            <CoustomTypography
              padding={3}
              variant='caption'
              fontSize={{ lg: 24, md: 20, sm: 16, sx: 14 }}
            >
              {discription}
            </CoustomTypography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ContentItems;
