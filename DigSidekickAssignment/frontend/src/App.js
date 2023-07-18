import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const App = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/users?sort=name&limit=10&page=1');
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  

  const createUser = async (data) => {
    try {
      const response = await fetch('/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      setUsers([...users, responseData]);
      reset();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await fetch(`/users/${userId}`, { method: 'DELETE' });
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email}
            <button onClick={() => deleteUser(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit(createUser)}>
        <input type="text" placeholder="Name" {...register('name', { required: 'Name is required' })} />
        {errors.name && <span>{errors.name.message}</span>}
        <input type="email" placeholder="Email" {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })} />
        {errors.email && <span>{errors.email.message}</span>}
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default App;
