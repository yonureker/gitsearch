## GitSearch

GitSearch is a search engine where you can search Github users and repositories. The application uses the Github GraphQL API to display user or repository search results. The web app is built with React Native web components and the website is deployed via Vercel.

## Demo

Live demo is available [here](https://gitsearch-six.vercel.app/)

## GraphQL

I initially built the app with Github REST API where you simply fetch the data from either https://api.github.com/search/users?q=${query} or https://api.github.com/search/repositories?q=${query} and save the necessary portion of the response to a state to display the required info.

Later, I realized that Github also has a [GraphQL API](https://docs.github.com/en/graphql) and wanted to have an intro about the GraphQL query language. After playing around with the [explorer](https://docs.github.com/en/graphql/overview/explorer), I come up with queries to search Github users and repositories given a query from the user:

```javascript
const GET_USERS = gql`
  query SearchUsers($userQuery: String!) {
    search(query: $userQuery, type: USER, first: 20) {
      edges {
        node {
          ... on User {
            avatarUrl
            id
            login
            url
          }
        }
      }
    }
  }
`;

const GET_REPOSITORIES = gql`
  query SearchRepositories($userQuery: String!) {
    search(query: $userQuery, type: REPOSITORY, first: 20) {
      edges {
        node {
          ... on Repository {
            id
            url
            description
            stargazerCount
            nameWithOwner
            owner {
              avatarUrl
            }
          }
        }
      }
    }
  }
`;
```

