import { useEffect, useState } from "react";
import {Table} from "reactstrap";
import RetornaParoquia from "./RetornaParoquia";
import RemoveNull from "./RemoveNull";
import Casados from "./Casados";
import TipoPartic from "./TipoPartic";

function LinhaTab() {
    
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch('http://localhost:3001/participantes')
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
        <Table bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nomes</th>
                  <th>Casados?</th>
                  <th>Tipo<br/>Participação</th>
                  <th>Endereço</th>
                  <th>Paróquia</th>
                  <th>Cidade</th>
                  
                </tr>
              </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr>
                            <th scope="row">{item.id}</th>
                            <td><RemoveNull nome={[item.nome_ele]}/><br/><br/>
                            <RemoveNull nome={[item.nome_ela]}/></td>
                            <td> <Casados casados={[item.casados]}/></td>
                            <td> <TipoPartic tp={[item.t_paticipacao]}/></td>
                            <td>{item.endereco}</td>
                            <RetornaParoquia id={[item.paroquia]}/>
                            <td>{item.cidade}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
    );
}

export default LinhaTab;