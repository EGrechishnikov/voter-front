import React from 'react';
import Home from './Home';
import Entrance from "./Entrance";

class App extends React.Component {
    render() {
        console.log('render: ' + localStorage.getItem('user'));
        return (
            <div>
                {
                    localStorage.user !== undefined ? <Home/> : <Entrance/>
                }
            </div>
        );
    }
}

export default App;