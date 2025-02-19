import NoteCard from './NoteCard'

export default function NoteList({taskList})
{
    return(
    <div className='Card-Container'>
    {
    taskList.map((taskData)=>(
    <NoteCard key={taskData.taskId} taskData={taskData} />
    ))
    }
    </div>
    );
}