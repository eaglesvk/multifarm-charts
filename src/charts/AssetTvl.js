import React, { useState, useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const AssetTvl = () => {
  const [chart, setChart] = useState({})
  var baseUrl = "https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_assets?pg=1&tvl_min=50000&sort=tvlStaked&sort_order=desc&farms_tvl_staked_gte=10000000";
//   var proxyUrl = "https://cors-anywhere.herokuapp.com/";
//   var apiKey = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";



  useEffect(() => {
    const fetchCoins = async () => {
      await fetch(`${baseUrl}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*"
        }
      })
        .then((response) => {
          if (response.ok) {
            response.json().then((json) => {
              //console.log(json.data[0].selected_farm);
            setChart(json.data[0].selected_farm[0])
            });
          }
        }).catch((error) => {
          console.log(error);
        });
    };
    fetchCoins()
  }, [baseUrl])

  console.log("chart", chart);
  var data = {
    labels: chart?.tvlStakedHistory?.map(x => x.date),
    datasets: [{
      label: 'Asset TVL',
      data: chart?.tvlStakedHistory?.map(x => x.value%100),
      color: 'rgb(255, 255, 255)',
      backgroundColor: 'rgb(169, 39, 234)',
      borderColor: 'rgb(169, 39, 234)',
      tension: 0.4,
    }]
  };

  var options = {
    maintainAspectRatio: false,
    scales: {
        x: {
            ticks: {
                color: "cyan",
            }
        },
        y: {
            ticks: {
              color: "cyan",
            }
          },
    },
    legend: {
      labels: {
        fontSize: 25,
        color: 'blue',
      },
    },
  }

  return (
    <div>
      <Line
        data={data}
        height={400}
        options={options}

      />
    </div>
  )
}

export default AssetTvl