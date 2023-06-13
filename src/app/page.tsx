import styles from './page.module.css'
import TodoList from '@/components/TodoList'
import TodoItemCreator from '@/components/TodoItemCreator'

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <TodoList />
        <TodoItemCreator />
      </div>
    </main>
  )
}

export default Home;
