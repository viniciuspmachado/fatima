import { useEffect, useState } from "react";
import {Table, Modal, ModalHeader, ModalBody, ModalFooter, Button} from "reactstrap";
import RemoveNull from "../components/RemoveNull";
import { Link } from "react-router-dom";


function UserSys() {
    
    const [data, setData] = useState([]);

    //Rotina para fechar e abrir modal
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    //Rotina para passar mensagem
    const [mess, setMess] = useState('Conteúdo');
    const handleMess = (pMess) => {
        setMess(pMess);
    };

    const fetchData = () => {
        fetch(process.env.REACT_APP_SERVER_TZ+'/usersys')
        .then((response) => response.json())
        .then((actualData) => {
            setData(actualData);

        })
        .catch((err) => {
            console.log(err.message);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    function r_aprov (numz) {
        numz = JSON.stringify(numz);
        numz = numz[1];
        if (numz !== '1'){
                return 'Não';
            } else {
                return 'Sim';
            };
    }

    function r_paro (numz) {
        numz = JSON.stringify(numz);
        numz = numz[1]
        switch (numz) {
            case '0':
                return 'Administrador';
            case '1':
                return "Batismo";
            case '2':
                return "PASCOM";
            case '3':
                return "ECC";
            case '4':
                return "Dízimo";
            default:
                return "Nada";
          };
    }

    const apaga = (dataid) => {
        handleOpen();
        handleMess('Usuário Excluído!')
        fetch(process.env.REACT_APP_SERVER_TZ+'/deleta_user/'+dataid)
        .then((response) => response.json())
      };

      const autoriza = (dataid) => {
        handleMess('Permissão concedida ao usuário!')
        handleOpen();
        fetch(process.env.REACT_APP_SERVER_TZ+'/autoriza_user/'+dataid)
        .then((response) => response.json())
      };

      const atualiza = () => {
        
        window.location.replace (process.env.REACT_APP_SERVER_APP+'/#/GestUsers');
        window.location.reload(false);
      };


    return (
       
        
        <div>
            <div>
                <Modal toggle={handleClose} isOpen={open}  backdrop="static">
                    <ModalHeader toggle={handleClose}>Alerta!</ModalHeader>
                    <ModalBody>
                        {mess}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={atualiza}>OK</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
            
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
                                <td>{r_paro([item.perm])}</td>
                                <td>{r_aprov([item.aprov])}</td>
                                <td><Link to="" onClick={() => apaga(item.id)}>
                                        <i class="bi bi-person-x-fill" title='Excluir Usuário'></i>
                                    </Link>
                                    &nbsp;&nbsp;
                                    <Link to="" onClick={() => autoriza(item.id)}>
                                        <i class="bi bi-person-check-fill" title='Aprova Usuário'></i>
                                    </Link>
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
            </Table>
        </div>

         
    );
}

export default UserSys;