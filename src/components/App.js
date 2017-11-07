import React from 'react';
import Entrance from "./Entrance";
import HomeContainer from "./containters/HomeContainer";

class App extends React.Component {
    render() {
        return (
            <div>
                {
                    localStorage.user !== undefined ? <HomeContainer/> : <Entrance/>
                }
            </div>
        );
    }
}

export default App;