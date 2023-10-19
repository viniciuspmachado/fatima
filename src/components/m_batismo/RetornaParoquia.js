import { useEffect, useState, useCallback } from "react";

function RetornaParoquia(props) {
    
    const [data, setData] = useState([]);
    const ender = process.env.REACT_APP_SERVER_TZ+'/paroquia/'+ props.id
    //console.log('Endereço=>>', ender);
    const fetchData = useCallback(() => {
        fetch(ender)
            .then((response) => response.json())
            .then((actualData) => {
                setData(actualData);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [ender]);

    useEffect(() => {
        fetchData();
    }, [fetchData]); 
    
    return (
        
        <td>{data.nome}</td>
                            
    );
}

export default RetornaParoquia;