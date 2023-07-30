import React, { useEffect, useState } from 'react';
import { MainMenu, Welcome } from './Components';

const Home = ({ }) => {
	const [bienvenida, setBienvenida] = useState(true)
	useEffect(() => {

		setTimeout(() => {
			setBienvenida(false)
			// var sound = new Audio('sound/inicioSound.mp3');
			// sound.play()
		}, 2000);
	}, [])


	return (
		<>

			{bienvenida ?
				<div className='app'>

					<Welcome />
				</div>
				: <MainMenu />}
		</>
	);
};


export default Home;