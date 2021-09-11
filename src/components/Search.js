import React, { Component } from 'react';

class Search extends Component{

    searchRef = React.createRef();

    getData = (e) => {
        e.preventDefault();
        
        const input = this.searchRef.current.value;

        this.props.searchData(input)
    }
    
    render(){
        return (
            <form onSubmit={this.getData}> 
                <div className="row">
                  
                    <div className="from-group col-md-4">
                        <input ref={this.searchRef} type="text" className="form-control form-control-lg" placeholder=""></input>
                    </div>
                    <div className="from-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Search"></input>
                    </div>
                </div>
            </form>


         );
    }
}


export default Search;