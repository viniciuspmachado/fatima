import { useEffect, useState } from "react";

function OptPastorais() {
    
    const [data, setData] = useState([]);

    console.log(process.env.REACT_APP_SERVER_TZ);

    const fetchData = () => {
        fetch(process.env.REACT_APP_SERVER_TZ+'/pastorais')
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
        
         <optgroup label="Selecione a pastoral que frequenta">
            {/* Tem que colocar o onChange={this.onParoquiaChange} no input abaixo: */}
            
                    {data.map((item, index) => (
                        <option value={item.id}>{item.pastoral}</option>
                    ))}
        </optgroup>
    );
}

export default OptPastorais;