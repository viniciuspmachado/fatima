import { useEffect, useState } from "react";
import {FormGroup, Input} from "reactstrap";
import RetornaParoquia from "./RetornaParoquia";
import RemoveNull from "./RemoveNull";
import Casados from "./Casados";
import TipoPartic from "./TipoPartic";

function OptParoquias() {
    
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch('http://localhost:3001/paroquias')
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
        <FormGroup>
            {/* Tem que colocar o onChange={this.onParoquiaChange} no input abaixo: */}
            <Input id="dataSelect" name="paroquia" type="select" >
                    {data.map((item, index) => (
                        <option value={item.id}>{item.nome}</option>
                    ))}
            </Input>
        </FormGroup>
    );
}

export default OptParoquias;