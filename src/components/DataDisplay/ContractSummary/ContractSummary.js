import React, { Component } from 'react'
import { Row, Col, Label } from 'reactstrap'

import './ContractSummary.scss'

export default class ContractSummary extends Component {
    render() {
        return (
            <div className="ContractSummary">
                <div className="ContractSummary-item">
                    <Row>
                        <Col lg="2">
                            <Label>
                                Número do Contrato
                            </Label>
                            <div>
                                1085454657
                            </div>
                        </Col>
                        <Col lg="5">
                            <Label>
                                Razão Social
                            </Label>
                            <div>
                                Optum Health and Technology Serviços do Brasil
                            </div>
                        </Col>
                        <Col lg="5">
                            <Label>
                                Tipo do Contrato
                            </Label>
                            <div>
                                Coletivo empresarial com patrocínio
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="ContractSummary-item">
                    <Row>
                        <Col lg="2">
                            <Label>
                                Tipo do Contrato
                            </Label>
                            <div>
                                Coletivo empresarial com patrocínio
                            </div>
                        </Col>
                        <Col lg="3">
                            <Label>
                                Tipo do Contrato
                            </Label>
                            <div>
                                Coletivo empresarial com patrocínio
                            </div>
                        </Col>
                        <Col lg="2">
                            <Label>
                                Tipo do Contrato
                            </Label>
                            <div>
                                Coletivo empresarial com patrocínio
                            </div>
                        </Col>
                        <Col lg="2">
                            <Label>
                                Tipo do Contrato
                            </Label>
                            <div>
                                Coletivo empresarial com patrocínio
                            </div>
                        </Col>
                        <Col lg="2">
                            <Label>
                                Tipo do Contrato
                            </Label>
                            <div>
                                Coletivo empresarial com patrocínio
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="ContractSummary-item">
                    <Row>
                        <Col lg="2">
                            <Label>
                                Tipo do Contrato
                            </Label>
                            <div>
                                Coletivo empresarial com patrocínio
                            </div>
                        </Col>
                        <Col lg="3">
                            <Label>
                                Tipo do Contrato
                            </Label>
                            <div>
                                Coletivo empresarial com patrocínio
                            </div>
                        </Col>
                        <Col lg="2">
                            <Label>
                                Tipo do Contrato
                            </Label>
                            <div>
                                Coletivo empresarial com patrocínio
                            </div>
                        </Col>
                        <Col lg="2">
                            <Label>
                                Tipo do Contrato
                            </Label>
                            <div>
                                Coletivo empresarial com patrocínio
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}