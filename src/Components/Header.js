import React, {Component} from 'react'
class Header extends Component {

    render() {
        return (
            <div className="header">
                <nav className="navbar navbar-light bg-dark justify-content-around">
                    <a className="navbar-brand">Movie App</a>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search Movie" aria-label="Search"></input>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
            </div>
        )
    }
}






export default Header



