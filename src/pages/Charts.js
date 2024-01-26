import React, { useContext, useEffect, useState, useMemo } from 'react';
import "../CSS/charts.css"
import { Card } from 'react-bootstrap';
import { Doughnut, Bar, PolarArea, Line, Radar, Scatter } from 'react-chartjs-2';
import { ThemeContext } from '../ThemeContext';
import Chart from 'chart.js/auto';


function Charts() {
  const { theme } = useContext(ThemeContext);
  const { borderColor } = useContext(ThemeContext);
  const { gridColor } = useContext(ThemeContext);

  const cardHeaderBGClass = `${theme}-card-header`;
  const cardBodyBGClass = `${theme}-card-body`;
  const graphBGClass = `${theme}-graphBG`;
  const cardHeaderElementClass = `${theme}-card-header-element`;


  const [headerTexts, setHeaderTexts] = useState({
    doughnut: 'Doughnut Chart',
    bar: 'Bar Chart',
    line: 'Line Chart',
    radar: 'Radar Chart',
    polar: 'Polar Chart',
    scatter: 'Scatter Chart'
  });


  useEffect(() => {
    Chart.defaults.scale.grid.color = gridColor;
    Chart.defaults.color = gridColor;
  }, [gridColor]);


  const colors = [
    'rgba(255, 99, 132, 0.8)',   // Red
    'rgba(54, 162, 235, 0.8)',   // Blue
    'rgba(255, 206, 86, 0.8)',   // Yellow
    'rgba(75, 192, 192, 0.8)',   // Green
    'rgba(153, 102, 255, 0.8)',  // Purple
    'rgba(255, 159, 64, 0.8)',   // Orange
    'rgba(255, 0, 255, 0.8)',    // Fuchsia
    'rgba(0, 255, 0, 0.8)',      // Lime
    'rgba(255, 0, 0, 0.8)',      // Red
    'rgba(0, 255, 255, 0.8)',    // Aqua
    'rgba(192, 192, 192, 0.8)',  // Silver
    'rgba(128, 128, 128, 0.8)',  // Gray
    'rgba(128, 0, 0, 0.8)',      // Maroon
    'rgba(128, 128, 0, 0.8)',    // Olive
    'rgba(0, 128, 0, 0.8)',      // Green
    'rgba(128, 0, 128, 0.8)',    // Purple
    'rgba(0, 128, 128, 0.8)',    // Teal
    'rgba(0, 0, 128, 0.8)',      // Navy
    'rgba(0, 0, 255, 0.8)',      // Blue
  ];

  const options = {
    plugins: {
      legend: {
        labels: {
          color: gridColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: gridColor,
        },
        grid: {
          color: gridColor,
        },
      },
      y: {
        ticks: {
          color: gridColor,
        },
        grid: {
          color: gridColor,
        },
      },
    },
  };

  const optionsDoughnut = {
    plugins: {
      legend: {
        labels: {
          color: gridColor,
        },
      },
    },
  };


  const doughnutData = useMemo(() => ({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: Array.from({ length: 5 }, (_, i) => ({
      label: `Doughnut Dataset ${i + 1}`,
      data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 50)),
      backgroundColor: colors,
      borderColor: borderColor,
    })),
  }), [borderColor]);


  const barData = useMemo(() => ({
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: Array.from({ length: 5 }, (_, i) => ({
      label: `Bar Dataset ${i + 1}`,
      data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 50)),
    })),
  }), []);

  const polarData = useMemo(() => ({
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: Array.from({ length: 5 }, (_, i) => ({
      label: `Polar Dataset ${i + 1}`,
      data: Array.from({ length: 4 }, () => Math.floor(Math.random() * 50)),
      backgroundColor: colors,
      borderColor: borderColor,
    })),
  }), [borderColor]);

  const lineData = useMemo(() => ({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Line Dataset 1',
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 50)),
      },
      {
        label: 'Line Dataset 2',
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 50)),
      },
      {
        label: 'Line Dataset 3',
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 50)),
      },
      {
        label: 'Line Dataset 4',
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 50)),
      },
      {
        label: 'Line Dataset 5',
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 50)),
      },
    ]
  }), []);


  const radarData = useMemo(() => ({
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: Array.from({ length: 5 }, (_, i) => ({
      label: `Radar Dataset ${i + 1}`,
      data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 50)),
    })),
  }), []);

  const scatterData = useMemo(() => ({
    datasets: [
      {
        label: 'Scatter Dataset 1',
        data: [
          { x: 10, y: 20 }, { x: 15, y: 10 }, { x: 7, y: 5 },
          { x: 10, y: 15 }, { x: 12, y: 10 }, { x: 14, y: 15 },
          { x: 16, y: 20 }, { x: 18, y: 25 }, { x: 20, y: 30 },
          { x: 22, y: 35 }, { x: 24, y: 40 }, { x: 26, y: 45 },
          { x: 28, y: 50 }, { x: 30, y: 55 }, { x: 32, y: 60 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
      {
        label: 'Scatter Dataset 2',
        data: [
          { x: 20, y: 30 }, { x: 25, y: 20 }, { x: 17, y: 15 },
          { x: 20, y: 25 }, { x: 22, y: 20 }, { x: 24, y: 25 },
          { x: 26, y: 30 }, { x: 28, y: 35 }, { x: 30, y: 40 },
          { x: 32, y: 45 }, { x: 34, y: 50 }, { x: 36, y: 55 },
          { x: 38, y: 60 }, { x: 40, y: 65 }, { x: 42, y: 70 },
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
      {
        label: 'Scatter Dataset 3',
        data: [
          { x: 30, y: 40 }, { x: 35, y: 30 }, { x: 27, y: 25 },
          { x: 30, y: 35 }, { x: 32, y: 30 }, { x: 34, y: 35 },
          { x: 36, y: 40 }, { x: 38, y: 45 }, { x: 40, y: 50 },
          { x: 42, y: 55 }, { x: 44, y: 60 }, { x: 46, y: 65 },
          { x: 48, y: 70 }, { x: 50, y: 75 }, { x: 52, y: 80 },
        ],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
      },
    ]
  }), []);



  return (
    <div className="chart-main">
      <div className='two-columns'>
        <Card className={`card doughnut-chart ${cardBodyBGClass}`}>
          <Card.Header className={cardHeaderBGClass}>
            <input
              className={cardHeaderElementClass}
              type="text"
              value={headerTexts.doughnut}
              onChange={(e) => setHeaderTexts({ ...headerTexts, doughnut: e.target.value })}
              style={{ border: 'none' }}
            />
          </Card.Header>
          <Card.Body className={`card-body ${graphBGClass}`}>
            <div className="chart-container w-100 h-100">
              <Doughnut data={doughnutData} options={{ ...optionsDoughnut, maintainAspectRatio: false }} />
            </div>
          </Card.Body>
        </Card>

        <Card className={`card bar-chart ${cardBodyBGClass}`}>
          <Card.Header className={cardHeaderBGClass} >
            <input
              className={cardHeaderElementClass}
              type="text"
              value={headerTexts.bar}
              onChange={(e) => setHeaderTexts({ ...headerTexts, bar: e.target.value })}
              style={{ border: 'none' }}
            />
          </Card.Header>
          <Card.Body className={`card-body ${graphBGClass}`}>
            <div className="chart-container w-100 h-100">
              <Bar data={barData} options={{ ...options, maintainAspectRatio: false }} />
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className='one-column'>
        <Card className={`card line-chart ${cardBodyBGClass}`}>
          <Card.Header className={cardHeaderBGClass} ><input
            className={cardHeaderElementClass}
            type="text"
            value={headerTexts.line}
            onChange={(e) => setHeaderTexts({ ...headerTexts, line: e.target.value })}
            style={{ border: 'none' }}
          /></Card.Header>
          <Card.Body className={`card-body ${graphBGClass}`}>
            <div className='chart-container w-100 h-100'>
              <Line data={lineData} options={{ ...options, maintainAspectRatio: false }} />
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className='two-columns'>

        <Card className={`card radar-chart ${cardBodyBGClass}`}>
          <Card.Header className={cardHeaderBGClass} ><input
            className={cardHeaderElementClass}
            type="text"
            value={headerTexts.radar}
            onChange={(e) => setHeaderTexts({ ...headerTexts, radar: e.target.value })}
            style={{ border: 'none' }}
          /></Card.Header>
          <Card.Body className={`card-body ${graphBGClass}`}>
            <div className='chart-container  w-100 h-100 '>
              <Radar data={radarData} options={{ maintainAspectRatio: false }} key={gridColor} />
            </div>
          </Card.Body>
        </Card>

        <Card className={`card polar-chart ${cardBodyBGClass}`}>
          <Card.Header className={cardHeaderBGClass} ><input
              className={cardHeaderElementClass}
              type="text"
              value={headerTexts.polar}
              onChange={(e) => setHeaderTexts({ ...headerTexts, polar: e.target.value })}
              style={{ border: 'none' }}
            /></Card.Header>
          <Card.Body className={`card-body ${graphBGClass}`}>
            <div className="chart-container w-100 h-100">
              <PolarArea data={polarData} options={{ maintainAspectRatio: false }} key={gridColor} />
            </div>
          </Card.Body>
        </Card>



      </div>

      <div className='one-column'>
        <Card className={`card scatter-chart ${cardBodyBGClass}`}>
          <Card.Header className={cardHeaderBGClass} ><input
              className={cardHeaderElementClass}
              type="text"
              value={headerTexts.scatter}
              onChange={(e) => setHeaderTexts({ ...headerTexts, scatter: e.target.value })}
              style={{ border: 'none' }}
            /></Card.Header>
          <Card.Body className={`card-body ${graphBGClass}`}>
            <div className="chart-container w-100 h-100">
              <Scatter data={scatterData} options={{ ...options, maintainAspectRatio: false }} />
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Charts;
