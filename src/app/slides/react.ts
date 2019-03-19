import { Component } from '@angular/core';


import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';

@Component({
  template: `
    <tcc-master-regular headline="React">
      <div>
        <pre markdown>
          * <a href="https://react-pdf.org/" target="_blank">React PDF</a>: Bibliothek um deklarativ PDFs zu erzeugen
        </pre>
        <tcc-code language="tsx" [code]="pdf"></tcc-code>
      </div>
    </tcc-master-regular>
    <tcc-speaker-notes *ngxPresentSpeakerNotes>
      <pre markdown>
      </pre>
    </tcc-speaker-notes>
  `
})
export class ReactPdfSlide {
  pdf = `
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { flexDirection: 'row', backgroundColor: '#E4E4E4' },
  section: { margin: 10, padding: 10, flexGrow: 1 }
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}><Text>Section #1</Text></View>
      <View style={styles.section}><Text>Section #2</Text></View>
    </Page>
  </Document>
);
  `;
}

export const reactSlides = [
  ReactPdfSlide,
];
