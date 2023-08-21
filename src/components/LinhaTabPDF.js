import { useEffect, useState } from "react";
import {Table} from "reactstrap";
import RetornaParoquia from "./RetornaParoquia";
import RemoveNull from "./RemoveNull";
import Casados from "./Casados";
import TipoPartic from "./TipoPartic";
import {Text} from "@react-pdf/renderer";

function LinhaTabPDF(props) {
    
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
    const dataselz = props.datasel.replaceAll("/","-");
    const [data, setData] = useState([]);
    const fetchData = () => {
        console.log('http://localhost:3001/participantes/', dataselz);
        fetch('http://localhost:3001/participantes/'+ dataselz)
        .then((response) => response.json())
        .then((actualData) => {
            //console.log(actualData);
            setData(actualData);
            //console.log(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <div>
            
                <Text style={styles.row1}>
                            <Text style={styles.bold}>ert</Text>
                            </Text>
                            <Text style={styles.row2}>erter</Text>
                            <Text style={styles.row3}>erter</Text>
                            <Text style={styles.row4}>
                                <Text style={styles.bold}>ertert</Text> 
                </Text>
        
        </div>
        
       
    );
}

export default LinhaTabPDF;