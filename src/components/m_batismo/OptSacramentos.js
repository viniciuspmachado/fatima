import { useEffect, useState } from "react";

function OptSacramentos() {
    
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch(process.env.REACT_APP_SERVER_TZ+'/paroquias')
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
        
         <optgroup label="Selecione a paróquia que frequenta">
            {/* Tem que colocar o onChange={this.onParoquiaChange} no input abaixo: */}
            
                    {data.map((item, index) => (
                        <option value={item.id}>{item.nome}</option>
                    ))}
        </optgroup>
    );
}

export default OptSacramentos;