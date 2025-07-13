import UserProfile from "./components/UserProfile/UserProfile";
import Button from "./components/Button/Button";
import Alert from "./components/Alert/Alert";
import PostList from "./components/PostList/PostList";
import DataLoader from "./components/DataLoader/DataLoader";
import AuthPanel from "./components/AuthPanel/AuthPanel";
import LikeButton from "./components/LikeButton/LikeButton";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
function App(){
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
    <>
    {/* EX1+2 */}
      <UserProfile name="Phuong" age={20} bio="cute"/>
      <UserProfile name="Tra" age={40} bio="strong"/>
      <UserProfile name="Nam" age={27} bio ="handsome"/>
      <UserProfile name="Hong" age={40} bio="hard-working"/>
{/* EX3 */}
      <Button text="Primary" type="primary" />
      <Button text="Outline" type="outline" />
      <Button text="Default" type="default" />
      <Button text="Text" type="text" />
      <Button text="Link" type="link" />
{/* EX 4+5 */}
      <Alert  type="success" message="Success! Your message have been sent successfully"/>
      <Alert type="error" message="Error! A problem has occured while submitting your data"/>
      <Alert type="warning" message="Warning! There was a problem with your network connection"/>
      <Alert type="info" message="Info! Please read the comments carefuly"/>
{/* EX6 */}
      <PostList posts={posts}/>
{/* EX7 */}
      <DataLoader/>
{/* EX8 */}
      <AuthPanel/>
      {/* Ex9 */}
      <LikeButton/>

      <FeedbackForm/>
      
    </>
  );
}
export default App;