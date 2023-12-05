import {
  AppBar,
  Button,
  Link,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/system';
import React from 'react';
import WebhookIcon from '@mui/icons-material/Webhook';
import DrawerComp from './DrawerComp';
import EmailIcon from '@mui/icons-material/Email';
import GoogleIcon from '@mui/icons-material/Google';
import { CoustomTypography } from '../Styled';
const links = ['Products', 'Solutions', 'Pricing', 'Enterprise'];
const Header = () => {
  // const [value, setValue] = useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  const isMatch = useMediaQuery(useTheme().breakpoints.down('md'));
  return (
    <AppBar
      sx={{
        backgroundColor: 'transparent',
        boxShadow: '0',
        position: 'sticky',
      }}
    >
      {isMatch ? (
        <>
          <Box display={'flex'}>
            <WebhookIcon sx={{ color: 'black', padding: 1 }} />
            <Typography
              variant='h6'
              fontFamily={'fantasy'}
              color={'black'}
              padding={0.5}
            >
              CodeEnv
            </Typography>
            <DrawerComp links={links} />
          </Box>
        </>
      ) : (
        <>
          <Toolbar>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                color: 'black',
              }}
            >
              <WebhookIcon sx={{ color: 'black' }} />
              <Typography
                variant='h6'
                fontFamily={'fantasy'}
                color={'black'}
                padding={0.5}
                marginRight={1}
              >
                CodeEnv
              </Typography>
              <Box display={'flex'} justifyContent={'center'}>
                <Tabs component={Link} sx={{ textDecoration: 'none' }}>
                  {links.map((link, index) => (
                    <Tab
                      sx={{
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        color: 'black',
                        ':hover': {
                          textDecoration: 'underline',
                          textUnderlineOffset: '5px',
                        },
                      }}
                      key={index}
                      label={link}
                    />
                  ))}
                </Tabs>
              </Box>
              <Box display={'flex'} marginLeft={'auto'}>
                <Button sx={{ mr: 2 }} variant='outlined'>
                  Talk to US
                </Button>
                <Button sx={{ ml: 2 }} variant='contained'>
                  Try for free
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </>
      )}

      <Box width='100%' height='100vh'>
        <video
          width={'100%'}
          height='70%'
          autoPlay
          loop
          muted
          playsInline
          src='/video.mp4'
        ></video>
        <Box display='flex' width='100%'>
          <CoustomTypography
            fontSize={{ lg: 30, md: 24, sm: 18, xs: 14 }}
            margin='auto'
            variant='h4'
            color='black'
            textAlign='center'
          >
            Build you Software hassle free and with top Notch Quality
          </CoustomTypography>
        </Box>
        <Box
          width={'100%'}
          display='flex'
          justifyContent={'center'}
          margin='auto'
          marginTop={5}
        >
          <Button endIcon={<EmailIcon />} variant='outlined' sx={{ mr: 3 }}>
            Signup
          </Button>
          <Button
            color='error'
            endIcon={<GoogleIcon />}
            variant='contained'
            sx={{ ml: 3 }}
          >
            Signup
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
