import React from 'react'
import { browserHistory } from 'react-router'
import { searchAction } from '../actions/search'

export class Search extends React.Component {
    componentWillMount() {
        this.onSearchClick = this.props.onSearchClick;
        this.inputPalceholder = 'Nunca dejes de buscar';
    }

    handleSubmit(e) {
        e.preventDefault();
        browserHistory.push('/items?search=' + this.input.value)
        this.onSearchClick(this.input.value);
    }

    render() {
        return (
            <div className="row justify-content-center search-container">
                <div className="col-md-10 search">
                    <div className="row">
                        <div className="col-md-1">
                            <span className="sprite sprite-Logo_ML"></span>
                            <img src="/public/media/Logo_ML.png" alt="" />
                        </div>
                        <form className="col-md-11">
                            <div className="input-group search-box">
                                <input type="text" ref={(input) => this.input = input} className="form-control" placeholder={this.inputPalceholder} />
                                <span className="input-group-btn search-button">
                                    <button className="btn btn-default sprite sprite-ic_Search" type="submit" onClick={(e) => this.handleSubmit(e)}></button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

