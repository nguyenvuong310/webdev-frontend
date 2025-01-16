import { ApexOptions } from 'apexcharts';
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { ChartType } from '../../utils/const/chart.enum';
import { getChart } from '../../api/score.api';
interface ChartBarState {
  series: {
    name: string;
    data: number[];
  }[];
}

interface ChartBarProps {
  subject: string;
}

const ChartBar: React.FC<ChartBarProps> = ({ subject }) => {
  const [values, setValues] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  useEffect(() => {
    const fetchData = async (typeName: string) => {
      try {
        const response = await getChart(ChartType.BAR, typeName);
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
    colors: ['#3C50E0', '#80CAEE'],
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      type: 'bar',
      height: 335,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },

    responsive: [
      {
        breakpoint: 1536,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
              columnWidth: '25%',
            },
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 0,
        columnWidth: '25%',
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'last',
      },
    },
    dataLabels: {
      enabled: false,
    },

    xaxis: {
      categories: labels,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      fontFamily: 'Satoshi',
      fontWeight: 500,
      fontSize: '14px',

      markers: {
        radius: 99,
      },
    },
    fill: {
      opacity: 1,
    },
  };
  const [state, setState] = useState<ChartBarState>({
    series: [
      {
        name: 'Diem Thi THPPQG 2024',
        data: values,
      },
    ],
  });
  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      series: [
        {
          name: 'Diem Thi THPPQG 2024',
          data: values,
        },
      ],
    }));
  }, [values]);

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;
  const [parentWidth, setWidth] = useState(0);
  useEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
      setWidth(event[0].contentBoxSize[0].inlineSize);
    });

    resizeObserver.observe(document.getElementById('barChart') as Element);
  });
  return (
    <div
      id="barChart"
      className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-6 "
    >
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Profit this week
          </h4>
        </div>
      </div>

      <div>
        <div id="ChartBar" className="-ml-5 -mb-9">
          <Chart
            options={options}
            series={state.series}
            type="bar"
            width={parentWidth}
            height={320}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartBar;
