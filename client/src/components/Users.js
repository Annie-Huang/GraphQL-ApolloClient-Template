import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_USERS } from '../GraphQL/Querys';

const Users = () => {
  const { error, loading, data } = useQuery(LOAD_USERS);
  console.log(data);

  return (
    <div>{data?.getAllUsers && <h1>{data?.getAllUsers[0].firstName}</h1>}</div>
  );
};

export default Users;
