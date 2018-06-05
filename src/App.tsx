import gql from 'graphql-tag';
import * as React from 'react';
import { ChildDataProps, graphql } from 'react-apollo';

class App extends React.Component<ChildDataProps<{}, IAppProps>> {
  public render() {
    const { loading, people } = this.props.data;
    return (
      <main>
        <header>
          <h1>Apollo Client Error Template</h1>
          <p>
            This is a template that you can use to demonstrate an error in
            Apollo Client. Edit the source code and watch your browser window
            reload with the changes.
          </p>
          <p>
            The code which renders this component lives in{" "}
            <code>./src/App.js</code>.
          </p>
          <p>
            The GraphQL schema is in <code>./src/graphql/schema</code>.
            Currently the schema just serves a list of people with names and
            ids.
          </p>
        </header>
        {loading ? (
          <p>Loading…</p>
        ) : (
          <ul>
            {people!.map((person: any) =>
              <li key={person.id}>{person.name}</li>
            )}
          </ul>
        )}
      </main>
    );
  }
}

interface IPerson {
  id: number,
  name: string,
};

interface IAppProps {
  people: IPerson[],
}

export default graphql<{}, IAppProps>(
  gql`
    query ErrorTemplate {
      people {
        id
        name
      }
    }
  `
)(App);
