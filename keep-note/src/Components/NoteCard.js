export default function NoteCard({taskData})
{
    let cardStyle = "Card1"
    if(taskData.taskStatus.toLowerCase()==="completed")
        { cardStyle='Card2'}
    
    return(
    <div className={cardStyle}>
        <h3>
            {taskData.taskTitle}
        </h3>
        <p>
            {taskData.taskContent}
        </p>
    </div>
    );
}