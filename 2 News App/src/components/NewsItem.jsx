import React, { Component } from 'react'

export default class extends Component {
    
    render() {
        let {title,description,imgUrl,newsUrl} = this.props;
        return (
            <div>
                <div className="my-3">
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src={imgUrl} alt="Card image cap" height="160.65" width="256"/>
                            <div className="card-body" style={{height: "286px", width: "214px"}}>
                                <h5 className="card-title">{title}...</h5>
                                <p className="card-text">{description}...</p>
                                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
