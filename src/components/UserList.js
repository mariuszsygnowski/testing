import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import SingleUser from "./SingleUser";

const LAUNCHES_QUERY = gql`
  query {
    users {
      name
      role
      createdAt
    }
  }
`;

export class UserList extends Component {
  render() {
    return (
      <Fragment>
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>loading...</h4>;
            if (error) console.log(error);
            // console.log(data);
            return (
              <Fragment>
                {data.users.map(user => (
                  <SingleUser key={user.name} user={user} />
                ))}
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default UserList;
