import React, { Component } from 'react';
import Image from './Image'

class Response extends Component {
    
    showAllPictures=()=>{

        const picList = this.props.pictures;

        if(picList ===0)return null;

        console.log(picList);

        return(
            
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {picList.map(pic =>(
                        <Image  
                            key={pic.id}
                            pic={pic}
                        />
                    ))} </div>
            </React.Fragment>    
        )
    }

    render() { 
        return(
            <React.Fragment>
                {this.showAllPictures()}
            </React.Fragment>
        );
    }

}
export default Response;