import React, { Component } from 'react';

import { Table } from 'reactstrap'

import './ContractTableDetails.scss'


class ContractTableDetails extends Component {
    state = {}

    render() {
        return (
           <Table striped className={"ContractTableDetails " + (this.props.visible ? "show" : "hide")}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>#</th>
                        <th>#</th>
                        <th>#</th>
                        <th>#</th>
                        <th>#</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Mark</td>
                        <td>Mark</td>
                        <td>Mark</td>
                        <td>Mark</td>
                        <td>Mark</td>
                        <td>Mark</td>                        
                    </tr>                    
                </tbody>
            </Table>
        );
    }
}

export default ContractTableDetails