import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import React from "react";
import styles from "./Home.module.css";
import { Repository } from "@/lib/types";

const query = gql`
  query {
    user(login: "jeunessesept") {
      pinnedItems(first: 6) {
        totalCount
        edges {
          node {
            ... on Repository {
              id
              name
              url
            }
          }
        }
      }
    }
  }
`;

export const PinnedRepo = async () => {
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data, errors } = await client.query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  if (errors) {
  } else {
    const { user } = data;
    const pinnedItems: Repository[] = user.pinnedItems.edges.map(
      (edge: any) => edge.node
    );

    return (
      <div className={styles.container}>
        <h2 className="text-5xl text-gradient-gray"> Projects </h2>
        <div className={styles.grid}>
          {pinnedItems?.map((item) => {
            return (
              <a key={item.id} href={item.url} className={styles.card}>
                <h2>{item.name}</h2>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
};
