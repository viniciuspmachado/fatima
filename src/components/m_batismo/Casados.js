

function Casados(props) {
    const casados = props.casados[0];
    //console.log('props'+casados);
    if (casados === '1') {
        return ('Sim'); 
    } else
        return ('Não') ;
    }

export default Casados;