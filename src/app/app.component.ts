import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'HOME', action: this.onClick.bind(this) },
    { label: 'ACESSO', subItems: [
        { label: 'Entrada'},
        { label: 'Desconectar' },
        { label: 'Registro de Ausência' }
    ] },

    { label: 'CONSULTAS', subItems: [
        { label: 'Verificar Conflitos de Endereço' },
        { label: 'Consultar Contribuinte' },
        { label: 'Consultar Histórico Contribuinte' },
        { label: 'Consultar por Endereço' },
        { label: 'Consultar Procuração Ativa' },
        { label: 'Consultar Situação Econômica' },
        { label: 'Consultar Contribuinte - SSP' },
        { label: 'Consultar Histórico Contribuinte - SSP' },
        { label: 'Consultar Painel Gerencial' },
        { label: 'Consultar Sócio' },
        { label: 'Relatórios', subItems: [
              { label: 'Espelho do Contribuinte' }
        ] }
    ] },

    { label: 'GESTÃO', subItems: [
        { label: 'Gerenciar Solicitações' },
        { label: 'Gerenciar Funcionários' },
        { label: 'Gerenciar Eventos Ocorridos' },
        { label: 'Atualizar Registro do Contribuinte' },
        { label: 'Arquivos Informações - DEINF' },
        { label: 'Relatórios Gerenciais', subItems: [
              { label: 'Simples Nacional' },
              { label: 'Contribuintes' },
              { label: 'Evolução de Inscrições/Baixas' }
        ] },
        { label: 'Alteraçõa Cadastral' },
        { label: 'Gerar Débito EF' },
        { label: 'Painel Gerencial' }
    ] },

    { label: 'PRODUTOR RURAL', subItems: [
        { label: 'Pesquisar Produtor Rural' },
        { label: 'Cadastrar Produtor Rural' },
        { label: 'Baixar Produtor Rural' },
        { label: 'Imprimir Relatório' }
    ] },

    { label: 'SCEA', subItems: [
        { label: 'Consultas', subItems: [
              { label: 'Consultar Equipamento de Automação'}
        ]},
        { label: 'Usuários de PD', subItems: [
              { label: 'Consultar Usuários de PD' },
              { label: 'Serviços de Usuário de PD' }
        ]}
    ] },

    { label: 'SERVIÇOS CADASTRAIS', subItems: [
       { label: 'Emissão Cartão Inscrição' },
       { label: 'Emissão Cartão Unidade Auxiliar' },
       { label: 'Suspensão Temporária' },
       { label: 'Suspensão de Contribuinte' },
       { label: 'Reativação de Contribuinte' },
       { label: 'Reativação de Contribuinte (Vinculada)' },
       { label: 'Atualizar Pendência Fiscal' },
       { label: 'Cancelamento de Contribuinte' },
       { label: 'Baixa de Contribuinte' },
       { label: 'Credenciamento Lei 3830' },
       { label: 'Incorporação de Contribuinte' },
       { label: 'Descredenciamento Lei 3830' },
       { label: 'Cadastro de Pessoa Física' },
       { label: 'Ajustar CPF Duplicado' },
       { label: 'Cadastro de Pessoa Jurídica' },
       { label: 'Alterar Regime de Pagamento' },
       { label: 'Alterar Parcela de Estimativa Fixa' },
       { label: 'Alterar CNAE de Contribuinte' },
       { label: 'Alteração de IPTU' },
       { label: 'Serviços em Lote' },
       { label: 'Baixa de Contador' },
       { label: 'Baixa de Procurador' },
       { label: 'Inscrição 99' },
       { label: 'Inscrição de Sócio' },
       { label: 'Inscrição de Sócios por CNPJ' },
       { label: 'Atualização de Sociedade' },
       { label: 'Atualização de Sociedades pro CNPJ' },
       { label: 'Baixa de Sócio' },
       { label: 'Baixa de Sócio por CNPJ' }
    ] },

    { label: 'SOLICITAÇÕES', subItems: [
       { label: 'Processar Solicitações' },
       { label: 'Consultar Solicitações' }
    ] },

    { label: 'SUAD', subItems: [
      { label: 'Gráfica', subItems: [
            { label: 'Consultar Gráfica' },
            { label: 'Cadastrar Grafica' },
            { label: 'Representante Gráfico' },
            { label: 'Serviços Gráfica' }
      ]},
      { label: 'Usuário de Regime PD' },
      { label: 'Consultar Selos Fiscais' },
      { label: 'AIDF', subItems: [
            { label: 'Consultar AIDF' },
            { label: 'Gerar AIDF' },
            { label: 'Homologar AIDF' },
            { label: 'Cancelar AIDF' },
            { label: 'Serviços Úteis' }
      ]},
      { label: 'PAFS', subItems: [
            { label: 'Consultar PAFS' },
            { label: 'Gerar PAFS Fabricante' },
            { label: 'Gerar PAFS Distribuidor' },
            { label: 'Cancelar PAFS' }
      ] }
    ] },

    { label: 'TABELAS', subItems: [
      { label: 'Cargo' },
      { label: 'Categoria Estabelecimento' },
      { label: 'Município' },
      { label: 'Bairro' },
      { label: 'Logradouro' },
      { label: 'Bairro / Logradouro' },
      { label: 'Serviço Cadastro' },
      { label: 'Conflito' },
      { label: 'Conflito / Serviço Cadastral' },
      { label: 'Situação Imóvel' },
      { label: 'Natureza Jurídica' },
      { label: 'Tratamento Tributário' },
      { label: 'Perfil Agência' },
      { label: 'CNAE' },
      { label: 'Amparo Legal' },
      { label: 'Improbidade Administrativa' },
      { label: 'Escritório Virtual' },
      { label: 'Malha DEINF' },
      { label: 'Rating Tipo Critério' },
    ] },

    { label: 'TÉCNICO', subItems: [
      { label: 'Atualizar Inscrição' }
    ] },
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

}
