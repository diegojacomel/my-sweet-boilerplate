//import Api from '../utils/api';

class AuthorizationService {
    static getMenu(userId) {
        return {
            "sucesso": true,
            "mensagem": "string",
            "itens": [
                {
                    "nome": "Menu 1",
                    "recurso": "string",
                    "itens": [
                        {
                            "nome": "Submenu 1.1",
                            "recurso": "string",
                            "itens": [
                                {
                                    "nome": "Submenu 1.1.1",
                                    "recurso": "string",
                                    "itens": []
                                },
                                {
                                    "nome": "Submenu 1.1.2",
                                    "recurso": "string",
                                    "itens": []
                                }
                            ]
                        },
                        {
                            "nome": "Submenu 1.2",
                            "recurso": "string",
                            "itens": []
                        },
                        {
                            "nome": "Submenu 1.3",
                            "recurso": "string",
                            "itens": []
                        }
                    ]
                },
                {
                    "nome": "Menu 2",
                    "recurso": "string",
                    "itens": [
                        {
                            "nome": "Submenu 2.1.1",
                            "recurso": "string",
                            "itens": []
                        },
                        {
                            "nome": "Submenu 2.1.2",
                            "recurso": "string",
                            "itens": []
                        }
                    ]
                },
                {
                    "nome": "Menu 3",
                    "recurso": "string",
                    "itens": []
                },
                {
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