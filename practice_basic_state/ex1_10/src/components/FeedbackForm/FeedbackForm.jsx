import { useState } from "react"

function FeedbackForm(){
    const [feedbackText, setFeedbackText] = useState('');

   const handleChange = (e) =>{
    setFeedbackText(e.target.value);
   };
    return(
    <div>
        <h3>Feedback Form </h3>
        <textarea value={feedbackText} onChange={handleChange}/>
        <p>Your feedback: {feedbackText}</p>

    </div>);
}
export default FeedbackForm