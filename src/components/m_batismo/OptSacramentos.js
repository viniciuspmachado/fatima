import { useEffect, useState } from "react";

function OptSacramentos(props) {
    
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch(process.env.REACT_APP_SERVER_TZ+'/sacramentos/'+ props.id)
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
        
         <>
            {/* Tem que colocar o onChange={this.onParoquiaChange} no input abaixo: */}
            
                    {data.map((item, index) => (
                        <div>- {item.nome}{"\n"}</div>
                    ))}
        </>
    );
}

export default OptSacramentos;