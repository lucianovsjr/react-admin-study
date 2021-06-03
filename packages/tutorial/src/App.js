import * as React from "react";
// import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import { Admin, Resource } from 'react-admin';
import PostIcon from '@material-ui/icons/Book'
import UserIcon from '@material-ui/icons/Group'
import jsonServerProvider from 'ra-data-json-server';

import Dashboard from './Dashboard';
import { UserList } from './users';
import { PostList, PostEdit, PostCreate } from './posts';

import authProvider from './authProvider';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        {/*<Resource name='users' list={ListGuesser} />*/}
        <Resource name='users' list={UserList} icon={PostIcon} />
        <Resource name='posts' list={PostList} edit={PostEdit} create={PostCreate} icon={UserIcon} />
    </Admin>
);

export default App;
