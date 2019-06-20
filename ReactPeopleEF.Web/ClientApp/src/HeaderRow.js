import React from 'react';
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom';

class HeaderRow extends React.Component {
    render() {
        const {
            onInputChange,
            onAddClick,
            person,
        } = this.props;
        return (
            <div className="row">
                <div className="col-md-3">
                    <Link to='/addperson'>
                        <button className="btn btn-primary">Add Person</button>
                    </Link>
                    <hr />
                </div>
            </div>);
    }
}

export default HeaderRow;