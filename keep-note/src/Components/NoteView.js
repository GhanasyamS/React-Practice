import AddNote from './AddNote'
import NoteList from './NoteList'

export default function NoteView({taskList})
{
    return(
         <div>
         <h2 className='NoteView-Header'>Checklist Chronicles: Conquering Tasks One Tick at a Time</h2>
    <AddNote/>

    <NoteList taskList={taskList}/>
    </div>
    );
}