//import Api from '../utils/api';

class AuthorizationService {
    static getMenu(userId) {
        return {
            "sucesso": true,
            "mensagem": "string",
            "data": [
                {
                    "id": "1",
                    "nome": "SISAMIL 1.0",
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
                    "nome": "Autorizações",
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
                    "nome": "Consulta de elegibilidade",
                    "icon": "search",
                    "recurso": "string",
                    "itens": []
                },
                {
                    "id": "11",
                    "nome": "TISS",
                    "icon": "update",
                    "recurso": "string",
                    "itens": []
                },
                {
                    "id": "12",
                    "nome": "Consultas e relatórios",
                    "icon": "report",
                    "recurso": "string",
                    "itens": []
                },
                {
                    "id": "13",
                    "nome": "Contas médicas",
                    "icon": "money",
                    "recurso": "string",
                    "itens": []
                },
                {
                    "id": "14",
                    "nome": "Recurso de glosa",
                    "icon": "hammer",
                    "recurso": "string",
                    "itens": []
                },
                {
                    "id": "15",
                    "nome": "Digitação de contas",
                    "icon": "display",
                    "recurso": "string",
                    "itens": []
                },
                {
                    "id": "16",
                    "nome": "Informe de rendimentos",
                    "icon": "folder",
                    "recurso": "string",
                    "itens": []
                },
                {
                    "id": "17",
                    "nome": "Agendamento online",
                    "icon": "calendar",
                    "recurso": "string",
                    "itens": []
                },
                {
                    "id": "18",
                    "nome": "OPME",
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