import { mutation } from './gql';
import { USER_LOGIN } from "../gql";

export const login = async (payload) => {
  const data = await mutation(USER_LOGIN, payload);
  return data.login;
}