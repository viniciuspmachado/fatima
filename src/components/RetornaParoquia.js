import { useEffect, useState } from "react";

function RetornaParoquia(props) {
    
    const [data, setData] = useState([]);
    const ender = 'http://localhost:3001/paroquia/'+ props.id
    //console.log('Endereço=>>', ender);
    const fetchData = () => {
        fetch(ender)
        .then((response) => response.json())
        .then((actualData) => {
            //console.log(ender);
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
        
        <td>{data.nome}</td>
                            
    );
}

export default RetornaParoquia;