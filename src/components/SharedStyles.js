import { Platform } from 'react-native';
import { View } from 'react-native';
import { Container as MuiContainer } from '@mui/material';
import styled from '@emotion/native';

export const CrossPlatformContainer = Platform.OS === 'web' 
  ? MuiContainer 
  : styled(View)`
      flex: 1;
      justify-content: center;
      align-items: center;
      padding: 20px;
    `;
