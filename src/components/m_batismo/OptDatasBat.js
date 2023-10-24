import { useEffect, useState } from "react";

function OptDatasBat() {
    const [data, setData] = useState([]);

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

    function dataAtualFormatada(dataz){
        var data = dataz,
            dia  = data.getDate().toString(),
            diaF = (dia.length == 1) ? '0'+dia : dia,
            mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
            mesF = (mes.length == 1) ? '0'+mes : mes,
            anoF = data.getFullYear();
        return diaF+"/"+mesF+"/"+anoF;
    }
    

    const fetchData = () => {
        fetch(process.env.REACT_APP_SERVER_TZ+'/datasbat')
        .then((response) => response.json())
        .then((actualData) => {
            

            var zzz = [];
            for (var key in actualData) {
                zzz.push(converterDataStringParaData(actualData[key].data));
            }
            zzz = zzz.sort(function (a, b) {
                return a > b;
            });
            //console.log(zzz);

            var aaa = [];
            for (var key in zzz) {
                aaa.push(dataAtualFormatada(zzz[key]));
            }

            //console.log(aaa);

            setData(aaa);
            
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
                    {console.log(data)}
                    {data.map((item, index) => (
                        //<option value={item.id}>{item.id}</option>
                        //<option value={item.id}>{new Date(item.data).toLocaleTimeString('pt-BR')}</option>
                        //<option value={item.id}>{"0"+new Date(item.data).getDay()+"/"+new Date(item.data).getMonth()+"/"+new Date(item.data).getYear()}</option>
                        <option key={index} value={item}>{item}</option>
                    ))}
        </optgroup>

            
    );
}

export default OptDatasBat;