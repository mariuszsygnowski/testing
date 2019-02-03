import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import SingleUser from "./SingleUser";

const LAUNCHES_QUERY = gql`
  query($selectedRole: String!) {
    users(role: $selectedRole) {
      name
      role
      createdAt
    }
  }
`;

export class UserList extends Component {
  render() {
    //Point 2 from "what to do"
    //I passing trough props selectedRole and desctructing
    //to variable selectedRole
    const { selectedRole } = this.props;

    return (
      <Fragment>
        {/* I passing selectedRole trough variables */}
        <Query query={LAUNCHES_QUERY} variables={{ selectedRole }}>
          {({ loading, error, data }) => {
            if (loading) return <h4>loading...</h4>;
            if (error) console.log(error);
            console.log(data);
            return (
              <ul>
                {data.users.map((user, index) => (
                  <SingleUser key={index} user={user} />
                ))}
              </ul>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default UserList;
