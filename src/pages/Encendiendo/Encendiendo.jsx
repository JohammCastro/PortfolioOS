import { CircularProgress, LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Home } from '../Home';

const Encendiendo = ({ }) => {
	const [cargado, setCargado] = useState(false)
	useEffect(() => {
		setTimeout(() => {
			// setBienvenida(false)
			var sound = new Audio('sound/inicioSound.mp3');
			sound.play()
		}, 2200);
		setTimeout(() => {

			setCargado(true)
		}, 3000);

	}, [])

	return (
		<>
			{
				!cargado ?
					<div className='app'>
						<div style={{marginBottom:15,fontSize:30}}>Loading</div>
						<CircularProgress />
						<div style={{ backgroundColor: 'red', position: 'fixed', zIndex: 1, top: 0, left: 0, width: '100%' }}>
							<LinearProgress />
						</div>
					</div> :
					<Home />
			}
		</>
	);
};


export default Encendiendo;