import { useQuery } from "@apollo/client";
import React from "react";
// import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";
// import { QUERY_ME } from "../../utils/graphQL/queries";

function WorkoutStatisticsRunning({ chartData }) {
  // const { loading, data } = useQuery(QUERY_ME)
  // data values to plot and name
  const series = [
    {
      type: "line", // render line chart for cumulative miles
      name: "Cumul. Miles",
      data: chartData.runningData,
    }
  ];

  // chart options you want to specify
  const options = {
    chart: {
      toolbar: false,
      background: "white",
      foreColor: "black",
      stacked: true,
    //   fill: {
    //     colors: "#A02CFA",
    //   },
    },
    xaxis: {
      categories: [
        "Wk1",
        "Wk2",
        "Wk3",
        "Wk4",
        "Wk5",
        "Wk6",
        "Wk7",
        "Wk8",
        "Wk9",
      ],
    },
    yaxis: [
      // this object is for cumulative miles run
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          //   color: "#FF1654",
        },
        labels: {
          style: {
            // colors: "#FF1654",
            fontSize: "16px",
          },
        },
        title: {
          text: series[0].name,
          style: {
            // color: "#FF1654",
            fontSize: "16px",
          },
        },
      },
      // this object is for weekly distance covered
      // {
      //   opposite: true,
      //   axisTicks: {
      //     show: true,
      //   },
      //   axisBorder: {
      //     show: true,
      //     //   color: "#247BA0",
      //   },
      //   labels: {
      //     style: {
      //       // colors: "#247BA0",
      //       fontSize: "16px",
      //     },
      //   },
      //   title: {
      //     text: series[1].name,
      //     style: {
      //       // color: "#247BA0",
      //       fontSize: "16px",
      //     },
      //   },
      // },
    ],
    legend: {
      show: false,
    },
    stroke: {
      curve: "smooth",
      colors: "#A02CFA",
    },
    markers: {
      size: 3,
    },
    plotOptions: {
      bar: {
        // distributed: true,
      },
    },
  };

  return (
    <div className="mx-1 col-3 col-xl-4 col-lg-5 border border-info border-2">
    <div className="card">
        <div className="card-header pb-0 border-0">
            <span className="p-3 mr-3 rounded bg-secondary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip1)">
                    <path d="M0.988957 17.0741C0.328275 17.2007 -0.104585 17.8386 0.0219823 18.4993C0.133362 19.0815 0.644694 19.4865 1.21678 19.4865C1.29272 19.4865 1.37119 19.4789 1.44713 19.4637L6.4592 18.5018C6.74524 18.4461 7.00091 18.2917 7.18316 18.0639L9.33481 15.3503L8.61593 14.9832C8.08435 14.7149 7.71475 14.2289 7.58818 13.6391L5.55804 16.1983L0.988957 17.0741Z" fill="white"></path>
                    <path d="M18.84 6.49306C20.3135 6.49306 21.508 5.29854 21.508 3.82502C21.508 2.3515 20.3135 1.15698 18.84 1.15698C17.3665 1.15698 16.1719 2.3515 16.1719 3.82502C16.1719 5.29854 17.3665 6.49306 18.84 6.49306Z" fill="white"></path>
                    <path d="M13.0179 3.15677C12.7369 2.86819 12.4762 2.75428 12.1902 2.75428C12.0864 2.75428 11.9826 2.76947 11.8712 2.79479L7.29203 3.88073C6.6592 4.03008 6.26937 4.66545 6.41872 5.29576C6.54782 5.83746 7.02877 6.20198 7.56289 6.20198C7.65404 6.20198 7.74514 6.19185 7.8363 6.16907L11.7371 5.24513C11.9902 5.52611 13.2584 6.90063 13.4888 7.14364C11.8763 8.87002 10.2639 10.5939 8.65137 12.3202C8.62605 12.3481 8.60329 12.3759 8.58049 12.4038C8.10966 13.0037 8.25397 13.9454 8.96275 14.3023L13.9064 16.826L11.3397 20.985C10.9878 21.5571 11.165 22.3064 11.7371 22.6608C11.9371 22.7848 12.1573 22.843 12.375 22.843C12.7825 22.843 13.1824 22.638 13.4128 22.2659L16.6732 16.983C16.8529 16.6919 16.901 16.34 16.8074 16.0135C16.7137 15.6844 16.4884 15.411 16.1821 15.2566L12.8331 13.553L16.3543 9.78636L19.0122 12.0393C19.2324 12.2266 19.5032 12.3177 19.7716 12.3177C20.0601 12.3177 20.3487 12.2114 20.574 12.0038L23.6243 9.16112C24.1002 8.71814 24.128 7.97392 23.685 7.49803C23.4521 7.24996 23.1383 7.12339 22.8244 7.12339C22.5383 7.12339 22.2497 7.22717 22.0245 7.43727L19.7412 9.56107C19.7386 9.56361 14.0178 4.18196 13.0179 3.15677Z" fill="white"></path>
                    </g>
                    <defs>
                    <clipPath id="clip1">
                    <rect width="24" height="24" fill="white"></rect>
                    </clipPath>
                    </defs>
                </svg>
            </span>
            <div className="mr-auto pr-3">
                <h4 className="text-black fs-20">Running</h4>
                <p className="fs-13 mb-0 text-black">Lorem ipsum dolor sit amet, consectetur</p>
            </div>
        </div>
        <div className="card-body pb-0">
        <Chart options={options} series={series} type="line"/>
        </div>
    </div>
</div>

  );
}

export default WorkoutStatisticsRunning;
