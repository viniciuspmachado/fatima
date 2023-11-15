import { useEffect, useState, useCallback, Suspense } from "react";
import RemoveNull from "../RemoveNull";
import Casados from "./Casados";
import TipoPartic from "./TipoPartic";
import FezECC from "./FezECC";
import {Text, View, StyleSheet} from "@react-pdf/renderer";
import Loader from '../../layouts/loader/Loader';
import RetornaParoquiaPDF from "./RetornaParoquiaPDF";
import OptSacramentos from "./OptSacramentos";

function LinhaTabPDF_det(props) {
    
    //dotenv.config()
    //alert(process.env.REACT_APP_SERVER_TZ);
    const styles = StyleSheet.create({
        
          row: {
            display: 'flex',
            flexDirection: 'row',
            borderTop: '1px solid #EEE',
            paddingTop: 8,
            paddingBottom: 8,
          },
          // So Declarative and unDRY 👌
          row1: {
            width: '5%',
          },
          row2: {
            width: '23%',
            fontFamily: 'Helvetica-Bold',
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
            fontFamily: 'Helvetica-Bold',
          },
          row7: {
            width: '10%',
          },
          
      });
    const dataselz = props.datasel.replaceAll("/","-");
    const [data, setData] = useState([]);
    const fetchData = useCallback(() => {
      console.log(process.env.REACT_APP_SERVER_TZ+'/participantes/', dataselz);
      fetch(process.env.REACT_APP_SERVER_TZ+'/participantes/'+ dataselz)
      .then((response) => response.json())
      .then((actualData) => {
          setData(actualData);
      })
      .catch((err) => {
          console.log(err.message);
      });
  }, [dataselz]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    console.log(data !== 'nada')
    
    if (data !== 'nada'){
        return (
          <Suspense fallback={<Loader />}>
              <div>
                  {data.map((item, index) => (
                    <View style={styles.row} wrap={false}>
                      <Text style={styles.row1}>{[item.id]}</Text>
                      <Text style={styles.row2}>
                          <RemoveNull nome={[item.nome_ele]}/>{"\n\n"}
                          <RemoveNull nome={[item.nome_ela]}/>
                      </Text>
                      <Text style={styles.row3}>
                        Casados:<Text style={{ fontFamily: 'Helvetica-Bold' }}>{"\n"}<Casados casados={[item.casados]}/>{"\n\n"}</Text>
                        ECC:<Text style={{ fontFamily: 'Helvetica-Bold' }}>{"\n"}<FezECC tp={[item.ecc]}/></Text>
                      </Text>
                      <Text style={styles.row4}>
                          Participação:<Text style={{ fontFamily: 'Helvetica-Bold' }}>{"\n"}<TipoPartic tp={[item.t_participacao]}/>{"\n\n"}</Text>
                          Paróquia:<Text style={{ fontFamily: 'Helvetica-Bold' }}>{"\n"}<RetornaParoquiaPDF id={[item.paroquia]}/></Text>
                      </Text>
                      <Text style={styles.row5}><Text style={{ fontFamily: 'Helvetica-Bold' }}><OptSacramentos id={[item.id]} /></Text></Text>
                      <Text style={styles.row6}>{[item.endereco]}</Text> 
                      <Text style={styles.row7}>
                        Cidade:<Text style={{ fontFamily: 'Helvetica-Bold' }}>{"\n"}{[item.cidade]}{"\n\n"}</Text>
                        Telefone:<Text style={{ fontFamily: 'Helvetica-Bold' }}>{"\n"}{[item.telefone]}</Text>
                        </Text> 
                      </View>
                  ))}
              </div>
            </Suspense>
            
          
        );
      } else {
        return (
          <div>
             <View style={styles.row} wrap={false}>
             <Text style={styles.row1}>Não há pessoas registradas para essa data.</Text>
             </View>
          </div>
        ) 
      }
}

export default LinhaTabPDF_det;