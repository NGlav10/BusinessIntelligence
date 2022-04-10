import React from 'react';
import { Platform, ViewProps } from 'react-native';
import { requireNativeComponent } from 'react-native';

interface NativeProps {
  xValues: string[];
  yValues: number[];
}

const RNIOSCharts = requireNativeComponent('RNChartsViewIOS');

type ChartsProps = ViewProps & NativeProps;

const Charts: React.FC<ChartsProps> = (props) => {
  const isIOS = Platform.OS === 'ios';

  return isIOS ? <RNIOSCharts {...props} /> : <></>;
};

export default Charts;
