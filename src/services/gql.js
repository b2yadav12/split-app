import { httpClient } from '../apolloClient';

export const mutation = async (schema, variables) => {
  try {
    const { data } = await httpClient.mutate({
      mutation: schema,
      variables
    });

    return data;
  } catch (error) {
    throw new Error(error.graphQLErrors[0].message)
  }
}