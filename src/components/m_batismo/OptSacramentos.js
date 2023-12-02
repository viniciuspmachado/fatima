import { useEffect, useState } from "react";
import { AutocompleteArrayInput } from "react-admin";

function OptSacramentos(props) {
    
    const [data, setData] = useState([]);

    //alert(props.id);

    const fetchData = () => {
        fetch(process.env.REACT_APP_SERVER_TZ+'/sacramentos/'+ props.id)
        .then((response) => response.json())
        .then((actualData) => {
            console.log("Dados==> "+actualData);
            setData(actualData);
            //console.log("Sacramento "+ props.id + ":");
            //console.log(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    //console.log("Tamanho==> "+data.length);
    //console.log("Dados==> '"+data+"'");
    if (data != 0) {
    
        return (
            <>
                {
                    
                    data.map((item, index) => ( <div>- {item.nome}{"\n"}</div> ))
                }
            </>
        );
    } else {
        return (
            <>----</>
        );
    }
}

export default OptSacramentos;