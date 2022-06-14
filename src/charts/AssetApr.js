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

import { faker } from '@faker-js/faker';

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
const labels = ['January 1','January 10', 'February', 'February 20', 'February 21', 'March 13', 'March 20', 'April 12', 'April 16', 'May 1', 'May 3', 'June 12', 'July 21'];


const AssetApr = () => {

  var data = {
    labels,
    datasets: [{
      label: 'Asset APR',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      color: 'rgb(255, 255, 255)',
      backgroundColor: 'rgb(169, 39, 234)',
      borderColor: 'rgb(169, 39, 234)',
      tension: 0.4,
    }]
  };

  var options = {
    maintainAspectRatio: false,
    responsive: true,
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

export default AssetApr