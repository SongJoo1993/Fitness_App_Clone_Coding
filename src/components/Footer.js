import React from 'react'
import {Box, Stack, Typography} from '@mui/material';

import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems='center' px='0' pt='24px'>
        <img src={Logo} alg='logo' width='200px' height='40px' />
        <Typography pb='1rem'>
          Design and code inspired by&nbsp;
          <a 
            href="https://www.youtube.com/watch?v=KBpoBc98BwM&t=5624s" 
            style={{textDecoration: 'none' , color: 'black', fontWeight: 'bold'}}
            target = "_blank"
            rel="noreferrer"
          >
               JavaScript Mastery's YouTube tutorial.
          </a>
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer