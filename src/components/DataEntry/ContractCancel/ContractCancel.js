import React, { Component } from 'react'
import { Form, reduxForm, Field } from 'redux-form'
import { Row, Col, Button, ButtonGroup, Label } from 'reactstrap'

import FormControl from '../../Layout/FormControl/FormControl'
import Icon from '../../General/Icon/Icon'

import './ContractCancel.scss'

class ContractCancel extends Component {
    render() {
        return (
            <div className="ContractCancel">
                <Form onSubmit={() => {return}}>
                    <ButtonGroup>
                        <Button>
                            Cancelar apenas contrato informado
                        </Button>
                        <Button>
                            Cancelar contrato informado e suas filiais
                        </Button>
                        <Button>
                            Cancelar contrato informado e todos os contratos do grupo
                        </Button>
                    </ButtonGroup>
                    <div className="ContractCancel-item">
                        <Row>
                            <Col lg="5">
                                <FormControl display="block">
                                    <Label>
                                        Novo Contrato Mãe Matriz
                                    </Label>
                                    <Field
                                        name="ContratoMae"
                                        placeholder="Digite o número do contrato"
                                        component="input"
                                        type="text"
                                        className="Field" />
                                </FormControl>
                            </Col>
                            <Col lg="5">
                                <FormControl display="block">
                                    <Label>
                                        Novo Contrato Mãe Matriz
                                    </Label>
                                    <Field
                                        name="ContratoMae"
                                        placeholder="Digite o número do contrato"
                                        component="input"
                                        type="text"
                                        className="Field" />
                                </FormControl>
                            </Col>
                        </Row>
                    </div>
                    <div className="ContractCancel-item">
                        <Row>
                            <Col lg="5">
                                <FormControl display="block">
                                    <Label>
                                        Novo Contrato Mãe Matriz
                                    </Label>
                                    <Field
                                        name="ContratoMae"
                                        placeholder="Digite o número do contrato"
                                        component="input"
                                        type="text"
                                        className="Field" />
                                </FormControl>
                            </Col>
                            <Col lg="5">
                                <FormControl display="block">
                                    <Label>
                                        Novo Contrato Mãe Matriz
                                    </Label>
                                    <Field
                                        name="ContratoMae"
                                        placeholder="Digite o número do contrato"
                                        component="input"
                                        type="text"
                                        className="Field" />
                                </FormControl>
                            </Col>
                        </Row>
                    </div>
                    <Button color="warning" size="lg">
                        <Icon tag="hammer" />
                        Cancelar contrato
                    </Button>
                </Form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'ContractCancel'
})(ContractCancel)