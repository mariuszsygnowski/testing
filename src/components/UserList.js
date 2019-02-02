import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import SingleUser from "./SingleUser";

// const aa = this.props.selectedUser;
const LAUNCHES_QUERY = gql`
  query($selectedUser: String!) {
    users(role: $selectedUser) {
      name
      role
      createdAt
    }
  }
`;

export class UserList extends Component {
  render() {
    const { selectedUser } = this.props;

    return (
      <Fragment>
        <Query query={LAUNCHES_QUERY} variables={{ selectedUser }}>
          {({ loading, error, data }) => {
            if (loading) return <h4>loading...</h4>;
            if (error) console.log(error);
            console.log(data);
            return (
              <div>
                {data.users.map(user => (
                  <SingleUser key={user.name} user={user} />
                ))}
              </div>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default UserList;
