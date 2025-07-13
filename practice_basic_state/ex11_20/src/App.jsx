import './App.css'
import { useState } from "react";
import SettingPanel from "./components/SettingPanel/SettingPanel";
import BookList from './components/BookList/BookList';
import ProductCard from './components/ProductCard/ProductCard';
import TaskList from './components/TaskList/TaskList';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import ListContainer from './components/ListContainer/ListContainer';
import Card from './components/Card/Card';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import PostList from './components/PostList/PostList';
function App(){
  const [showList, setShowList] = useState(true);
  const [items, setItems] = useState(["banana", "tomato"]);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  
  }

  const books =[
      {
      id: 1,
      title: 'Book A',
      author:'Author X',
      year:'2020'
    },
    {
      id: 2,
      title: 'React Programing',
      author:'John Smith',
      year:'2023'
    },
    {
      id: 3,
      title: 'Advanced JavaScript',
      author:'Jan Doe',
      year:'2022'
    },
       {
      id: 4,
      title: 'UI/UX Design',
      author:'Author X',
      year:'2020'
    },
    {
      id: 5,
      title: 'Database Systems',
      author:'John Wilson',
      year:'2024'
    },
    {
      id: 6,
      title: 'Computer Networks',
      author:'David Brown',
      year:'2019'
    },

  ];

  const [tasks, setTasks] = useState([
    { id: 1, text: "Complete project documentation", completed: false },
    { id: 2, text: "Review code changes", completed: true },
    { id: 3, text: "Update dependencies", completed: false }

  ]);

const handleTaskToggle = (TaskId) => {
  setTasks(prevTask =>
    prevTask.map(task =>
     task.id === TaskId 
        ? { ...task, completed: !task.completed } 
        : task
    )
  );
};

const completedCount = tasks.filter(task => task.completed).length;

  const posts= [
       {
      id: 1,
      title: 'Getting Started with React',
      thumbnail: 'https://placehold.co/300x200',
      content: 'Getting Started with React Getting Started with React Getting Started with React',
      author:'John Wicked'
    },
    {
      id: 2,
      title: 'Modern CSS Techniques for Web Developments',
      thumbnail: 'https://placehold.co/300x200',
      content: 'Modern CSS Techniques for Web Developments Modern CSS Techniques for Web Developments Modern CSS Techniques for Web Developments',
      author:'Leslie Wicked'
    },
    {
      id: 3,
      title: 'JavaScripts ES6+ Feature You Should Know',
      thumbnail: 'https://placehold.co/300x200',
      content: 'JavaScripts ES6+ Feature You Should Know JavaScripts ES6+ Feature You Should Know JavaScripts ES6+ Feature You Should Know',
      author:'Sawatieee'
    },

  ];


 

  return(
    <div className={`app-container ${theme}`}>
      <h1>This is ex11: Prop Drilling App</h1>
      <button onClick={toggleTheme}>Switch to {theme === 'light' ? 'dark' : 'light' }</button>
      <SettingPanel theme = {theme}/>
    

    <h2><strong>BookList</strong></h2>
    <BookList books={books}/>

    <div className='cardSection'>
      <ProductCard name="Wireless Headphones" price={99.99} isInStock={true}/>
      <ProductCard name="Smart Watch" price={249.99} isInStock={false}/>
      <ProductCard name="Bluetooth Speaker" price={79.99} isInStock={true}/>
      <ProductCard name="Gaming Mouse" price={59.99} isInStock={true}/>
    </div>


    <div className='taskListCard'>
      <h2 className='taskListTitle'>Task List</h2>
      <h4 className='taskListText'>{completedCount} of {tasks.length} task completed</h4>
      <TaskList tasks={tasks} onTaskToggle={handleTaskToggle} />

    </div> 


  
    <ShoppingCart/> 


    <Card>
    <ListContainer showList={showList} items={items}/>
    </Card>

    <ThemeSwitcher/>

    <PostList posts={posts} />







    </div>

  );
}
export default App;