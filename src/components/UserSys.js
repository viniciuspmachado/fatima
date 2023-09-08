import { useEffect, useState } from "react";
import {Table} from "reactstrap";
import RemoveNull from "../components/RemoveNull";
import { Link } from "react-router-dom";


function UserSys() {
    
    const [data, setData] = useState([]);

    const fetchData = () => {
        //alert(process.env.REACT_APP_SERVER_TZ)
        fetch(process.env.REACT_APP_SERVER_TZ+'/usersys')
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
    
    const apaga = (dataid) => {
        alert('Data excluída!')
        fetch(process.env.REACT_APP_SERVER_TZ+'/deleta_dt/'+dataid)
        .then((response) => response.json())
        window.location.replace (process.env.REACT_APP_SERVER_APP+'/#/CadastroDatas');
        window.location.reload();
      };

    return (
        
        <Table bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Login</th>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Pastoral</th>
                  <th>Aprovado?</th>
                  <th>Ações</th>
                  
                </tr>
              </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr>
                            <th scope="row">{item.id}</th>
                            <td><RemoveNull nome={[item.login]}/></td>
                            <td><RemoveNull nome={[item.nome]}/></td>
                            <td><RemoveNull nome={[item.email]}/></td>
                            <td><RemoveNull nome={[item.perm]}/></td>
                            <td><RemoveNull nome={[item.aprov]}/></td>
                            <td><Link to="" onClick={() => apaga(item.id)}>
                                    <i class="bi bi-person-x-fill" title='Excluir Usuário'></i>
                                </Link>
                                &nbsp;&nbsp;
                                <Link to="" onClick={() => apaga(item.id)}>
                                    <i class="bi bi-person-check-fill" title='Aprova Usuário'></i>
                                </Link>
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

         
    );
}

export default UserSys;