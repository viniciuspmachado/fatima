import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
    Image,
  } from "@react-pdf/renderer";
  import LinhaTabPDF from "../m_batismo/LinhaTabPDF_det";
  import logoFatima from '../../assets/images/bg/logo_paroquia.jpg';
import LinhaTabPDF_det from "../m_batismo/LinhaTabPDF_det";

  // Create styles
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "white",
      color: "black",
    },
    section: {
      margin: 5,
      padding: 10,
    },
    viewer: {
      width: window.innerWidth*0.7, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
    header: {
        margin: 5,
        padding: 5,
        alignItems: 'center',
    },
    
    line: {
        border: '1px solid black',
        borderRadius: '1px',
        
    },

    table: {
      width: '100%',
      margin: 5,
      padding: 5,
      fontSize:8,
    },
      tableh: {
        width: '100%',
        margin: 4,
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
        width: '5%',
      },
      row2: {
        width: '23%',
      },
      row3: {
        width: '10%',
      },
      row4: {
        width: '15%',
      },
      row5: {
        width: '15%',
      },
      row6: {
        width: '22%',
      },
      row7: {
        width: '10%',
      },
      subtitulo: {
        fontSize:10,
        paddingBottom: 4,
        paddingTop: 4,
        textAlign: 'center',
        borderTop: '1px solid #000',
      },
      row11: {
        width: '40%',
      },
      row22: {
        width: '60%',
      },
      image: {
        width: 80,
        alignContent: 'center',
        paddingBottom: 4,
    },
    data: {
      
      fontSize:8,
    },
  });
  
  // Create Document Component
  function GeraPDFdet() {
    
    //alert(window.location.hash);
    const hash  = window.location.hash;
    const queryString = hash.substring(hash.indexOf('?'));
    //alert(queryString);
    const urlParams = new URLSearchParams(queryString);
    let data = urlParams.get('data')
    if (data != null) {
      data = data.replaceAll("-","/");
    } else {
      data = '-';  
    }
    
    return (
      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
          {/*render a single page*/}
          <Page size="A4" style={styles.page}>
            
            
            {/* ======== Cabeçalho ======== */}
            <View fixed style={styles.header}>
              <Image style={styles.image} src={logoFatima} />
              <Text style={styles.subtitulo}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Cadastro de Pais & Padrinhos
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Text>
              <Text style={styles.data}>{data}</Text>
            </View>
            

            {/* ======== Tabela Participantes ======== */}
            <View style={styles.tableh}>
                <View style={[styles.row, styles.bold, styles.headerT]}>
                    <Text style={styles.row1}>#</Text>
                    <Text style={styles.row2}>NOMEs</Text>
                    <Text style={styles.row3}>Casados/ECC</Text>
                    <Text style={styles.row4}>Participacao/Paroquia</Text>
                    <Text style={styles.row5}>Sacramentos</Text>
                    <Text style={styles.row6}>Endereço</Text>
                    <Text style={styles.row7}>Cidade/Telefone</Text>
                </View>
                
                <LinhaTabPDF_det datasel={data} />
                

            </View>
          </Page>
        </Document>
      </PDFViewer>
    );
  }
  export default GeraPDFdet;