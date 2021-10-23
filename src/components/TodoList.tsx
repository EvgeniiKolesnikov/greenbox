import { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const TodoList: React.FC = () => {
  const { page, limit, error, loading, todos } = useTypedSelector(
    (state) => state.todo
  );

  const { fetchTodos } = useActions();

  useEffect(() => {
    fetchTodos(page, limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>error...</h1>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.id} - {todo.title}</div>
      ))}
    </div>
  );
};
