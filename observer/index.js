import { chart } from './chart.js';
import { DataSource } from './dataSource.js';
import { SpreadSheet } from './spreadSheet.js';

const dataSource = new DataSource(20);

const spreadSheet = new SpreadSheet();
const chart2 = new chart();
const chart1 = new chart();

dataSource.addObserver(spreadSheet);
dataSource.addObserver(chart2);
dataSource.addObserver(chart1);
dataSource.removerObserver(chart1);

dataSource.setValue = 2;
