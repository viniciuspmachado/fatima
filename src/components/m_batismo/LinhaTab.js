import { useState, useEffect, useCallback } from "react";
import {Table} from "reactstrap";
import RetornaParoquia from "../m_batismo/RetornaParoquia";
import RemoveNull from "../RemoveNull";
import Casados from "../m_batismo/Casados";
import TipoPartic from "./TipoPartic";

function LinhaTab(props) {
    
    const dataselz = props.datasel.replaceAll("/","-");
    const [data, setData] = useState([]);
    
       const fetchData = useCallback(() => {
            fetch(process.env.REACT_APP_SERVER_TZ +'/participantes/'+ dataselz)
            .then((response) => response.json())
            .then((actualData) => {
                setData(actualData);
            })
            .catch((err) => {
                //console.log(err.message);
            });
       }, [dataselz]);

       useEffect(() => {
        fetchData();
        }, [fetchData]);
        //console.log(data == 'nada');

    
    if (data !== 'nada'){
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
    } else {
        return (
            <div>
                Não há pessoas registradas para essa data.
            </div>
        )
    }
}

export default LinhaTab;