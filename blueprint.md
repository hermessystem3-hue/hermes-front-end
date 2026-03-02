# Blueprint: Enterprise Angular Application

## Visão Geral

Este documento descreve a arquitetura e o plano de implementação para uma aplicação enterprise moderna, escalável e multi-tenant. O projeto será construído com Angular (utilizando os recursos mais recentes como Standalone Components e Signals) e Firebase (Auth e Firestore), seguindo rigorosas diretrizes de arquitetura de software e design.

## Arquitetura, Estilo e Funcionalidades

Esta seção documenta as decisões de alto nível que definem o projeto.

### Arquitetura do Frontend

*   **Framework**: Angular (versão estável mais recente).
*   **Arquitetura Principal**: 100% baseada em **Standalone Components**, eliminando a necessidade de `NgModules`.
*   **Design Pattern**: Estrutura inspirada em Domain-Driven Design (DDD) para o frontend.
*   **Estrutura de Pastas**:
    *   `src/app/core`: Para serviços globais, guards, interceptors e configurações centrais.
    *   `src/app/shared`: Para componentes, diretivas e pipes reutilizáveis em toda a aplicação.
    *   `src/app/features`: Onde cada módulo de negócio (ex: `auth`, `dashboard`, `empresa`) reside de forma isolada.
    *   `src/app/layout`: Para componentes de layout principais (ex: header, sidebar, footer).
*   **Carregamento de Módulos**: **Lazy loading** obrigatório para todas as `features`, garantindo performance na inicialização.
*   **Componentes**: Devem ser "lean" (enxutos), com `ChangeDetectionStrategy.OnPush` como padrão e delegando a lógica de negócio para serviços.

### Estado e Reatividade

*   **Gerenciamento de Estado**: Utilização primária de **Angular Signals** para estado local e reatividade.
*   **Dados Assíncronos**: RxJS será utilizado de forma pontual, principalmente para operações assíncronas complexas e comunicação com APIs, com preferência total pelo `async` pipe nos templates para evitar subscrições manuais.

### Estilo e UI/UX

*   **Design**: Interface moderna, limpa e responsiva.
*   **Temas**: Suporte para temas claro (light) e escuro (dark).
*   **Componentização**: Máxima reutilização através de uma biblioteca de componentes em `shared/ui`.

### Autenticação e Autorização

*   **Provedor**: Firebase Authentication.
*   **Controle de Acesso**: Modelo multi-tenant baseado em papéis (roles) e permissões, gerenciado via Custom Claims no Firebase Auth. Um usuário poderá pertencer a múltiplas empresas.
*   **Segurança**: `AuthGuard` protegerá as rotas com base nos claims do usuário.

### Banco de Dados e APIs

*   **Banco de Dados**: Firestore para armazenar metadados de usuários, empresas, papéis e permissões.
*   **APIs Externas**: Consumo através do `HttpClient` do Angular, encapsulado em um `ApiBaseService`.
*   **Interceptors**:
    *   **Auth Interceptor**: Injeta o token de autenticação do Firebase em cada requisição.
    *   **Error Interceptor**: Gerencia erros de API de forma global.

---

## Plano de Ação

### Fase 1: Configuração da Arquitetura e UI de Autenticação (Concluída)

1.  **Validação da Arquitetura**: Confirmado e documentado as diretrizes arquiteturais.
2.  **Gerar Estrutura de Pastas**: Criada a estrutura de diretórios (`core`, `shared`, `features`, `layout`).
3.  **Configurar Firebase**: Integrado o Firebase SDK ao projeto Angular.
4.  **Criar Layout Base**: Desenvolvido os componentes básicos de layout.
5.  **Gerar Componentes de Autenticação**: Criados os componentes `login` e `register`.
6.  **Configurar Roteamento de Autenticação**: Definidas as rotas para `/login` and `/register`.
7.  **Estilização Inicial**: Aplicado um estilo global básico para as telas de formulário.
8.  **Build de Verificação**: Executado um `ng build` para garantir a integridade da configuração.

### Fase 2: Implementação da Lógica de Autenticação

A próxima fase focará em dar vida aos formulários de login e registro, implementando a lógica de negócio e a comunicação com o serviço de autenticação.

1.  **Criar `AuthService`**: Implementar o serviço central de autenticação para interagir com o Firebase Auth, contendo os métodos `login()` e `register()`.
2.  **Implementar Formulários Reativos**: Converter os formulários HTML estáticos em `login` e `register` para formulários reativos do Angular.
3.  **Conectar Componentes ao Serviço**: Chamar os métodos do `AuthService` a partir dos componentes `login` e `register` ao submeter os formulários.
4.  **Gerenciamento de Estado do Usuário**: Utilizar signals no `AuthService` para gerenciar o estado de autenticação do usuário (logado/deslogado).
5.  **Feedback ao Usuário**: Implementar feedback visual para o usuário durante e após as operações de login/registro (ex: mensagens de erro ou sucesso).

Aguardando a ordem para iniciar a execução da Fase 2.
