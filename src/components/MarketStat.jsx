import React, { useEffect } from 'react'

const MarketStat = () => {
  useEffect(() => {
    async function exchanges(){

      try {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/list');
        const data = await res.json();
        // console.log(data);

        // data.forEach(d => {
        //   console.log(`${d.symbol}: '${d.id}',`)
        // });

        // data.forEach(d => {
        //   console.log(`'${d.name}': '${d.id}',`)
        // });
      } 
      catch (error) {
        console.log(error)
      }

    }

    exchanges();
  

  }, [])
  

  return (
    <div>MarketStat</div>
  )
}

export default MarketStat;