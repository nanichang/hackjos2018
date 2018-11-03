import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


export default class Popular extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }
    
componentDidMount() {
    axios('/api/posts')
    .then(res => {
        console.log('res:', res.data.data);
        this.setState({ posts: res.data.data });
    })
}
    
  render() {
    return (
        <div>
            <section className="section bg-lighter pt--70 pb--70">
                <div className="container">

                    <div className="box--nav clearfix">
                        <h2 className="h2 fw--600 float--left">Most Popular</h2>

                        <ul className="nav ff--primary float--right">
                            <li className="active"><Link to="#boxItemsTab01" className="btn btn-default" data-toggle="tab">Newest</Link></li>
                            <li><Link to="#boxItemsTab02" className="btn btn-default" data-toggle="tab">Active</Link></li>
                            <li><Link to="#boxItemsTab03" className="btn btn-default" data-toggle="tab">Popular</Link></li>
                            <li><Link to="#boxItemsTab04" className="btn btn-default" data-toggle="tab">Alphabetic</Link></li>
                        </ul>
                    </div>

                    <div className="tab-content">

                        <div className="tab-pane fade in active" id="boxItemsTab01">

                            <div className="box--items owl-carousel" data-owl-margin="30" data-owl-autoplay="false" >

                                {this.state.posts.map(post => <div className="box--item text-center">
                                    <Link to="group-home.html" className="img" data-overlay="0.1">
                                        <img src="img/group-img/01.jpg" alt="" />
                                    </Link>

                                    <div className="info">
                                        <div className="icon fs--18 text-lightest bg-primary">
                                            <i className="fa fa-plane"></i>
                                        </div>

                                        <div className="title">
                                            <h2 className="h6"><Link to="group-home.html">{post.posts} </Link></h2>
                                        </div>

                                        <div className="meta">
                                            <p><i className="fa mr--8 fa-clock-o"></i>Active 8 days ago</p>
                                            <p><i className="fa mr--8 fa-user-o"></i>Public Group / 2500 Members</p>
                                        </div>

                                        <div className="desc text-darker">
                                            <p>{post.posts}</p>
                                        </div>

                                        <div className="action">
                                            <Link to={post.url}> Details<i className="fa ml--10 fa-caret-right"></i></Link>
                                        </div>
                                    </div>
                                </div>)}
                                

                            </div>

                            <div className="box--controls text-center">
                                <Link to="#" className="btn fs--16 btn-default" data-action="prev">
                                    <i className="fa fa-caret-left"></i>
                                </Link>

                                <Link to="groups.html" className="btn ff--primary fw--500 btn-default">View All</Link>

                                <Link to="#" className="btn fs--16 btn-default" data-action="next">
                                    <i className="fa fa-caret-right"></i>
                                </Link>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

        </div>
    )
  }
}
