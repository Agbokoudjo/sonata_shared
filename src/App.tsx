/*
 * This file is part of the project by AGBOKOUDJO Franck.
 *
 * (c) AGBOKOUDJO Franck <franckagbokoudjo301@gmail.com>
 * Phone: +229 67 25 18 86
 * LinkedIn: https://www.linkedin.com/in/internationales-web-services-120520193/
 * Company: INTERNATIONALES WEB SERVICES
 * [GitHub - Agbokoudjo/sonata_shared](https://github.com/Agbokoudjo/sonata_shared)
 * For more information, please feel free to contact the author.
 */

import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { displayModal} from './components/Modal'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useDialogStore from './store/useDialogStore'
import MaxWidthDialog from './components/MaxWidthDialog'
export function MaxWidthDialogApp() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open max-width dialog
      </Button>
      <Dialog
        fullWidth={useDialogStore((state)=> state['exempleId']?.fullWidth)}
        maxWidth={useDialogStore((state)=> state['exempleId']?.maxWidth)}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>
            <MaxWidthDialog contextId='exempleId'></MaxWidthDialog>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

function App() {
  const [count, setCount] = useState(0)
   useEffect(() => {
    let message_test=`
This approach gives the developer maximum flexibility to: Change the background color, position,
 and other properties of the modal via props or CSS classes. Use custom CSS classes in their own 
 files without having to touch the React code. Adjust mobile behavior with media queries to make modal
  responsive. This allows for clean modal management while giving the developer a lot of freedom 
  to customize the interface according to the specific needs of each project. 
  If you have any other questions or if you want to deepen a point, 
  don't hesitate to tell me! If you want the modal to close automatically 
  after a certain delay or based on another event, you can add auto-close logic via props. 
  For example, you can add a setTimeout function to close the modal after a certain amount of time.       

`
    if(count ===1){
      message_test=`<div class="alert alert-success fw-bolder" role="alert">
          count is ${count}

          A simple info alert—check it out!
    </div> ${message_test}`
      displayModal(message_test,1) as void
    }else if(count ===2){
      message_test=`<div class="alert alert-info fw-bolder" role="alert">
          count is ${count}

          A simple info alert—check it out!
    </div> ${message_test}`
      displayModal(message_test,2) as void
    }else if(count ===3){
      message_test=`<div class="alert alert-warning fw-bolder" role="alert">
          count is ${count}

          A simple info alert—check it out!
    </div> ${message_test}`
      displayModal(message_test,3) as void
    }else if(count >=4){
      message_test=`<div class="alert alert-danger fw-bolder" role="alert">
          count is ${count}

          A simple info alert—check it out!
    </div> ${message_test}`
      displayModal(message_test,0) as void
      setCount(0)
    }
   }, [count])
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button className="btn btn-secondary fw-bolder" onClick={() => setCount((count) => count + 1)}>
        Click here to view the modal box
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p><br/>
      <p>You can set a dialog maximum width by using the maxWidth enumerable in combination with the fullWidth boolean. When the fullWidth prop is true, the dialog will adapt based on the maxWidth value.</p>
      <MaxWidthDialogApp />
    </>
  )
}

export default App
