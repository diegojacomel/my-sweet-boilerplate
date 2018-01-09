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
                    "icon": "key",
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
                    "icon": "doc",
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
                    "icon": "search",
                    "recurso": "string",
                    "itens": []
                },
                {
                    "id": "11",
                    "nome": "Menu 4",
                    "icon": "update",
                    "recurso": "string",
                    "itens": []
                },
                {
                    "id": "12",
                    "nome": "Menu 5",
                    "icon": "report",
                    "recurso": "string",
                    "itens": []
                },
                {
                    "id": "13",
                    "nome": "Menu 6",
                    "icon": "money",
                    "recurso": "string",
                    "itens": []
                },
                {
                    "id": "14",
                    "nome": "Menu 7",
                    "icon": "hammer",
                    "recurso": "string",
                    "itens": []
                },
                {
                    "id": "15",
                    "nome": "Menu 8",
                    "icon": "display",
                    "recurso": "string",
                    "itens": []
                },
                {
                    "id": "16",
                    "nome": "Menu 9",
                    "icon": "folder",
                    "recurso": "string",
                    "itens": []
                },
                {
                    "id": "17",
                    "nome": "Menu 10",
                    "icon": "calendar",
                    "recurso": "string",
                    "itens": []
                },
                {
                    "id": "18",
                    "nome": "Menu 11",
                    "icon": "opme",
                    "recurso": "string",
                    "itens": []
                }
            ]
        }
        //return Api.get('/users');
    }
}

export default AuthorizationService;