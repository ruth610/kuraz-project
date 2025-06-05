import React, { useEffect, useState } from 'react';

function TasksList() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);

  const fetchTasks = () => {
    fetch('http://localhost:3000/api/tasks')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch tasks');
        return res.json();
      })
      .then(data => {
        setTasks(data);
        setError(null);
      })
      .catch(err => setError(err.message));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Title cannot be empty');
      return;
    }

    fetch('http://localhost:3000/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, completed: false })
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to add task');
        return res.json();
      })
      .then(() => {
        setTitle('');
        setError(null);
        fetchTasks();
      })
      .catch(err => setError(err.message));
  };

  // Delete task handler
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to delete task');
        return res.json();
      })
      .then(() => {
        fetchTasks(); // Refresh tasks after deletion
      })
      .catch(err => setError(err.message));
  };

  return (
    <div>
      <h2>Tasks List</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="New task title"
        />
        <button type="submit">Add Task</button>
      </form>

      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {tasks.map(({ id, title, completed }) => (
            <li key={id} style={{ marginBottom: '0.5rem' }}>
              <strong>{title}</strong> - {completed ? 'Completed' : 'Pending'}{' '}
              <button
                onClick={() => handleDelete(id)}
                style={{ marginLeft: '1rem', cursor: 'pointer' }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TasksList;
