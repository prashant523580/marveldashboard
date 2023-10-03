
import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';


interface ChartTwoState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartTwo = ({data} : any) => {
  // console.log(data)
  const [state] = useState<ChartTwoState>({
    series: [
      {
        name: 'Available',
        data: [data.comics.available,data.stories.available,data.series.available],
      },
    ],
  });
  const [options] = React.useState<ApexOptions>({
    colors: ['#80CAEE'],
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      type: 'bar',
      height: 335,
      foreColor:"#444444",
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
      categories: ["Comics","Stories","Stories"],
      type: 'category',
      // labels: {
      //   datetimeFormatter: {
      //     year: 'yyyy',
      //     month: 'MMM',
      //     day: 'dd',
      //     hour: 'HH:mm',
      //   },
      // },
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
  })
 

  return (
    typeof window !== "undefined" ?
    <div className=" rounded-sm border border-stroke bg-white p-8 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-8">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black ">
            Insliglt
          </h4>
        </div>
        <div>
       
        </div>
      </div>

      <div>
        <div id="chartTwo" className="-ml-5 -mb-9">
          {/* <ParentComponent/> */}
          <ReactApexChart
            options={options}
            series={state.series}
            type="bar"
            height={350}
            
          />
        </div>
      </div>
    </div> : null
  );
};

export default ChartTwo;
