import { useEffect, useState, useCallback } from "react";
import RemoveNull from "../RemoveNull";
import Casados from "./Casados";
import TipoPartic from "./TipoPartic";
import {Text, View, StyleSheet} from "@react-pdf/renderer";

function LinhaTabPDF(props) {
    
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
    
    return (
        <div>
            {data.map((item, index) => (
              <View style={styles.row} wrap={false}>
                <Text style={styles.row1}><RemoveNull nome={[item.nome_ele]}/></Text>
                <Text style={styles.row2}><RemoveNull nome={[item.nome_ela]}/></Text>
                <Text style={styles.row3}><Casados casados={[item.casados]}/></Text>
                <Text style={styles.row4}><TipoPartic tp={[item.t_paticipacao]}/></Text> 
                </View>
            ))}
        </div>
        
       
    );
}

export default LinhaTabPDF;