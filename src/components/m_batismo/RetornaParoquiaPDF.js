import { useEffect, useState, useCallback } from "react";

function RetornaParoquiaPDF(props) {
    
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
        
        <>{data.nome}</>
                            
    );
}

export default RetornaParoquiaPDF;