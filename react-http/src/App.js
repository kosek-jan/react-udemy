import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
	render() {
		return (
			<BrowserRouter basename="/"> {/* default, but if it is in subdirectory then -> "/my-app" */}
				<div className="App">
					<Blog />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
