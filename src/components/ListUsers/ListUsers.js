import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import { Container, Table, Jumbotron, Button } from 'reactstrap'

import './ListUsers.scss'

class ListUsers extends Component {
    state = {}

    componentDidMount() {
        this.fetchUsers()
    }

    fetchUsers = () => {
        const { dispatch } = this.props

        dispatch({
            type: 'FETCH_USERS_REQUEST',
            // payload: {} << here we can pass data to the saga (payload name is a convention)
        });
    }

    updateUser= (id) => {
        const { dispatch } = this.props
        
        dispatch({
            type: 'UPDATE_USER_REQUEST',
            payload: {
                user: {
                    id,
                    email: 'dichinelo@amil.com',
                    name: 'Dichinelo'
                }
            }        
        })
    }

    deleteUser = (id) => {
        const { dispatch } = this.props
        
        dispatch({
            type: 'DELETE_USER_REQUEST',
            payload: {
                user: {
                    id
                }
            }
        })
    }

    renderUsers = () => {
        const { users } = this.props;

        if (users.users.isLoading) {
            return <tr><td>Loading...</td></tr>
        }

        return users.users.items.map((val, index) => {
            return (
                <tr key={index}>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td><Button onClick={() => this.deleteUser(val.id)} color="danger">Deletar</Button></td>
                    <td><Button onClick={() => this.updateUser(val.id)} color="info">Update</Button></td>
                    {/* <td>{val.phone}</td>
                    <td>{val.website}</td>
                    <td>{val.company.name}</td> */}

                </tr>
            )
        });
    }

    addUser = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch({
            type: 'ADD_USER_REQUEST',
            payload: {
                user: {
                    email: 'dicrocs@amil.com',
                    name: 'Dicrocs'
                }
            }
        })
    }

    render() {
        return (
            <div>
                <Container>
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th>Deletar</th>
                                <th>Atualizar</th>
                                {/* <th>Telefone</th>
                                <th>Nome</th>
                                <th>Nome da empresa</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderUsers()}
                        </tbody>
                    </Table>
                    <Button onClick={this.addUser}>
                        Add User
                    </Button>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(ListUsers)