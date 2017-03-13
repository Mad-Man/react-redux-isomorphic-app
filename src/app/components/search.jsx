import React from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { fetchList } from '../list/actions/fetch-list'

@connect((store) => {
    return store;
})
export class Search extends React.Component {
    componentWillMount() {
        this.onSearchClick = this.props.onSearchClick;
        this.inputPalceholder = 'Nunca dejes de buscar';
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.input.value) {
            browserHistory.push('/items?search=' + this.input.value)
            this.input.value = '';
        }
    }

    componentWillReceiveProps(nextProps) {
        let nextQuery = _.get(nextProps, 'location.query.search')
        if (nextQuery && !_.isEqual(_.get(this, 'props.location'), nextProps.location)) {
            this.props.dispatch({ type: 'REQUEST_LIST_START', payload: null })
            this.props.dispatch(fetchList(nextQuery));
        }
    }

    render() {
        return (
            <header>
                <div className="container">
                    <div className="row justify-content-center search-container">
                        <div className="col-12 search">
                            <div className="row">
                                <figure className="col-2 col-md-1 offset-1">
                                    <img src="/dist/media/Logo_ML.png" alt="Mercado Libre" />
                                </figure>
                                <form className="col-8 col-md-9">
                                    <div className="input-group search-box">
                                        <label className="sr-only" htmlFor="searchInput">Buscar</label>
                                        <input type="text" id="searchInput" ref={(input) => this.input = input} className="form-control" placeholder={this.inputPalceholder} />
                                        <span className="input-group-btn search-button">
                                            <button className="btn btn-default sprite sprite-ic_Search"
                                                type="submit"
                                                aria-label="Buscar"
                                                onClick={(e) => this.handleSubmit(e)}>
                                            </button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

