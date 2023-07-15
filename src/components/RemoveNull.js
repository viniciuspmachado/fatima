

function RemoveNull(props) {
    const ehNull = props.nome;
    if (ehNull != 'null') {
        return (ehNull); 
    }  
        return (<center>-</center>);
    }

export default RemoveNull;