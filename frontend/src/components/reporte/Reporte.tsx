import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import { FC, useState, useEffect, memo } from 'react';
import { format, utcToZonedTime } from 'date-fns-tz';
import type { chartArrayType } from './ModalReporte';
import InterRegular from '@/assets/fonts/Inter-Regular.ttf';
import InterMedium from '@/assets/fonts/Inter-Medium.ttf';
import InterSemiBold from '@/assets/fonts/Inter-SemiBold.ttf';
import InterBold from '@/assets/fonts/Inter-Bold.ttf';

Font.register({
  family: 'Inter',
  fonts: [
    {
      src: InterRegular,
      fontWeight: 400,
    },
    {
      src: InterMedium,
      fontWeight: 500,
    },
    {
      src: InterSemiBold,
      fontWeight: 700,
    },
    {
      src: InterBold,
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
  fecha: {
    marginTop: 3,
    fontSize: 8,
    fontFamily: 'Inter',
    lineHeight: 1.5,
    color: '#626f86',
  },
  text: {
    fontSize: 10,
    fontFamily: 'Inter',
    lineHeight: 1.5,
    color: '#44546f',
  },
  h1: {
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: 800,
    color: '#0055CC',
  },
  h2: {
    fontSize: 12,
    fontFamily: 'Inter',
    fontWeight: 700,
    color: '#1A3B6A',
  },
  h3: {
    fontSize: 10,
    fontFamily: 'Inter',
    fontWeight: 500,
    color: '#0B6CFF',
  },
  chartTitle: {
    fontSize: 8,
    fontFamily: 'Inter',
    fontWeight: 500,
    color: '#424242',
  },
  chartView: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 1,
  },
  chart: {
    marginTop: 10,
    width: '96%',
    height: '90%',
  },
  chartsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 180,
    marginTop: 10,
    gap: 10,
  },
  number: {
    fontSize: 10,
    fontFamily: 'Inter',
    fontWeight: 500,
    color: '#5E4DB2',
  },
});
interface ReporteProps {
  canvasSprints: chartArrayType[];
  canvasEpics: chartArrayType[];
}

type DataPropertyType = chartArrayType['data'][0];

