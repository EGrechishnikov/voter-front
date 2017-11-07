import React from 'react';
import Entrance from "./Entrance";
import HomeContainer from "./containters/HomeContainer";

class App extends React.Component {
    render() {
        console.log('render: ' + localStorage.getItem('user'));
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