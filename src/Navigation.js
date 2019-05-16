import React, {Component} from 'react';
import Infocard from "./Infocard"
import Data from "./Data"

class Navigation extends Component {
   


    render(){
        return (
            <div className='navigation'>
                <div className="prev">
                    <button onClick={this.props.decreaseCounter}>&lt; Previous </button>
                </div>
                <div className="buttons">
                    <button>Edit</button>
                    <button>Delete</button>
                    <button>New</button>
                </div>
                <div className="next">
                    <button onClick={this.props.updateCounter}>Next &gt;</button>
                </div>
            </div>
        )
    }
}

export default Navigation