import { useEffect, useState } from "react";

function OptDatasBat() {
    

    function ConverterEOrdenarJSON({ json }) {
        // Função para converter a data no formato de string para o formato de data
        function converterDataStringParaData(dataString) {
            const partes = dataString.split('/');
            if (partes.length === 3) {
            const dia = parseInt(partes[0], 10);
            const mes = parseInt(partes[1], 10) - 1; // Mês é base 0 (janeiro = 0, fevereiro = 1, etc.)
            const ano = parseInt(partes[2], 10);
            return new Date(ano, mes, dia);
            }
            return null; // Retorna null se a string não estiver no formato correto
        }

        // Converter o campo "data" para o formato de data
        const jsonConvertido = { ...json }; // Cria uma cópia do JSON original
        for (const key in jsonConvertido) {
            if (jsonConvertido.hasOwnProperty(key) && jsonConvertido[key].data) {
            jsonConvertido[key].data = converterDataStringParaData(jsonConvertido[key].data);
            }
        }

        // Ordenar o JSON por data
        const chavesOrdenadas = Object.keys(jsonConvertido).sort((a, b) =>
            jsonConvertido[a].data - jsonConvertido[b].data
    );
    }


    
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch(process.env.REACT_APP_SERVER_TZ+'/datasbat')
        .then((response) => response.json())
        .then((actualData) => {
            console.log(actualData);
            
            const zzz = ConverterEOrdenarJSON(actualData);
            console.log(zzz);

            setData(actualData);
            //console.log(jsonOrdenado);
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