import { useEffect, useState, useCallback, Suspense } from "react";
import RemoveNull from "../RemoveNull";
import Casados from "./Casados";
import TipoPartic from "./TipoPartic";
import FezECC from "./FezECC";
import {Text, View, StyleSheet} from "@react-pdf/renderer";
import Loader from '../../layouts/loader/Loader';

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
                        Casados:{"\n"}<Casados casados={[item.casados]}/>{"\n\n"}
                        ECC:{"\n"}<FezECC tp={[item.ecc]}/>
                      </Text>
                      <Text style={styles.row4}>
                          Participação:{"\n"}<TipoPartic tp={[item.t_participacao]}/>{"\n\n"}
                          Paróquia:{"\n"}{[item.paroquia]}
                        </Text>
                      <Text style={styles.row5}>Sacramentos</Text>
                      <Text style={styles.row6}>{[item.endereco]}</Text> 
                      <Text style={styles.row7}>
                        Cidade:{"\n"}{[item.cidade]}{"\n\n"}
                        Telefone:{"\n"}{[item.telefone]}
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