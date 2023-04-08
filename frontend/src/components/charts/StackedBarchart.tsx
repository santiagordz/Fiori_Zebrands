import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Definición de la interfaz para las propiedades del componente
interface ChartData {
  data: {
    status: string;
    total: number;
  }[];
}

export default class Example extends PureComponent<ChartData> {

  render() {
    const { data } = this.props; // Extrae el prop 'data' de las propiedades del componente

    return (
      <BarChart
        width={600}
        height={500}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="status" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="total_story_points" fill="#8884d8" />
      </BarChart>
    );
  }
}

