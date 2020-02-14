import React from 'react';
import './Dropdown.css';

class Dropdown extends React.Component {

    render() {
        return (
            <section className="dropdown" onMouseLeave={this.props.mouseLeave}>
                {this.props.items.map((item, index) =>
                    <a href="#" key={index}> {item} </a>
                )}
            </section>
        );
    }
    
}

export default Dropdown;