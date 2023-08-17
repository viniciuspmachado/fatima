import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";
  // Create styles
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "white",
      color: "black",
    },
    section: {
      margin: 10,
      padding: 10,
    },
    viewer: {
      width: window.innerWidth*0.7, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
    header: {
        margin: 10,
        padding: 10,
        textAlign: 'center',
    },
    line: {
        border: '1px solid black',
        borderRadius: '1px',
        
    },

    table: {
      width: '100%',
      margin: 10,
      padding: 10,
      fontSize:8,
    },
      tableh: {
        width: '100%',
        margin: 10,
        padding: 10,
        fontSize:8,
      },
      rowh: {
        display: 'flex',
        flexDirection: 'row',
        borderTop: '1px solid #EEE',
        paddingTop: 8,
        paddingBottom: 8,
        fontSize:12,
      },
      row: {
        display: 'flex',
        flexDirection: 'row',
        borderTop: '1px solid #EEE',
        paddingTop: 8,
        paddingBottom: 8,
      },
      headerT: {
        borderTop: 'none',
      },
      bold: {
        fontWeight: 'heavy',
      },
      // So Declarative and unDRY 👌
      row1: {
        width: '40%',
      },
      row2: {
        width: '40%',
      },
      row3: {
        width: '10%',
      },
      row4: {
        width: '10%',
      },
      row5: {
        width: '27%',
      },
      subtitulo: {
        fontSize:10,
        paddingBottom: 4,
        paddingTop: 4,
      },
      row11: {
        width: '40%',
      },
      row22: {
        width: '60%',
      },
  });
  
  // Create Document Component
  function GeraPDFdia() {
    return (
      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
          {/*render a single page*/}
          <Page size="A4" style={styles.page}>
            
            
            {/* ======== Cabeçalho ======== */}
            <View fixed style={styles.header}>
              <View style={styles.table}>
                <View style={[styles.rowh, styles.bold, styles.headerT]}>
                    <Text style={styles.row11}>Logo</Text>
                    <Text style={styles.row22}>
                      Paróquia Nossa Senhora de Fátima
                    </Text>
                </View>
                <hr style={styles.line}/>
                <Text style={styles.subtitulo}>Lista de Preparação para o Sacramento do Batismo</Text>
              </View>
            </View>

            {/* ======== Tabela Participantes ======== */}
            <View style={styles.tableh}>
                <View style={[styles.row, styles.bold, styles.headerT]}>
                    <Text style={styles.row1}>Nome Dele</Text>
                    <Text style={styles.row2}>Nome Dela</Text>
                    <Text style={styles.row3}>Casados?</Text>
                    <Text style={styles.row4}>Participação</Text>
                </View>

                <View style={styles.row} wrap={false}>
                    <Text style={styles.row1}>
                        <Text style={styles.bold}>João Pedro dos Anzóis Pereira</Text>
                    </Text>
                    <Text style={styles.row2}>Maria Joaquina dos Anzóis Pereira de Carbalho Araújo Ponte Machado de Brito</Text>
                    <Text style={styles.row3}>Sim</Text>
                    <Text style={styles.row4}>
                        <Text style={styles.bold}>Pais</Text> 
                    </Text>
                </View>

                <View style={styles.row} wrap={false}>
                    <Text style={styles.row1}>
                        <Text style={styles.bold}>Zezin dos Caracóis Silva</Text>
                    </Text>
                    <Text style={styles.row2}>Joana Doidinha Silva</Text>
                    <Text style={styles.row3}>Não</Text>
                    <Text style={styles.row4}>
                        <Text style={styles.bold}>Padrinhos</Text>
                    </Text>
                </View>

            </View>
           
          </Page>
        </Document>
      </PDFViewer>
    );
  }
  export default GeraPDFdia;