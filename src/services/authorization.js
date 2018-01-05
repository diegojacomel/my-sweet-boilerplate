//import Api from '../utils/api';

class AuthorizationService {
    static getMenu(userId) {
        return {
            "sucesso": true,
            "mensagem": "string",
            "data": [
                {
                    "id": "1",
                    "nome": "Menu 1",
                    "recurso": "string",
                    "itens": [
                        {
                            "id": "2",
                            "nome": "Submenu 1.1",
                            "recurso": "string",
                            "itens": [
                                {
                                    "id": "3",
                                    "nome": "Submenu 1.1.1",
                                    "recurso": "string",
                                    "itens": []
                                },
                                {
                                    "id": "4",
                                    "nome": "Submenu 1.1.2",
                                    "recurso": "string",
                                    "itens": []
                                }
                            ]
                        },
                        {
                            "id": "5",
                            "nome": "Submenu 1.2",
                            "recurso": "string",
                            "itens": []
                        },
                        {
                            "id": "6",
                            "nome": "Submenu 1.3",
                            "recurso": "string",
                            "itens": []
                        }
                    ]
                },
                {
                    "id": "7",
                    "nome": "Menu 2",
                    "recurso": "string",
                    "itens": [
                        {
                            "id": "8",
                            "nome": "Submenu 2.1.1",
                            "recurso": "string",
                            "itens": []
                        },
                        {
                            "id": "9",
                            "nome": "Submenu 2.1.2",
                            "recurso": "string",
                            "itens": []
                        }
                    ]
                },
                {
                    "id": "10",
                    "nome": "Menu 3",
                    "recurso": "string",
                    "itens": []
                },
                {
                    "id": "11",
                    "nome": "Menu 4",
                    "recurso": "string",
                    "itens": []
                }
            ]
        }
        //return Api.get('/users');
    }
}

export default AuthorizationService;