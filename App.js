import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/homeStack';

const getFonts = () => {
	return Font.loadAsync({
		'nunito-regular': require('./assets/font/Nunito-Regular.ttf'),
		'nunito-bold': require('./assets/font/Nunito-Bold.ttf')
	});
}

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);
	if(fontsLoaded) {
		return (
			<Navigator />
		);
	} else {
		return ( 
			<AppLoading
				startAsync={ getFonts }
				onFinish = {() => setFontsLoaded(true)}
				onError = { console.warn }
			/>
		)
	}
}

