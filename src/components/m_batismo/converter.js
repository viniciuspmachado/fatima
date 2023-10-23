import React from 'react';

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

  // Renderizar os itens ordenados
  return (
    <div>
      {chavesOrdenadas.map((key) => (
        <div key={key}>
          <p>ID: {jsonConvertido[key].id}</p>
          <p>Data: {jsonConvertido[key].data.toDateString()}</p>
        </div>
      ))}
    </div>
  );
}

// Exemplo de uso:
const json = {
  item1: {
    id: 5,
    data: '20/03/2023',
  },
  item2: {
    id: 3,
    data: '15/01/2023',
  },
  item3: {
    id: 7,
    data: '10/05/2023',
  },
  // Adicione mais itens conforme necessário
};

function App() {
  return (
    <div>
      <h1>JSON Convertido e Ordenado</h1>
      <ConverterEOrdenarJSON json={json} />
    </div>
  );
}

export default App;