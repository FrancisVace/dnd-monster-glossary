import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '/globals.css'
import App from './App.tsx'
import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
import {ApolloProvider} from "@apollo/client/react";

const client = new ApolloClient({
    link: new HttpLink({uri: "https://www.dnd5eapi.co/graphql/2014/"}),
    cache: new InMemoryCache()
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </StrictMode>,
)
