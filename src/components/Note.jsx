import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {

  function handleDelete(event) {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <div className="note-wrapper">
        <h1>{props.title}</h1>
        <hr/>
        <p>{props.content}</p>
        <button onClick={handleDelete}><DeleteIcon/></button>
      </div>
    </div>
  );
}

export default Note;
