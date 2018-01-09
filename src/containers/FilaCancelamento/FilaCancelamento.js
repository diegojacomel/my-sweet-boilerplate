import React, { Component } from 'react'

import PanelDefault from '../../components/Layout/PanelDefault/PanelDefault'
import ContractFormSearch from '../../components/DataEntry/ContractFormSearch/ContractFormSearch'
import ContractSummary from '../../components/DataDisplay/ContractSummary/ContractSummary'
import ContractCancel from '../../components/DataEntry/ContractCancel/ContractCancel'
import ContractTable from '../../components/DataDisplay/ContractTable/ContractTable'


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