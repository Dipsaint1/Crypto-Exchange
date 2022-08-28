import React from 'react';
import useApi from '../utilities/useApi';
import useHeaders from '../utilities/useHeaders';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

const LineChart = ({ coinId, chartPeriod, change }) => {
  ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler );
  
  // const { loading, data : coin } = useApi(`coin/${coinId}/history?timePeriod=${chartPeriod}`, process.env.REACT_APP_COINRANKING_URL, useHeaders().coinrankingHeader);
  const { loading, data : coin } = useApi(`/coins/bitcoin/market_chart?vs_currency=usd&days=${chartPeriod}`, process.env.REACT_APP_COINGECKO_API_URL, useHeaders().coinGeckoHeader);
  
  if(loading) return;  



  // console.log(coin.prices);


  const coinPrice = [];
  const coinTimestamp = [];

  // coin?.prices.forEach(coin => {
  //   if(coin.price === null || coin.timestamp === null ) return;
  //   coinPrice.push(coin.price);
  //   coinTimestamp.push(new Date((coin.timestamp) * 1000).toLocaleDateString());
  // });
  
  for (let i= 0; i < coin?.prices.length; i++){
    coinTimestamp.push(new Date(coin.prices[i][0]).toLocaleDateString());
    coinPrice.push(coin.prices[i][1])
  }

  coinPrice.reverse();
  coinTimestamp.reverse();

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        data: coinPrice,
        fill: true,
        backgroundColor: 'rgba(223, 229, 240, 0.3)',
        borderColor: () => {
          if(change >= 0 ) return 'green'; 
          else return 'red';
        },

        drawBorder: true,
        radius: 0,
        borderWidth: 1.2,
      }
    ]
  }

  const options = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false
        }
      },
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  return (
    <div>
      <Line options={ options } data={ data }  />
    </div>
  )
}

export default LineChart;


// import React from 'react'

// const Chart = () => {
//   return (
//     <div>Chart</div>
//   )
// }

// export default Chart