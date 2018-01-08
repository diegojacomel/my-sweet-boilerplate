import React, { Component } from 'react'

import { Container } from 'reactstrap'

import './Footer.scss'

export default class Footer extends Component {
    state = {}

    render() {
        return (
            <footer className="Footer">
                <div className="Footer-top">
                    <div className="Footer-top-links">
                        <Container fluid>
                            <div className="Footer-top-links-wrap">
                                <div className="Footer-top-links-wrap-left">
                                    <ul>
                                        <li><a href="#">Fale conosco</a></li>
                                        <li><a href="#">Ouvidoria</a></li>
                                    </ul>
                                </div>
                                <div className="Footer-top-links-wrap-right">
                                    <ul>
                                        <li><a href="#">Normas ANS</a></li>
                                        <li><a href="#">Material de apoio</a></li>
                                        <li><a href="#">Perguntas Frequentes</a></li>
                                        <li><a href="#">Código de conduta</a></li>
                                        <li><a href="#">Política de privacidade</a></li>
                                        <li><a href="#">Sobre a Amil</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Container>
                    </div>
                    <div className="Footer-top-group">
                        <Container fluid>
                            <div className="Footer-top-group-wrap">
                                <h4 className="footer-top-group-wrap-title">
                                    Sites Grupo Amil
                                </h4>
                                <ul>
                                    <li>
                                        <img src="images/amil.svg" alt="Amil" />
                                    </li>
                                    <li>
                                        <img src="images/amil-dental.svg" alt="Amil Dental" />
                                    </li>
                                    <li>
                                        <img src="images/one-health.svg" alt="One Health" />
                                    </li>
                                    <li>
                                        <img src="images/next-saude.svg" alt="Next Saúde" />
                                    </li>
                                </ul>
                            </div>
                        </Container>
                    </div>
                </div>
                <div className="Footer-bottom">
                    <Container fluid>
                        <div className="Footer-bottom-wrap">
                            <div className="footer-bottom-start">
                                <img src="images/logo-ans.svg" alt="ANS" />
                            </div>
                            <div className="footer-bottom-middle">
                                <div className="footer-bottom-middle-doc">
                                    CNPJ 29.309.127/0001-79
                                </div>
                                <div className="footer-bottom-middle-copy">
                                    Copyright © 2007-2015, Amil Assistência Médica Internacional S/A. Todos os direitos reservados.
                                </div>
                            </div>
                            <div className="footer-bottom-end">
                                <img src="images/numero-ans.jpg" alt="Number ANS" />
                            </div>
                        </div>
                    </Container>
                </div>
            </footer>        
        );
    }
}