import React, { Component } from 'react'

import PanelDefault from '../../components/PanelDefault/PanelDefault'
import ContractFormSearch from '../../components/ContractFormSearch/ContractFormSearch'
import ContractSummary from '../../components/ContractSummary/ContractSummary'
import ContractCancel from '../../components/ContractCancel/ContractCancel'
import ContractTable from '../../components/ContractTable/ContractTable'


class FilaCancelamento extends Component {
    render() {
        return (
            <div className="FilaCancelamento">
                <PanelDefault title="Contratos">
                    <ContractFormSearch />
                </PanelDefault>
                <PanelDefault title="Resumo do contrato">
                    <ContractSummary />
                </PanelDefault>
                <PanelDefault title="Cancelamento do contrato">
                    <ContractCancel />
                </PanelDefault>
                <PanelDefault title="Fila de Cancelamento">
                    <ContractTable />
                </PanelDefault>
            </div>
        )
    } 
}

export default FilaCancelamento