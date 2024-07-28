import './App.css';
import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import Users from './components/Users';
import Form from './components/Form';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, location, path }) =>
      alert(`GraphQL error: ${message}`)
    );
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:6969/graphql' }),
]);

// Seems a very lengthly way to create the client, not sure if it is because it's a 2020 tutorial.
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Users />
      <Form />
    </ApolloProvider>
  );
}

export default App;
