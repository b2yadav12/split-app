import { httpClient } from '../apolloClient';
import { store } from './store.jsx';
import { logout } from "./auth.js";

const handleErr = (error) => {
  // check if it's loggedOut
  if (error.graphQLErrors[0].extensions.code === 'UNAUTHENTICATED') {
    store.dispatch(logout());

    return;
  }

  throw new Error(error.graphQLErrors[0].message)
}

export const mutation = async (schema, variables) => {
  try {
    const { data } = await httpClient.mutate({
      mutation: schema,
      variables,
      fetchPolicy: 'no-cache',
    });

    return data;
  } catch (error) {
    handleErr(error);
  }
}

export const query = async (schema, variables) => {
  try {
    const { data } = await httpClient.query({
      query: schema,
      variables,
      fetchPolicy: 'no-cache',
    });

    return data;
  } catch (error) {
    handleErr(error);
  }
}