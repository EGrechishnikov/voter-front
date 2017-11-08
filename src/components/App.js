import React from 'react';
import Entrance from "./Entrance";
import Home from "./Home";

class App extends React.Component {
    render() {
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