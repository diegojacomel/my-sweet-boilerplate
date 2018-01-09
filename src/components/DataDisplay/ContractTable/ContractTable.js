import React, { Component } from 'react';

import { Table, Button } from 'reactstrap'

import ContractTableDetails from '../ContractTableDetails/ContractTableDetails'

import './ContractTable.scss'


class ContractTable extends Component {
    state = { visible: false }    

    showDetails() {
        this.setState ({
            visible: !this.state.visible,
        })
    }

    render() {
        return (
            <div>
                <Table>
                    <thead>
                    <tr>
                        <th>Data Solicitação</th>
                        <th>Agendamento</th>
                        <th>Usuário</th>
                        <th>Início Processamento</th>
                        <th>Fim Processamento</th>
                        <th>Status</th>
                        <th>Mensagem</th>
                        <th>Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>
                                <Button onClick={() => this.showDetails()} color="primary">
                                    Abrir
                                </Button>
                            </td>
                        </tr>
                        <tr>
                           <td colSpan="8">
                               <ContractTableDetails visible={this.state.visible} />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default ContractTable