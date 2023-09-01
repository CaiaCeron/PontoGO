import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { destroyCookie, parseCookies, setCookie } from "nookies";

const setHeaderAuthenticationToken = setContext(() => {
  const token = parseCookies(null)?.["authToken"];
  if (token) {
    return {
      headers: {
        authorization: "Bearer " + token,
      },
    };
  }
  return {};
});

const httpLink = createHttpLink({
  uri: "http://test.frontend.api.brainny.cc/graphql",
});

const client = new ApolloClient({
  link: setHeaderAuthenticationToken.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
