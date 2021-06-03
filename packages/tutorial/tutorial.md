## setup

-   Create tutorial-start in /package.json

```bash
cd packages
npx create-react-app tutorial
cd ..
npx lerna bootstrap
# Necessário rodar `npm install -g lerna` para funcionar
lerna add react-admin --scope=tutorial
lerna add ra-data-json-server --scope=tutorial
lerna add prop-types --scope=tutorial
```

-   ra-data-json-server

    -   Consegue se comunicar com a API JSONPlaceholder.

-   Componente <Admin>

    -   Componente raiz de um aplicativo react-admin
    -   Props
        -   `dataProvider`: Responsável por buscar os dados na API. Provavelmente será necessário criar um provider para que o react-admin se comunique com sua API.
    -   Espera um ou mais componentes filhos `Resource`

-   Component <Resource>

    -   Mapeia os endpoints da API
    -   Define os componentes que serão utilizados em cada operação CRUD
    -   props
        -   `name`: Informar ao react-admin o path que é para buscar os dados na url `/users`
        -   `list`: Componente a ser utilizado para exibir a lista

-   Component <ListGuesser>

    -   Adivinha o formato a ser usado para as colunas da lista com base nos dados obtidos da API.
    -   Imprimi no console um Datagrid com o resultado obtido na busca.
    -   Não deve ser utilizado em produção.
    -   É uma forma de inicializar o Admin mais rápido.
    -   Irá mapear todos os campos que estiverem no `response`.
    -   Na customização obtida no console: selecione apenas os desejados e personalize os tipos.

-   Component <List>

    -   Responsabilidade
        -   Obter os dados
        -   Exibir o título da página
        -   Manipular a paginação
        -   Delega a exibição para os seus filhos

-   Component <Datagrid>

    -   Renderiza uma tabela com uma linha para cada registro
    -   Utiliza seus filhos para determinar as colunas que serão renderizadas
    -   Cada componente Field mapeia um campo diferente na resposta da API, especificado pelo prop `source`.

-   Componente <UrlField>

    -   Utilizar quando deseja ter o texto clicavel como um link.
    -   Caso queira utilizar apenas texto normal, use <TextField>

-   Componente <ReferenceField>

    -   Utilizado quando você tem uma ForeingKey e precisa acessar os dados desse registro.
    -   Realizar outro request.
    -   Ele sozinho não exiba nada, realiza somente a busca.
    -   Passa o registro buscado para seus filhos.
    -   Realiza otimizações, caso tenha ForeignKeys repetidas nas linhas, ele não realiza outro request, reaproveita.
    -   Props
        -   `source`: Campo que irá utilizar na nova request. Ex: `users/?id=1`
        -   `reference` endpoint a ser utilizado ou Resource

-   Componente <EditGuesser>

    -   Semelhante ao <ListGuisser> mas para Editar o registro.

-   Component <Edit>

    -   É responsável por buscar o registro e exibir o título da página.
    -   Passa o registro para o componente <SimpliForm> e este usa seus filhos para especificar as entradas dos dados.

-   Componente <EditButton>

    -   Envia uma solicitação PUT

-   Customizando o style de um componente
    -   `src/MyUrlField.js`
    -   https://material-ui.com/pt/styles/basics/
    -   https://material-ui.com/pt/styles/basics/#styled-components-api

# https://marmelab.com/react-admin/Admin.html
