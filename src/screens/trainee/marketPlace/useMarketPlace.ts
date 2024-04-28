import React from 'react';
import { useAuthNavigation } from '@hooks/useAppNavigation';

const useMarketPlace = () => {
  const navigation = useAuthNavigation();
  //** active slide show current */
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  return { activeIndex, setActiveIndex };
};

export default useMarketPlace;
