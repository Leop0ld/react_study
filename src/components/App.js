import React from 'react';

class App extends React.Component {
    render(){
		let description = 'Welcome, Leop0ld!';

		let leoStyle = {
			color: '#fff',
			backgroundColor: '#000',
			border: '10px solid pink',
			borderRadius: '10px'
		}
		return (
			<div>
				<h1 style={leoStyle}>Hello, Leop0ld!</h1>
				<p>{1 != 2 ? 'Leop0ld' : 'False'}</p>
			</div>
		);
    }
}

export default App;