import React from 'react';

const Image = (props) => {

    const {previewURL, likes, views, tags, largeImageURL} = props.pic; 

    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top"/>
                <div className="card-body">
                    <p className="card-text">{likes} Likes</p>
                    <p className="card-text">{views} Views</p>

                    <a href={largeImageURL} rel="noreferrer" target="_blank" className="btn btn-primary btn-block">See the picture</a>
                </div>
            </div>
        </div>
    )
}
export default Image