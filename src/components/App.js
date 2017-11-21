import React from 'react';
import Entrance from "./Entrance";
import Home from "./Home";
import '../style/css/bootstrap.min.css';

class App extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.valid ? <Home/> : <Entrance/>
                }
            </div>
        );
    }
}

export default App;