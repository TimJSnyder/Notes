import Appbar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

export default function Header() {
    return (
        <>
      <Appbar style={{backgroundColor: "#000000"}}>
        <h1 className="header">Notes</h1>
      </Appbar>
      <Toolbar />
      </>
    );
  }