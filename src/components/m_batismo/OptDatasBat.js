import { useEffect, useState } from "react";

function OptDatasBat() {
    
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
    
    return (
        
         <optgroup label="Selecione a data">
            
                    {data.map((item, index) => (
                        //<option value={item.id}>{item.id}</option>
                        //<option value={item.id}>{new Date(item.data).toLocaleTimeString('pt-BR')}</option>
                        //<option value={item.id}>{"0"+new Date(item.data).getDay()+"/"+new Date(item.data).getMonth()+"/"+new Date(item.data).getYear()}</option>
                        <option value={item.data}>{item.data}</option>
                    ))}
        </optgroup>
    );
}

export default OptDatasBat;