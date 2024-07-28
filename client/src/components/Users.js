import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_USERS } from '../GraphQL/Querys';

const Users = () => {
  const { error, loading, data } = useQuery(LOAD_USERS);
  console.log(data);

  return <div></div>;
};

export default Users;
