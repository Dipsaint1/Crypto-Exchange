import React from 'react';
import Cryptos from './Cryptos';
import MarketStat from './MarketStat';
import LatestNews from './LatestNews';
import useApi from '../utilities/useApi';
import CryptoContext from './CryptoContext';

const Main = () => {  
  const { loading, data } = useApi('coins');
  return (
    <>
      <CryptoContext.Provider value={{loading, data}} >
        <Cryptos />
      </CryptoContext.Provider>
      <MarketStat />
      <LatestNews />
      {/* <Outlet /> */}
    </>
  )
}

export default Main;