import {Container} from '@components';
import FinancialsTopTabs from '@navigation/topTabs/financialsTopTabs/FinancialsTopTabs';
import React, {FC} from 'react';
import styles from './financials.style';

const Financials: FC = () => {
  return (
    <Container
      wrapperType="simple"
      headerShown
      lable="Financials"
      containerStyle={styles.containerStyle}>
      <FinancialsTopTabs />
    </Container>
  );
};

export default Financials;
