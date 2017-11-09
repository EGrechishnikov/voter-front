import React from 'react';
import {Link} from "react-router-dom";
import Variant from "./Variant";

class VotingList extends React.Component {
    render() {
        return(
            <div>
                <h1>Список голосований</h1>
                <Link to="/create">Создать</Link>
                {
                    this.props.votes.map(function (vote) {
                        return <div key={vote.name}>
                            <h2>{vote.name}</h2>
                            <h3>{vote.description}</h3>
                            {
                                vote.variants.map((variant) => {
                                    return <Variant key={variant.name} name={variant.name} description={variant.description}/>
                                })
                            }
                        </div>
                    })
                }
            </div>
        );
    }
}

export default VotingList;