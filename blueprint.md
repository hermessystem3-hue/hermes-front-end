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

## Plano de Ação Atual

A fase atual consiste em estabelecer a fundação sólida da aplicação antes de desenvolver qualquer funcionalidade.

**Fase 1: Configuração da Arquitetura Base**

1.  **Validação da Arquitetura**: Confirmar e documentar as diretrizes arquiteturais (Concluído).
2.  **Gerar Estrutura de Pastas**: Criar a estrutura de diretórios (`core`, `shared`, `features`, `layout`) conforme o design definido.
3.  **Configurar Firebase**: Integrar o Firebase SDK ao projeto Angular.
4.  **Criar `AuthService`**: Implementar o serviço central de autenticação para interagir com o Firebase Auth.
5.  **Criar Layout Base**: Desenvolver os componentes básicos de layout da aplicação (ex: main layout com um placeholder para o conteúdo).
6.  **Configurar Roteamento**: Estabelecer as rotas principais da aplicação, preparando o terreno para o lazy loading das features.
7.  **Build de Verificação**: Executar um `ng build` para garantir que toda a configuração inicial está correta e livre de erros.

Aguardando a ordem para iniciar a execução da Fase 1.
