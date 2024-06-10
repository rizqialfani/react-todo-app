import React from 'react'
import TodoItem from './TodoItem'

// Menerima function toggleCompleted sebagai sebuah prop
const Todos = ({ todos, toggleCompleted, toggleDeleted }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            // Teruskan function toggleCompleted ke component TodoItem
            toggleCompleted={toggleCompleted}
            toggleDeleted={toggleDeleted}
          />
        )
      })}
    </div>
  )
}

const styles = {
  container: {
    width: '40%',
    margin: '0 auto',
  },
}

export default Todos