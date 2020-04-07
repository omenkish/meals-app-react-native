import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButton } from 'react-navigation-header-buttons';

import Colors from '../constants/colors';

const CustomHeaderButton = props => (
  <HeaderButton
    {...props}
    IconComponent={Ionicons}
    iconSize={23}
    color={Platform.OS  === 'android' ? 'white' : Colors.primaryColor}
  />
);

export default CustomHeaderButton;
