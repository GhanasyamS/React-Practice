import Header from './Components/Header'
import NoteView from './Components/NoteView'
import Footer from './Components/Footer'

const tasks = 
  [
    { taskId: 1, taskTitle: "Self-read", taskContent: "Deep dive the first session, execute demo codes and check for expected output"
      , taskStatus:"completed"},
    { taskId: 2, taskTitle: "Practice-exercise: HTML", taskContent: "Develop a responsive web page using Bootstrap. Should use Bootstrap components, forms, grid layout and utilities to make the web page more asethetic."
      , taskStatus:"yet-to-start"},
    { taskId: 3, taskTitle: "Assessment: Quiz", taskContent: "Activity to be completed to increase confidence."
      , taskStatus:"completed"},
    { taskId: 4, taskTitle: "Refactor practice exercise", taskContent: "Code needs to be well-indented."
      , taskStatus:"yet-to-start"},
    { taskId: 5, taskTitle: "Submit to RAAS", taskContent: "Push the code to git and submit for auto evaluation."
      , taskStatus:"yet-to-start"}
  ];
   
export default function KeepNote()
{
  
  return(
    <div>
  <Header/>
  <hr></hr>
  <NoteView taskList={tasks}/>
  <hr></hr>
  <Footer/>
  </div>
);
}