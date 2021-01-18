import Appbar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Header() {
    return (
        <>
      <Appbar style={{backgroundColor: "#000000"}}>
        <h1 className="header">Notes</h1>
      </Appbar>
      <Toolbar />
        <IconButton aria-label="github" color="secondary" href="https://github.com/TimJSnyder/Notes">
          <GitHubIcon />
        </IconButton>
      </>
    );
  }
