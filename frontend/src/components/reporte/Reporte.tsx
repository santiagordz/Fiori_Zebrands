import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import { FC } from 'react';

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
    flexDirection: 'row',
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Inter',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: 800,
    color: '#1A3B6A',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Inter',
    fontWeight: 700,
    color: '#1A3B6A',
    marginBottom: 10,
  },
  metricsSection: {
    marginBottom: 20,
  },
  metric: {
    fontSize: 12,
    fontFamily: 'Inter',
    fontWeight: 500,
    color: '#4B6A9B',
  },
  improvementSection: {
    backgroundColor: '#F1F5F9',
    borderRadius: 4,
    padding: 10,
  },
  improvementTitle: {
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: 700,
    color: '#1A3B6A',
    marginBottom: 5,
  },
  improvementText: {
    fontSize: 12,
    fontFamily: 'Inter',
    marginBottom: 5,
  },
});

interface Improvement {
  title: string;
  description: string;
  assignedTo: string;
}

interface Metric {
  name: string;
  value: string;
}

interface ReporteData {
  retrospectiveSummary: string;
  metrics: Metric[];
  improvements: Improvement[];
}

interface ReporteProps {
  reporteData: ReporteData;
}

const Reporte: FC<ReporteProps> = ({ reporteData }) => {
  let retrospectiveSummary;
  let metrics;
  let improvements;

  return (
    <Document>
      <Page size={'A4'} style={styles.body}>
        <View>
          <Text style={styles.title}>Reporte de Retrospectiva</Text>

          <Text style={styles.subtitle}>Resumen</Text>
          {retrospectiveSummary ? (
            <>
              <Text style={styles.text}>
                La siguiente retrospectiva se llevó a cabo con el
                objetivo de evaluar el rendimiento del equipo y
                analizar áreas de mejora. Se discutieron varios
                aspectos clave, incluyendo la calidad del código, la
                colaboración entre los miembros del equipo y la
                eficiencia en la entrega de tareas. A continuación, se
                presenta un resumen de la sesión de retrospectiva,
                incluyendo métricas clave del sprint y las mejoras
                identificadas:
              </Text>
              <Text style={styles.text}>{retrospectiveSummary}</Text>
            </>
          ) : (
            <Text style={styles.text}>
              No se proporcionó un resumen de la retrospectiva.
            </Text>
          )}

          <View style={styles.metricsSection}>
            <Text style={styles.subtitle}>Métricas</Text>
            {metrics && metrics.length > 0 ? (
              <>
                <Text style={styles.text}>
                  Las siguientes métricas clave proporcionan
                  información sobre el rendimiento del equipo durante
                  el último sprint y ayudan a identificar áreas de
                  mejora:
                </Text>
                {metrics.map((metric, index) => (
                  <Text key={index} style={styles.metric}>
                    {metric.name}: {metric.value}
                  </Text>
                ))}
              </>
            ) : (
              <Text style={styles.text}>
                No se proporcionaron métricas para el reporte.
              </Text>
            )}
          </View>

          <Text style={styles.subtitle}>Mejoras</Text>
          {improvements && improvements.length > 0 ? (
            <>
              <Text style={styles.text}>
                Basándose en la discusión y el análisis de las
                métricas, se han identificado las siguientes mejoras
                para implementar en los próximos sprints. Estas
                mejoras están diseñadas para aumentar la eficiencia
                del equipo y mejorar la calidad del trabajo entregado:
              </Text>
              {improvements.map((improvement, index) => (
                <View key={index} style={styles.improvementSection}>
                  <Text style={styles.improvementTitle}>
                    {improvement.title}
                  </Text>
                  <Text style={styles.improvementText}>
                    {improvement.description}
                  </Text>
                  <Text style={styles.improvementText}>
                    Asignado a: {improvement.assignedTo}
                  </Text>
                </View>
              ))}
            </>
          ) : (
            <Text style={styles.text}>
              No se proporcionaron mejoras para el reporte.
            </Text>
          )}
        </View>
      </Page>
    </Document>
  );
};

export default Reporte;
