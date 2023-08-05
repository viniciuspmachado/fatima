import { useEffect, useState } from "react";

function Evangelho(props) {
    
    const [data, setData] = useState([]);
    const ender = 'https://liturgia.up.railway.app/'
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
        
        //<span>Evangelho do Dia: {data.evangelho.referencia}</span>
        <span>Evangelho do Dia: {data.cor}</span>    
    );
}

export default Evangelho;