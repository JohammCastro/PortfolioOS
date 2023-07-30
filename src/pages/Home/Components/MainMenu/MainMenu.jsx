import { AppBar, Box, Grid, Icon, Toolbar } from '@mui/material';
import React from 'react';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Battery90Icon from '@mui/icons-material/Battery90';
import WifiIcon from '@mui/icons-material/Wifi';
import TuneIcon from '@mui/icons-material/Tune';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
const MainMenu = ({ }) => {
	return (
		<>
			<div className='MainMenu'>
				<Box sx={{ flexGrow: 0 }}>
					<div className='base' style={{ backgroundColor: '', height: '4vh' }}>
						<Grid item xs={12} style={{ paddingTop: 0 }}>
							<div style={{ backgroundColor: '' }}>
								<Grid container>
									<Grid item xs={6}>
										<div style={{ backgroundColor: '' }}>

										</div>
									</Grid>
									<Grid item xs={6}>
										<div style={{ backgroundColor: '', alignContent: "end", alignItems: "end", textAlign: 'end' }}>
											<WifiIcon fontSize='small' color='secondary' />
											<SignalCellularAltIcon fontSize='small' color='secondary' />
											<Battery90Icon fontSize='small' color='secondary' />
											{/* <Icon>a</Icon> */}
										</div>
									</Grid>
								</Grid>
							</div>
						</Grid>
					</div>

					<Grid container style={{ backgroundColor: '', height: '96vh' }}>

						{/* base */}
						<Grid className='base' item xs={12} style={{ backgroundColor: '', padding: 20 }}>
							{/* contenido */}
							{/* <img src="img/background.png" style={{height:'96vh',width:'92vw',zIndex:0}} alt="" /> */}

							<div className='background' style={{}}>

								<Grid container >
									<Grid className='carta' item xs={5.8} style={{ backgroundColor: '', height: 100 }}>
										<div style={{ display: 'grid', placeItems: 'center', margin: 'auto' }}>
											<h1 className='' style={{ color: 'white' }}>9:00 PM</h1>
										</div>
									</Grid>
									<Grid className='base' item xs={0.4}>

									</Grid>
									<Grid className='carta' item xs={5.8} style={{ backgroundColor: '' }}>
										<div style={{ display: 'grid', placeItems: 'center', margin: 'auto' }}>
											<MessageIcon color='' fontSize='large' style={{ verticalAlign: "center", marginTop: 15, color: "white" }} />
										</div>
									</Grid>
								</Grid>
								<Grid className='base' container style={{ height: "20px" }}></Grid>
								<Grid container >
									<Grid className='carta' item xs={5.8} style={{ backgroundColor: '', height: 152 }}>
										<div style={{ display: 'grid', placeItems: 'center', margin: 'auto' }}>
											<PersonIcon color='' fontSize='large' style={{ verticalAlign: "center", marginTop: 15, color: "white" }} />
										</div>
									</Grid>
									<Grid className='base' item xs={0.4}>

									</Grid>
									<Grid item xs={5.8} style={{ backgroundColor: '' }}>

										<Grid container >
											<Grid className='carta' item xs={5.6} style={{ backgroundColor: '', height: 66 }}>
												<div style={{ display: 'grid', placeItems: 'center', margin: 'auto' }}>
													<GitHubIcon color='' fontSize='large' style={{ verticalAlign: "center", marginTop: 15, color: "white" }} />
												</div>
											</Grid>
											<Grid className='base' item xs={0.8}>

											</Grid>
											<Grid className='carta' item xs={5.6} style={{ backgroundColor: '' }}>
												<div style={{ display: 'grid', placeItems: 'center', margin: 'auto' }}>
													<LinkedInIcon color='' fontSize='large' style={{ verticalAlign: "center", marginTop: 15, color: "white" }} />
												</div>
											</Grid>
										</Grid>
										<Grid className='base' container style={{ height: "20px" }}></Grid>
										<Grid container >
											<Grid className='carta' item xs={5.6} style={{ backgroundColor: '', height: 66 }}>
												<div style={{ display: 'grid', placeItems: 'center', margin: 'auto' }}>
													<MailIcon color='' fontSize='large' style={{ verticalAlign: "center", marginTop: 15, color: "white" }} />
												</div>
											</Grid>
											<Grid className='base' item xs={0.8}>

											</Grid>
											<Grid className='carta' item xs={5.6} style={{ backgroundColor: '' }}>
												<div style={{ display: 'grid', placeItems: 'center', margin: 'auto' }}>
													<QuestionMarkIcon color='' fontSize='large' style={{ verticalAlign: "center", marginTop: 15, color: "white" }} />
												</div>
											</Grid>
										</Grid>

									</Grid>
								</Grid>
								<Grid className='base' container style={{ height: "20px" }}></Grid>
								<Grid container >
									<Grid className='carta' item xs={8.9} style={{ backgroundColor: '', height: 70 }}>
										<div style={{ display: 'grid', placeItems: 'center', margin: 'auto' }}>
											<FolderCopyIcon color='' fontSize='large' style={{ verticalAlign: "center", marginTop: 15, color: "white" }} />
										</div>
									</Grid>
									<Grid className='base' item xs={0.4}>

									</Grid>
									<Grid className='carta' item xs={2.7} style={{ backgroundColor: '' }}>
										<div style={{ display: 'grid', placeItems: 'center', margin: 'auto' }}>
											<TuneIcon color='' fontSize='large' style={{ verticalAlign: "center", marginTop: 15, color: "white" }} />
										</div>
									</Grid>
								</Grid>

							</div>
						</Grid>

					</Grid>
				</Box>
			</div>
		</>
	);
};


export default MainMenu;