import { useParams } from 'react-router-dom';

function User() {
  const { id, name } = useParams();  // Use useParams to access route parameters

  return (
    <div>
      <h1>User No {id}</h1>
      <h1>User Name {name}</h1>
    </div>
  );
}

export default User;
