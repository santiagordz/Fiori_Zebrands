import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from '@react-pdf/renderer';
import { FC, useState, useEffect, useRef } from 'react';
import axios from 'axios';
import SameDataComposedChart from '../charts/SameDataComposedChart';
import { toPng } from 'html-to-image';

const URI = `${import.meta.env.VITE_APP_BACKEND_URI}/metricas`;

Font.register({
  family: 'Inter',
  fonts: [
    {
      src: 'http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf',
      fontWeight: 400,
    },
    {
      src: 'http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZhrib2Bg-4.ttf',
      fontWeight: 500,
    },
    {
      src: 'http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZhrib2Bg-4.ttf',
      fontWeight: 700,
    },
    {
      src: 'http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZhrib2Bg-4.ttf',
      fontWeight: 800,
    },
  ],
});

const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
    gap: 17,
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  section: {
    flexDirection: 'column',
    gap: 5,
  },
  text: {
    fontSize: 10,
    fontFamily: 'Inter',
    lineHeight: 1.5,
    color: '#172b4d',
  },
  title: {
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: 800,
    color: '#0055CC',
  },
  subtitle: {
    fontSize: 12,
    fontFamily: 'Inter',
    fontWeight: 700,
    color: '#1A3B6A',
  },
  chart: {
    width: '50%',
    height: '70%',
  },
});

interface ReporteProps {
  canvasURL: string;
}

const Reporte: FC<ReporteProps> = ({ canvasURL }) => {
  return (
    <>
      <Document>
        <Page size={'A4'} style={styles.body}>
          <View style={styles.section}>
            <Text style={styles.title}>Reporte de métricas</Text>
            <Text style={styles.text}>
              Este informe te proporcionará una visión general de cómo
              ha estado progresando nuestro equipo en términos de
              rendimiento y eficacia en los últimos sprints. El
              reporte tiene como objetivo ayudar a entender mejor cómo
              hemos estado trabajando juntos para alcanzar nuestras
              metas.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.subtitle}>Métricas</Text>
            <Text style={styles.text}>
              A continuación se muestran las métricas de los sprints y
              epics del proyecto. Se presentarán gráficos con
              información relevante sobre el progreso del equipo, el
              rendimiento y la eficiencia en cada sprint.
            </Text>
            <View style={styles.section}>
              <Text style={styles.subtitle}>
                Story points acumulados por sprint
              </Text>
              <View>
                <Image src={canvasURL} style={styles.chart} />
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </>
  );
};

export default Reporte;
