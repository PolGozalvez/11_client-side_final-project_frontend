import './App.css'
import { Header } from './components/Header'
import { BookForm } from './components/BookForm'
import { ListContainer } from './components/ListContainer'
import { BookList } from './components/BookList'
import { useTodos } from './hooks/useTodos'

function App() {
  const { todos, handleCreateTask } = useTodos();

  return (
    <>
        <Header/>
        <BookForm addTask={handleCreateTask}/>
        <ListContainer>
            <BookList itemList={todos}/>
        </ListContainer>
    </>
  )
}

export default App
