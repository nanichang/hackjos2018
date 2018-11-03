import React from 'react';
import { Link } from "react-router-dom";

export default function Popular() {
  return (
    <div>
      <section className="section bg-lighter pt--70 pb--70">
            <div className="container">
                
                <div className="box--nav clearfix">
                    <h2 className="h2 fw--600 float--left">Most Popular Groups</h2>

                    <ul className="nav ff--primary float--right">
                        <li className="active"><Link to="#boxItemsTab01" className="btn btn-default" data-toggle="tab">Newest</Link></li>
                        <li><Link to="#boxItemsTab02" className="btn btn-default" data-toggle="tab">Active</Link></li>
                        <li><Link to="#boxItemsTab03" className="btn btn-default" data-toggle="tab">Popular</Link></li>
                        <li><Link to="#boxItemsTab04" className="btn btn-default" data-toggle="tab">Alphabetic</Link></li>
                    </ul>
            </div>
                
                <div className="tab-content">
                    
                    <div className="tab-pane fade in active" id="boxItemsTab01">
                        
                        <div className="box--items owl-carousel" data-owl-items="4" data-owl-margin="30" data-owl-autoplay="false" data-owl-responsive='{"0": {"items": "1"}, "481": {"items": "2"}, "768": {"items": "3"}, "992": {"items": "4"}}'>
                            
                            <div className="box--item text-center">
                                <Link to="group-home.html" className="img" data-overlay="0.1">
                                    <img src="img/group-img/01.jpg" alt="" />
                                </Link>

                                <div className="info">
                                    <div className="icon fs--18 text-lightest bg-primary">
                                        <i className="fa fa-plane"></i>
                                    </div>

                                    <div className="title">
                                        <h2 className="h6"><Link to="group-home.html">Travel ( Just Take A Tour )</Link></h2>
                                    </div>

                                    <div className="meta">
                                        <p><i className="fa mr--8 fa-clock-o"></i>Active 8 days ago</p>
                                        <p><i className="fa mr--8 fa-user-o"></i>Public Group / 2500 Members</p>
                                    </div>

                                    <div className="desc text-darker">
                                        <p>Lorem Ipsum is simply dummy text of the printing &amp; typesetting.</p>
                                    </div>

                                    <div className="action">
                                        <Link to="group-home.html">Group Details<i className="fa ml--10 fa-caret-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="box--item text-center">
                                <Link to="group-home.html" className="img" data-overlay="0.1">
                                    <img src="img/group-img/02.jpg" alt="" />
                                </Link>

                                <div className="info">
                                    <div className="icon fs--18 text-lightest bg-primary">
                                        <i className="fa fa-music"></i>
                                    </div>

                                    <div className="title">
                                        <h2 className="h6"><Link to="group-home.html">Music Lover ( Injoy Yourself )</Link></h2>
                                    </div>

                                    <div className="meta">
                                        <p><i className="fa mr--8 fa-clock-o"></i>Active 8 days ago</p>
                                        <p><i className="fa mr--8 fa-user-o"></i>Public Group / 2500 Members</p>
                                    </div>

                                    <div className="desc text-darker">
                                        <p>Lorem Ipsum is simply dummy text of the printing &amp; typesetting.</p>
                                    </div>

                                    <div className="action">
                                        <Link to="group-home.html">Group Details<i className="fa ml--10 fa-caret-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="box--item text-center">
                                <Link to="group-home.html" className="img" data-overlay="0.1">
                                    <img src="img/group-img/03.jpg" alt="" />
                                </Link>

                                <div className="info">
                                    <div className="icon fs--18 text-lightest bg-primary">
                                        <i className="fa fa-camera"></i>
                                    </div>

                                    <div className="title">
                                        <h2 className="h6"><Link to="group-home.html">Photography ( Memories )</Link></h2>
                                    </div>

                                    <div className="meta">
                                        <p><i className="fa mr--8 fa-clock-o"></i>Active 8 days ago</p>
                                        <p><i className="fa mr--8 fa-user-o"></i>Public Group / 2500 Members</p>
                                    </div>

                                    <div className="desc text-darker">
                                        <p>Lorem Ipsum is simply dummy text of the printing &amp; typesetting.</p>
                                    </div>

                                    <div className="action">
                                        <Link to="group-home.html">Group Details<i className="fa ml--10 fa-caret-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="box--item text-center">
                                <Link to="group-home.html" className="img" data-overlay="0.1">
                                    <img src="img/group-img/04.jpg" alt="" />
                                </Link>

                                <div className="info">
                                    <div className="icon fs--18 text-lightest bg-primary">
                                        <i className="fa fa-paw"></i>
                                    </div>

                                    <div className="title">
                                        <h2 className="h6"><Link to="group-home.html">Tasty Food Recipes</Link></h2>
                                    </div>

                                    <div className="meta">
                                        <p><i className="fa mr--8 fa-clock-o"></i>Active 8 days ago</p>
                                        <p><i className="fa mr--8 fa-user-o"></i>Public Group / 2500 Members</p>
                                    </div>

                                    <div className="desc text-darker">
                                        <p>Lorem Ipsum is simply dummy text of the printing &amp; typesetting.</p>
                                    </div>

                                    <div className="action">
                                        <Link to="group-home.html">Group Details<i className="fa ml--10 fa-caret-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="box--item text-center">
                                <Link to="group-home.html" className="img" data-overlay="0.1">
                                    <img src="img/group-img/05.jpg" alt="" />
                                </Link>

                                <div className="info">
                                    <div className="icon fs--18 text-lightest bg-primary">
                                        <i className="fa fa-laptop"></i>
                                    </div>

                                    <div className="title">
                                        <h2 className="h6"><Link to="group-home.html">Pet Care ( Passionately )</Link></h2>
                                    </div>

                                    <div className="meta">
                                        <p><i className="fa mr--8 fa-clock-o"></i>Active 8 days ago</p>
                                        <p><i className="fa mr--8 fa-user-o"></i>Public Group / 2500 Members</p>
                                    </div>

                                    <div className="desc text-darker">
                                        <p>Lorem Ipsum is simply dummy text of the printing &amp; typesetting.</p>
                                    </div>

                                    <div className="action">
                                        <Link to="group-home.html">Group Details<i className="fa ml--10 fa-caret-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="box--item text-center">
                                <Link to="group-home.html" className="img" data-overlay="0.1">
                                    <img src="img/group-img/06.jpg" alt="" />
                                </Link>

                                <div className="info">
                                    <div className="icon fs--18 text-lightest bg-primary">
                                        <i className="fa fa-cutlery"></i>
                                    </div>

                                    <div className="title">
                                        <h2 className="h6"><Link to="group-home.html">Technology</Link></h2>
                                    </div>

                                    <div className="meta">
                                        <p><i className="fa mr--8 fa-clock-o"></i>Active 8 days ago</p>
                                        <p><i className="fa mr--8 fa-user-o"></i>Public Group / 2500 Members</p>
                                    </div>

                                    <div className="desc text-darker">
                                        <p>Lorem Ipsum is simply dummy text of the printing &amp; typesetting.</p>
                                    </div>

                                    <div className="action">
                                        <Link to="group-home.html">Group Details<i className="fa ml--10 fa-caret-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className="box--controls text-center">
                            <Link to="#" className="btn fs--16 btn-default" data-action="prev">
                                <i className="fa fa-caret-left"></i>
                            </Link>

                            <Link to="groups.html" className="btn ff--primary fw--500 btn-default">View All Groups</Link>

                            <Link to="#" className="btn fs--16 btn-default" data-action="next">
                                <i className="fa fa-caret-right"></i>
                            </Link>
                        </div>
                        
                    </div>
                    

                    
                    <div className="tab-pane fade" id="boxItemsTab02">
                        
                        <div className="box--items owl-carousel" data-owl-items="4" data-owl-margin="30" data-owl-autoplay="false">
                            
                            <div className="box--item text-center">
                                <Link to="group-home.html" className="img" data-overlay="0.1">
                                    <img src="img/group-img/01.jpg" alt="" />
                                </Link>

                                <div className="info">
                                    <div className="icon fs--18 text-lightest bg-primary">
                                        <i className="fa fa-plane"></i>
                                    </div>

                                    <div className="title">
                                        <h2 className="h6"><Link to="#">Travel ( Just Take A Tour )</Link></h2>
                                    </div>

                                    <div className="meta">
                                        <p><i className="fa mr--8 fa-clock-o"></i>Active 8 days ago</p>
                                        <p><i className="fa mr--8 fa-user-o"></i>Public Group / 2500 Members</p>
                                    </div>

                                    <div className="desc text-darker">
                                        <p>Lorem Ipsum is simply dummy text of the printing &amp; typesetting.</p>
                                    </div>

                                    <div className="action">
                                        <Link to="#">Group Details<i className="fa ml--10 fa-caret-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="box--item text-center">
                                <Link to="group-home.html" className="img" data-overlay="0.1">
                                    <img src="img/group-img/02.jpg" alt="" />
                                </Link>

                                <div className="info">
                                    <div className="icon fs--18 text-lightest bg-primary">
                                        <i className="fa fa-music"></i>
                                    </div>

                                    <div className="title">
                                        <h2 className="h6"><Link to="#">Music Lover ( Injoy Yourself )</Link></h2>
                                    </div>

                                    <div className="meta">
                                        <p><i className="fa mr--8 fa-clock-o"></i>Active 8 days ago</p>
                                        <p><i className="fa mr--8 fa-user-o"></i>Public Group / 2500 Members</p>
                                    </div>

                                    <div className="desc text-darker">
                                        <p>Lorem Ipsum is simply dummy text of the printing &amp; typesetting.</p>
                                    </div>

                                    <div className="action">
                                        <Link to="#">Group Details<i className="fa ml--10 fa-caret-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="box--item text-center">
                                <Link to="group-home.html" className="img" data-overlay="0.1">
                                    <img src="img/group-img/03.jpg" alt="" />
                                </Link>

                                <div className="info">
                                    <div className="icon fs--18 text-lightest bg-primary">
                                        <i className="fa fa-camera"></i>
                                    </div>

                                    <div className="title">
                                        <h2 className="h6"><Link to="#">Photography ( Memories )</Link></h2>
                                    </div>

                                    <div className="meta">
                                        <p><i className="fa mr--8 fa-clock-o"></i>Active 8 days ago</p>
                                        <p><i className="fa mr--8 fa-user-o"></i>Public Group / 2500 Members</p>
                                    </div>

                                    <div className="desc text-darker">
                                        <p>Lorem Ipsum is simply dummy text of the printing &amp; typesetting.</p>
                                    </div>

                                    <div className="action">
                                        <Link to="#">Group Details<i className="fa ml--10 fa-caret-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="box--item text-center">
                                <Link to="group-home.html" className="img" data-overlay="0.1">
                                    <img src="img/group-img/04.jpg" alt="" />
                                </Link>

                                <div className="info">
                                    <div className="icon fs--18 text-lightest bg-primary">
                                        <i className="fa fa-paw"></i>
                                    </div>

                                    <div className="title">
                                        <h2 className="h6"><Link to="#">Tasty Food Recipes</Link></h2>
                                    </div>

                                    <div className="meta">
                                        <p><i className="fa mr--8 fa-clock-o"></i>Active 8 days ago</p>
                                        <p><i className="fa mr--8 fa-user-o"></i>Public Group / 2500 Members</p>
                                    </div>

                                    <div className="desc text-darker">
                                        <p>Lorem Ipsum is simply dummy text of the printing &amp; typesetting.</p>
                                    </div>

                                    <div className="action">
                                        <Link to="#">Group Details<i className="fa ml--10 fa-caret-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="box--item text-center">
                                <Link to="group-home.html" className="img" data-overlay="0.1">
                                    <img src="img/group-img/05.jpg" alt="" />
                                </Link>

                                <div className="info">
                                    <div className="icon fs--18 text-lightest bg-primary">
                                        <i className="fa fa-laptop"></i>
                                    </div>

                                    <div className="title">
                                        <h2 className="h6"><Link to="#">Pet Care ( Passionately )</Link></h2>
                                    </div>

                                    <div className="meta">
                                        <p><i className="fa mr--8 fa-clock-o"></i>Active 8 days ago</p>
                                        <p><i className="fa mr--8 fa-user-o"></i>Public Group / 2500 Members</p>
                                    </div>

                                    <div className="desc text-darker">
                                        <p>Lorem Ipsum is simply dummy text of the printing &amp; typesetting.</p>
                                    </div>

                                    <div className="action">
                                        <Link to="#">Group Details<i className="fa ml--10 fa-caret-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="box--item text-center">
                                <Link to="group-home.html" className="img" data-overlay="0.1">
                                    <img src="img/group-img/06.jpg" alt="" />
                                </Link>

                                <div className="info">
                                    <div className="icon fs--18 text-lightest bg-primary">
                                        <i className="fa fa-cutlery"></i>
                                    </div>

                                    <div className="title">
                                        <h2 className="h6"><Link to="#">Technology</Link></h2>
                                    </div>

                                    <div className="meta">
                                        <p><i className="fa mr--8 fa-clock-o"></i>Active 8 days ago</p>
                                        <p><i className="fa mr--8 fa-user-o"></i>Public Group / 2500 Members</p>
                                    </div>

                                    <div className="desc text-darker">
                                        <p>Lorem Ipsum is simply dummy text of the printing &amp; typesetting.</p>
                                    </div>

                                    <div className="action">
                                        <Link to="#">Group Details<i className="fa ml--10 fa-caret-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className="box--controls text-center">
                            <Link to="#" className="btn fs--16 btn-default" data-action="prev">
                                <i className="fa fa-caret-left"></i>
                            </Link>

                            <Link to="groups.html" className="btn ff--primary fw--500 btn-default">View All Groups</Link>

                            <Link to="#" className="btn fs--16 btn-default" data-action="next">
                                <i className="fa fa-caret-right"></i>
                            </Link>
                        </div>
                        
                    </div>
                    
                    <div className="tab-pane fade" id="boxItemsTab03">
                        
                        <div className="box--items owl-carousel" data-owl-items="4" data-owl-margin="30" data-owl-autoplay="false">
                            
                            <div className="box--item text-center">
                                <Link to="group-home.html" className="img" data-overlay="0.1">
                                    <img src="img/group-img/01.jpg" alt="" />
                                </Link>

                                <div className="info">
                                    <div className="icon fs--18 text-lightest bg-primary">
                                        <i className="fa fa-plane"></i>
                                    </div>

                                    <div className="title">
                                        <h2 className="h6"><Link to="#">Travel ( Just Take A Tour )</Link></h2>
                                    </div>

                                    <div className="meta">
                                        <p><i className="fa mr--8 fa-clock-o"></i>Active 8 days ago</p>
                                        <p><i className="fa mr--8 fa-user-o"></i>Public Group / 2500 Members</p>
                                    </div>

                                    <div className="desc text-darker">
                                        <p>Lorem Ipsum is simply dummy text of the printing &amp; typesetting.</p>
                                    </div>

                                    <div className="action">
                                        <Link to="#">Group Details<i className="fa ml--10 fa-caret-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="box--item text-center">
                                <Link to="group-home.html" className="img" data-overlay="0.1">
                                    <img src="img/group-img/02.jpg" alt="" />
                                </Link>

                                <div className="info">
                                    <div className="icon fs--18 text-lightest bg-primary">
                                        <i className="fa fa-music"></i>
                                    </div>

                                    <div className="title">
                                        <h2 className="h6"><Link to="#">Music Lover ( Injoy Yourself )</Link></h2>
                                    </div>

                                    <div className="meta">
                                        <p><i className="fa mr--8 fa-clock-o"></i>Active 8 days ago</p>
                                        <p><i className="fa mr--8 fa-user-o"></i>Public Group / 2500 Members</p>
                                    </div>

                                    <div className="desc text-darker">
                                        <p>Lorem Ipsum is simply dummy text of the printing &amp; typesetting.</p>
                                    </div>

                                    <div className="action">
                                        <Link to="#">Group Details<i className="fa ml--10 fa-caret-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="box--item text-center">
                                <Link to="group-home.html" className="img" data-overlay="0.1">
                                    <img src="img/group-img/03.jpg" alt="" />
                                </Link>

                                <div className="info">
                                    <div className="icon fs--18 text-lightest bg-primary">
                                        <i className="fa fa-camera"></i>
                                    </div>

                                    <div className="title">
                                        <h2 className="h6"><Link to="#">Photography ( Memories )</Link></h2>
                                    </div>

                                    <div className="meta">
                                        <p><i className="fa mr--8 fa-clock-o"></i>Active 8 days ago</p>
                                        <p><i className="fa mr--8 fa-user-o"></i>Public Group / 2500 Members</p>
                                    </div>

                                    <div className="desc text-darker">
                                        <p>Lorem Ipsum is simply dummy text of the printing &amp; typesetting.</p>
                                    </div>

                                    <div className="action">
                                        <Link to="#">Group Details<i className="fa ml--10 fa-caret-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="box--item text-center">
                                <Link to="group-home.html" className="img" data-overlay="0.1">
                                    <img src="img/group-img/04.jpg" alt="" />
                                </Link>

                                <div className="info">
                                    <div className="icon fs--18 text-lightest bg-primary">
                                        <i className="fa fa-paw"></i>
                                    </div>

                                    <div className="title">
                                        <h2 className="h6"><Link to="#">Tasty Food Recipes</Link></h2>
                                    </div>

                                    <div className="meta">
                                        <p><i className="fa mr--8 fa-clock-o"></i>Active 8 days ago</p>
                                        <p><i className="fa mr--8 fa-user-o"></i>Public Group / 2500 Members</p>
                                    </div>

                                    <div className="desc text-darker">
                                        <p>Lorem Ipsum is simply dummy text of the printing &amp; typesetting.</p>
                                    </div>

                                    <div className="action">
                                        <Link to="#">Group Details<i className="fa ml--10 fa-caret-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="box--item text-center">
                                <Link to="group-home.html" className="img" data-overlay="0.1">
                                    <img src="img/group-img/05.jpg" alt="" />
                                </Link>

                                <div className="info">
                                    <div className="icon fs--18 text-lightest bg-primary">
                                        <i className="fa fa-laptop"></i>
                                    </div>

                                    <div className="title">
                                        <h2 className="h6"><Link to="#">Pet Care ( Passionately )</Link></h2>
                                    </div>

                                    <div className="meta">
                                        <p><i className="fa mr--8 fa-clock-o"></i>Active 8 days ago</p>
                                        <p><i className="fa mr--8 fa-user-o"></i>Public Group / 2500 Members</p>
                                    </div>

                                    <div className="desc text-darker">
                                        <p>Lorem Ipsum is simply dummy text of the printing &amp; typesetting.</p>
                                    </div>

                                    <div className="action">
                                        <Link to="#">Group Details<i className="fa ml--10 fa-caret-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="box--item text-center">
                                <Link to="group-home.html" className="img" data-overlay="0.1">
                                    <img src="img/group-img/06.jpg" alt="" />
                                </Link>

                                <div className="info">
                                    <div className="icon fs--18 text-lightest bg-primary">
                                        <i className="fa fa-cutlery"></i>
                                    </div>

                                    <div className="title">
                                        <h2 className="h6"><Link to="#">Technology</Link></h2>
                                    </div>

                                    <div className="meta">
                                        <p><i className="fa mr--8 fa-clock-o"></i>Active 8 days ago</p>
                                        <p><i className="fa mr--8 fa-user-o"></i>Public Group / 2500 Members</p>
                                    </div>

                                    <div className="desc text-darker">
                                        <p>Lorem Ipsum is simply dummy text of the printing &amp; typesetting.</p>
                                    </div>

                                    <div className="action">
                                        <Link to="#">Group Details<i className="fa ml--10 fa-caret-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className="box--controls text-center">
                            <Link to="#" className="btn fs--16 btn-default" data-action="prev">
                                <i className="fa fa-caret-left"></i>
                            </Link>

                            <Link to="groups.html" className="btn ff--primary fw--500 btn-default">View All Groups</Link>

                            <Link to="#" className="btn fs--16 btn-default" data-action="next">
                                <i className="fa fa-caret-right"></i>
                            </Link>
                        </div>
                        
                    </div>
                    
                    <div className="tab-pane fade" id="boxItemsTab04">
                        
                        <div className="box--items owl-carousel" data-owl-items="4" data-owl-margin="30" data-owl-autoplay="false">
                            
                            <div className="box--item text-center">
                                <Link to="group-home.html" className="img" data-overlay="0.1">
                                    <img src="img/group-img/01.jpg" alt="" />
                                </Link>

                                <div className="info">
                                    <div className="icon fs--18 text-lightest bg-primary">
                                        <i className="fa fa-plane"></i>
                                    </div>

                                    <div className="title">
                                        <h2 className="h6"><Link to="#">Travel ( Just Take A Tour )</Link></h2>
                                    </div>

                                    <div className="meta">
                                        <p><i className="fa mr--8 fa-clock-o"></i>Active 8 days ago</p>
                                        <p><i className="fa mr--8 fa-user-o"></i>Public Group / 2500 Members</p>
                                    </div>

                                    <div className="desc text-darker">
                                        <p>Lorem Ipsum is simply dummy text of the printing &amp; typesetting.</p>
                                    </div>

                                    <div className="action">
                                        <Link to="#">Group Details<i className="fa ml--10 fa-caret-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="box--item text-center">
                                <Link to="group-home.html" className="img" data-overlay="0.1">
                                    <img src="img/group-img/02.jpg" alt="" />
                                </Link>

                                <div className="info">
                                    <div className="icon fs--18 text-lightest bg-primary">
                                        <i className="fa fa-music"></i>
                                    </div>

                                    <div className="title">
                                        <h2 className="h6"><Link to="#">Music Lover ( Injoy Yourself )</Link></h2>
                                    </div>

                                    <div className="meta">
                                        <p><i className="fa mr--8 fa-clock-o"></i>Active 8 days ago</p>
                                        <p><i className="fa mr--8 fa-user-o"></i>Public Group / 2500 Members</p>
                                    </div>

                                    <div className="desc text-darker">
                                        <p>Lorem Ipsum is simply dummy text of the printing &amp; typesetting.</p>
                                    </div>

                                    <div className="action">
                                        <Link to="#">Group Details<i className="fa ml--10 fa-caret-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="box--item text-center">
                                <Link to="group-home.html" className="img" data-overlay="0.1">
                                    <img src="img/group-img/03.jpg" alt="" />
                                </Link>

                                <div className="info">
                                    <div className="icon fs--18 text-lightest bg-primary">
                                        <i className="fa fa-camera"></i>
                                    </div>

                                    <div className="title">
                                        <h2 className="h6"><Link to="#">Photography ( Memories )</Link></h2>
                                    </div>

                                    <div className="meta">
                                        <p><i className="fa mr--8 fa-clock-o"></i>Active 8 days ago</p>
                                        <p><i className="fa mr--8 fa-user-o"></i>Public Group / 2500 Members</p>
                                    </div>

                                    <div className="desc text-darker">
                                        <p>Lorem Ipsum is simply dummy text of the printing &amp; typesetting.</p>
                                    </div>

                                    <div className="action">
                                        <Link to="#">Group Details<i className="fa ml--10 fa-caret-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="box--item text-center">
                                <Link to="group-home.html" className="img" data-overlay="0.1">
                                    <img src="img/group-img/04.jpg" alt="" />
                                </Link>

                                <div className="info">
                                    <div className="icon fs--18 text-lightest bg-primary">
                                        <i className="fa fa-paw"></i>
                                    </div>

                                    <div className="title">
                                        <h2 className="h6"><Link to="#">Tasty Food Recipes</Link></h2>
                                    </div>

                                    <div className="meta">
                                        <p><i className="fa mr--8 fa-clock-o"></i>Active 8 days ago</p>
                                        <p><i className="fa mr--8 fa-user-o"></i>Public Group / 2500 Members</p>
                                    </div>

                                    <div className="desc text-darker">
                                        <p>Lorem Ipsum is simply dummy text of the printing &amp; typesetting.</p>
                                    </div>

                                    <div className="action">
                                        <Link to="#">Group Details<i className="fa ml--10 fa-caret-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="box--item text-center">
                                <Link to="group-home.html" className="img" data-overlay="0.1">
                                    <img src="img/group-img/05.jpg" alt="" />
                                </Link>

                                <div className="info">
                                    <div className="icon fs--18 text-lightest bg-primary">
                                        <i className="fa fa-laptop"></i>
                                    </div>

                                    <div className="title">
                                        <h2 className="h6"><Link to="#">Pet Care ( Passionately )</Link></h2>
                                    </div>

                                    <div className="meta">
                                        <p><i className="fa mr--8 fa-clock-o"></i>Active 8 days ago</p>
                                        <p><i className="fa mr--8 fa-user-o"></i>Public Group / 2500 Members</p>
                                    </div>

                                    <div className="desc text-darker">
                                        <p>Lorem Ipsum is simply dummy text of the printing &amp; typesetting.</p>
                                    </div>

                                    <div className="action">
                                        <Link to="#">Group Details<i className="fa ml--10 fa-caret-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="box--item text-center">
                                <Link to="group-home.html" className="img" data-overlay="0.1">
                                    <img src="img/group-img/06.jpg" alt="" />
                                </Link>

                                <div className="info">
                                    <div className="icon fs--18 text-lightest bg-primary">
                                        <i className="fa fa-cutlery"></i>
                                    </div>

                                    <div className="title">
                                        <h2 className="h6"><Link to="#">Technology</Link></h2>
                                    </div>

                                    <div className="meta">
                                        <p><i className="fa mr--8 fa-clock-o"></i>Active 8 days ago</p>
                                        <p><i className="fa mr--8 fa-user-o"></i>Public Group / 2500 Members</p>
                                    </div>

                                    <div className="desc text-darker">
                                        <p>Lorem Ipsum is simply dummy text of the printing &amp; typesetting.</p>
                                    </div>

                                    <div className="action">
                                        <Link to="#">Group Details<i className="fa ml--10 fa-caret-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className="box--controls text-center">
                            <Link to="#" className="btn fs--16 btn-default" data-action="prev">
                                <i className="fa fa-caret-left"></i>
                            </Link>

                            <Link to="groups.html" className="btn ff--primary fw--500 btn-default">View All Groups</Link>

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
