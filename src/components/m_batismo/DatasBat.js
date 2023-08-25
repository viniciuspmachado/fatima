import { useEffect, useState } from "react";
import {Table} from "reactstrap";
import RemoveNull from "../RemoveNull";
import { Link } from "react-router-dom";


function DatasBat() {
    
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch('http://localhost:3001/datasbat')
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
    
    const apaga = (dataid) => {
        alert('Data excluída!')
        fetch('http://localhost:3001/deleta_dt/'+dataid)
        .then((response) => response.json())
        window.location.replace ('http://localhost:3000/#/CadastroDatas');
        window.location.reload();
        /* this.setState({datap: event.target.value});
        const dataselz = event.target.value.replaceAll("/","-");
        window.location.replace ("http://localhost:3000/#/InscBatismo?data="+dataselz);
        window.location.reload(); */
      };

    return (
        
        <Table bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Data</th>
                  <th>Excluir</th>
                  
                </tr>
              </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr>
                            <th scope="row">{item.id}</th>
                            <td><RemoveNull nome={[item.data]}/></td>
                            <td><Link to="" onClick={() => apaga(item.id)}><i class="bi bi-calendar-x-fill"> </i></Link></td>
                        </tr>
                    ))}
                </tbody>
            </Table>

         
    );
}

export default DatasBat;