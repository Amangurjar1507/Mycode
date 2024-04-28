import {Container} from '@components';
import AnalyticsTopTabs from '@navigation/topTabs/analyticsTopTabs/AnalyticsTopTabs';
import color from '@theme/color';
import React, {FC} from 'react';
import {styles} from './analytics.style';

const Analytics: FC = () => {
  return (
    <Container
      wrapperType="simple"
      headerShown
      lable="Analytics"
      containerStyle={styles.headerContainerStyle}>
      <AnalyticsTopTabs />
    </Container>
  );
};

export default Analytics;
