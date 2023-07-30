import { useState } from 'react'
import { Encendiendo } from './pages'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { IconButton } from '@mui/material';

function App() {
  const [encendido, setEncendido] = useState(false)
  console.log(encendido);
  return (
    <>

      {
        !encendido ?
          <div className='power'>
            <IconButton onClick={() => setEncendido(!encendido)} style={{color:"white"}}>
              <PowerSettingsNewIcon fontSize='large' style={{ fontSize: 150 }} />
            </IconButton>
            {/* <button onClick={() => setEncendido(!encendido)}>ENCENDER</button> */}
          </div> :
          <Encendiendo />
      }


    </>
  )
}

export default App
