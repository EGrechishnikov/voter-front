import React from 'react';
import Entrance from "./Entrance";
import Home from "./Home";

class App extends React.Component {
    render() {
        let user = localStorage.user !== undefined ? JSON.parse(localStorage.user) : null;
        return (
            <div>
                {
                    user !== null && user.login !== undefined && user.id !== 0 ?
                        <Home/> :
                        <Entrance/>
                }
            </div>
        );
    }
}

export default App;