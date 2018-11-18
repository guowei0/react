import React, { Component } from 'react';
import RouterView from 'router';

class App extends Component {
    render() {
        return (
        <div className="App">
			<main className="main">
				<RouterView/>
			</main>
        </div>
        );
    }
}

export default App;
