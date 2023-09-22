import { useEffect, useState } from "react";
import {Table, Modal, ModalHeader, ModalBody, ModalFooter, Button} from "reactstrap";
import RemoveNull from "../components/RemoveNull";
import { Link } from "react-router-dom";
import React from 'react';


class UserSys extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            rota: '/caduser',
            message: '',
            t_message: '',
            modal: false,
            
        }
        this.toggle = this.toggle.bind(this);
    };
    
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
    
    onMudaMessagem (mess) {
        this.setState((state) => {
          // Importante: use `state` em vez de `this.state` quando estiver atualizando.
          return {message: mess}
        });
      };
      
      onMudaTitulo (mess) {
        this.setState((state) => {
          // Importante: use `state` em vez de `this.state` quando estiver atualizando.
          return {t_message: mess}
        });
      };
      
     

    render() {
    
        const data ='';
        const response ='';

        
            //alert(process.env.REACT_APP_SERVER_TZ)
            fetch(process.env.REACT_APP_SERVER_TZ+'/usersys')
            .then((response) => response.json())
            .then((data) => {
                //console.log(actualData);
                //setData(data);
                console.log(data);

            })
            .catch((err) => {
                console.log(err.message);
            });
        

        
        //    fetchData();
        
        
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
            alert('Usuário Excluído!')
            fetch(process.env.REACT_APP_SERVER_TZ+'/deleta_user/'+dataid)
            .then((response) => response.json())
            window.location.replace (process.env.REACT_APP_SERVER_APP+'/#/GestUsers');
            window.location.reload();
        };

        const autoriza = (dataid) => {
            alert('Permissão concedida ao usuário!')
            fetch(process.env.REACT_APP_SERVER_TZ+'/autoriza_user/'+dataid)
            .then((response) => response.json())
            window.location.replace (process.env.REACT_APP_SERVER_APP+'/#/GestUsers');
            window.location.reload();
        };
        return (
            <div>
                <div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop="static">
                        <ModalHeader toggle={this.toggle}>{this.state.t_message}</ModalHeader>
                        <ModalBody>
                        {this.state.message}
                        </ModalBody>
                        <ModalFooter>
                        <Button color="primary" onClick={this.paginaPrincipal}>OK</Button>{' '}
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
    };
                
};

export default UserSys;