const Reporte: FC<ReporteProps> = ({
  canvasSprints,
  canvasEpics,
}) => {
  const [sprintDoneData, setSprintDoneData] = useState<
    DataPropertyType[]
  >([]);
  const [sprintToDoData, setSprintToDoData] = useState<
    DataPropertyType[]
  >([]);
  const [epicDoneData, setEpicDoneData] = useState<
    DataPropertyType[]
  >([]);
  const [epicToDoData, setEpicToDoData] = useState<
    DataPropertyType[]
  >([]);
  const date = new Date();
  const userTimeZone =
    Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localDate = utcToZonedTime(date, userTimeZone);
  const today = format(localDate, 'dd/MM/yyyy HH:mm');

  useEffect(() => {
    if (canvasSprints.length > 0) {
      setSprintDoneData(canvasSprints[0].data);
      setSprintToDoData(canvasSprints[1].data);
    }
  }, [canvasSprints]);

  useEffect(() => {
    if (canvasEpics.length > 0) {
      setEpicDoneData(canvasEpics[0].data);
      setEpicToDoData(canvasEpics[1].data);
    }
  }, [canvasEpics]);

  const lastSprint = sprintDoneData[sprintDoneData.length - 1];

  const calculateRateOfChange = (data: DataPropertyType[]) => {
    if (data && data.length < 2) return 0;
    const lastItem = data[data.length - 1];
    const secondLastItem = data[data.length - 2];
    return (
      Number(lastItem.total_story_points) -
      Number(secondLastItem.total_story_points)
    );
  };

  const calculateAverage = (data: DataPropertyType[]) => {
    if (data && data.length === 0) return 0;
    const total = data.reduce(
      (sum, item) => sum + Number(item.total_story_points),
      0
    );
    return (total / data.length).toFixed(2);
  };

  const calculatePercentageChange = (data: DataPropertyType[]) => {
    if (data && data.length < 2) return 0;
    const lastItem = data[data.length - 1];
    const secondLastItem = data[data.length - 2];
    const change =
      Number(lastItem.total_story_points) -
      Number(secondLastItem.total_story_points);
    return (
      (change / secondLastItem.total_story_points) *
      100
    ).toFixed(2);
  };

  const sprintDoneRateOfChange =
    calculateRateOfChange(sprintDoneData);
  const sprintToDoRateOfChange =
    calculateRateOfChange(sprintToDoData);
  const epicDoneRateOfChange = calculateRateOfChange(epicDoneData);
  const epicToDoRateOfChange = calculateRateOfChange(epicToDoData);

  const sprintDoneAverage = calculateAverage(sprintDoneData);
  const sprintToDoAverage = calculateAverage(sprintToDoData);
  const epicDoneAverage = calculateAverage(epicDoneData);
  const epicToDoAverage = calculateAverage(epicToDoData);

  const sprintDonePercentageChange =
    calculatePercentageChange(sprintDoneData);
  const sprintToDoPercentageChange =
    calculatePercentageChange(sprintToDoData);
  const epicDonePercentageChange =
    calculatePercentageChange(epicDoneData);
  const epicToDoPercentageChange =
    calculatePercentageChange(epicToDoData);
  return (
    <Document>
      <Page size={'A4'} style={styles.body}>
        <View style={styles.section}>
          <View>
            <Text style={styles.h1}>
              Reporte de métricas | RetroZeb
            </Text>
            <Text style={styles.fecha}>
              Fecha de generación de reporte: {today}
            </Text>
          </View>
          <Text style={styles.text}>
            Este informe te proporcionará una visión general de cómo
            ha estado progresando el equipo en términos de rendimiento
            y eficacia en los últimos sprints. El reporte tiene como
            objetivo ayudar a entender mejor cómo se ha estado
            trabajando juntos para alcanzar las metas propuestas.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.h2}>Métricas</Text>
          <Text style={styles.text}>
            A continuación se muestran las métricas de los sprints y
            epics del proyecto. Se presentarán gráficos con
            información relevante sobre el progreso del equipo, el
            rendimiento y la eficiencia en cada sprint y epic,
            respectivamente.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.h3}>Métricas por sprint</Text>
          <Text style={styles.text}>
            En esta sección se presentan las métricas para los sprint.
          </Text>
          <View style={styles.chartsWrapper}>
            {canvasSprints.map((chart, index) => (
              <View style={styles.chartView} key={index}>
                <Text style={styles.chartTitle}>{chart.name}</Text>
                <Image
                  key={index}
                  style={styles.chart}
                  src={chart.url}
                />
              </View>
            ))}
          </View>
          <Text style={{ ...styles.text, marginTop: 10 }}>
            En el primer gráfico "Story points en Done acumulados en
            los últimos sprints" se muestra la comparación de los
            story points que, en el último Sprint{' '}
            {sprintDoneData.length > 0 && (
              <Text style={styles.text}>"{lastSprint.nombre}"</Text>
            )}
            , se alcanzó un total de story points en Done acumulados
            de{' '}
            {sprintDoneData.length > 0 && (
              <Text style={styles.number}>
                {lastSprint.total_story_points}
              </Text>
            )}
            . La tasa de cambio en los story points en Done entre los
            dos últimos sprints es de{' '}
            <Text style={styles.number}>
              {sprintDoneRateOfChange}
            </Text>{' '}
            y en To Do es de{' '}
            <Text style={styles.number}>
              {sprintToDoRateOfChange}
            </Text>
            . Además, el promedio de story points en Done por sprint
            es de{' '}
            <Text style={styles.number}>{sprintDoneAverage}</Text>,
            mientras que en To Do es de{' '}
            <Text style={styles.number}>{sprintToDoAverage}</Text>. La
            variación porcentual en los story points en Done entre los
            dos últimos sprints es del{' '}
            <Text style={styles.number}>
              {sprintDonePercentageChange}
            </Text>
            %, mientras que en To Do es del{' '}
            <Text style={styles.number}>
              {sprintToDoPercentageChange}
            </Text>
            %.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.h3}>Métricas por epic</Text>
          <Text style={styles.text}>
            En esta sección se presentan las métricas para los epic.
          </Text>
          <View style={styles.chartsWrapper}>
            {canvasEpics.map((chart, index) => (
              <View style={styles.chartView} key={index}>
                <Text style={styles.chartTitle}>{chart.name}</Text>
                <Image
                  key={index}
                  style={styles.chart}
                  src={chart.url}
                />
              </View>
            ))}
          </View>
          <Text style={styles.text}>
            Para los epics, la tasa de cambio en los story points en
            Done entre los dos últimos epics es de{' '}
            <Text style={styles.number}>{epicDoneRateOfChange}</Text>{' '}
            y en To Do es de{' '}
            <Text style={styles.number}>{epicToDoRateOfChange}</Text>.
            Además, el promedio de story points en Done por epic es de{' '}
            <Text style={styles.number}>{epicDoneAverage}</Text>,
            mientras que en To Do es de{' '}
            <Text style={styles.number}>{epicToDoAverage}</Text>. La
            variación porcentual en los story points en Done entre los
            dos últimos epics es del{' '}
            <Text style={styles.number}>
              {epicDonePercentageChange}
            </Text>
            %, mientras que en To Do es del{' '}
            <Text style={styles.number}>
              {epicToDoPercentageChange}
            </Text>
            %.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            Este reporte brinda una visión del desempeño del equipo en
            sprints y epics recientes. Usando esta información, se
            puede ajustar la planificación y metas a corto, mediano y
            largo plazo, buscando siempre la mejora continua del
            rendimiento y eficiencia del equipo.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default memo(Reporte);
