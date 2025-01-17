import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { getChart } from '../../api/score.api';
import { ChartType } from '../../utils/const/chart.enum';

interface ChartCircleProps {
  subject: string;
}
const ChartCircle: React.FC<ChartCircleProps> = ({ subject }) => {
  const [values, setValues] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  useEffect(() => {
    const fetchData = async (typeName: string) => {
      try {
        const response = await getChart(ChartType.CIRCLE, typeName);
        const data = response.data.data;
        setValues(data.values);
        setLabels(data.labels);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(subject);
  }, [subject]);
  const options: ApexOptions = {
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      type: 'donut',
    },
    colors: ['#3C50E0', '#6577F3', '#8FD0EF', '#0FADCF'],
    labels: labels,
    legend: {
      show: false,
      position: 'bottom',
    },

    plotOptions: {
      pie: {
        donut: {
          size: '65%',
          background: 'transparent',
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 2600,
        options: {
          chart: {
            width: 380,
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  return (
    <div className="sm:px-7.5 col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Circle Chart: Statistics of {subject}
          </h5>
        </div>
      </div>

      <div className="mb-2">
        <div id="ChartCircle" className="mx-auto flex justify-center">
          <ReactApexChart options={options} series={values} type="donut" />
        </div>
      </div>

      <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
        <div className="sm:w-1/2 w-full px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-primary"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> {labels[0]} </span>
              <span> {values[0]}% </span>
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 w-full px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6577F3]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> {labels[1]} </span>
              <span> {values[1]}% </span>
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 w-full px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8FD0EF]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> {labels[2]}</span>
              <span> {values[2]}% </span>
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 w-full px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#0FADCF]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> {labels[3]} </span>
              <span> {values[3]}% </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartCircle;
