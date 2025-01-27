# React Native Lista de Tarefas

Este é um aplicativo de lista de tarefas simples desenvolvido com **React Native**, utilizando o **Context API** e **AsyncStorage** para gerenciar e persistir os dados das tarefas. O objetivo é fornecer um exemplo funcional de como criar um aplicativo com estados globais e armazenamento local.

## 🛠️ Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- **Context API**: Gerenciamento de estado global.
- **AsyncStorage**: Persistência local para armazenar as tarefas.
- **TypeScript**: Para melhorar a segurança e manutenção do código.

## 📋 Funcionalidades

- Adicionar novas tarefas.
- Listar tarefas existentes.
- Marcar/desmarcar tarefas como concluídas.
- Excluir uma tarefa individual.
- Remover todas as tarefas de uma vez.
- Persistência local com **AsyncStorage**.

## 🚀 Como Rodar o Projeto

### Pré-requisitos

1. Certifique-se de ter os seguintes itens instalados:

   - **Node.js** (https://nodejs.org/)
   - **Yarn** ou **npm**
   - **Android Studio** (para dispositivos/emuladores Android)
   - **Xcode** (para dispositivos/emuladores iOS em macOS)
   - **React Native CLI**:

     ```bash
     npm install -g react-native
     ```

2. Clone o repositório:

   ```bash
   git clone https://github.com/victorb132/test_react_native
   cd test_react_native

   ```

3. Instale as bibliotecas:

   ```bash
   yarn install

   ou

   npm install
   ```

3.1 Para o iOs instale os pods:

    cd ios
    pod install

4.  Rode o projeto no emulador desejado:

    ```bash
    npm run android
    npm run ios
    ```
