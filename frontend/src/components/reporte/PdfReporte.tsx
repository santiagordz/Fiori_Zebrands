import {
  Document,
  Image,
  Page,
  StyleSheet,
  View,
} from '@react-pdf/renderer';
import { FC } from 'react';

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
    color: '#0055CC',
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

interface PdfReporteProps {
  reportURL: string;
}

const PdfReporte: FC<PdfReporteProps> = ({ reportURL }) => {
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <View style={styles.section}>
          <Image src={reportURL} />
        </View>
      </Page>
    </Document>
  );
};

export default PdfReporte;
