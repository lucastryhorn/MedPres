import React from 'react';
import { RefreshControl } from 'react-native';

const Refresh = (props) => {
  return <RefreshControl {...props} refreshing={props.loading} />;
};

export default Refresh;
