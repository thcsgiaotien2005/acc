import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            search_key:"",
        }
    }
    onChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    handleSearch=()=>{
        this.props.onSearchForm(this.state.search_key);
    }
    handleCloseSearch=()=>{
        this.props.onhandleCloseSearch();
    }
    render() {
        return (
            <div className='container'>
                
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        
                        <form >
                            
                        
                            <div className="form-group">
                                <label >Search: </label>
                                <input type="text" className="form-control" name="search_key" value={this.state.search_key} onChange={this.onChange}  placeholder="Input ID,Fullname,....."/>
                            </div>
                        
                            
                        
                            <button type="button" className="btn btn-primary" onClick={this.handleSearch}>Search</button>
                            
                            <button type="button" className="btn btn-danger" onClick={this.handleCloseSearch}>Close Search</button>
                            
                        </form>
                        
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        
                        </div>
                </div>
                
            </div>
        );
    }
}

export default Search;