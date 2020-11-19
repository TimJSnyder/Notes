import Button from '@material-ui/core/Button'

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Button className="deleteButton" onClick={handleClick} color='secondary'>Delete</Button>
    </div>
  );
}

export default Note;