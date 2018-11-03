import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="cover--header pt--80 text-center" data-bg-img="img/cover-header-img/bg-01.jpg" data-overlay="0.6" data-overlay-color="white">
          <div className="container">
            <div className="cover--avatar online" data-overlay="0.3" data-overlay-color="primary">
              <img src="img/cover-header-img/avatar-01.jpg" alt="" />
                </div>

              <div className="cover--user-name">
                <h2 className="h3 fw--600">Eileen K. Ruiz</h2>
              </div>

              <div className="cover--user-activity">
                <p><i className="fa mr--8 fa-clock-o"></i>Active 1 year 9 monts ago</p>
              </div>

              <div className="cover--user-desc fw--400 fs--18 fstyle--i text-darkest">
                <p>Hello everyone ! There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
              </div>
            </div>
          </div>
          
  
        
        <section className="page--wrapper pt--80 pb--20">
            <div className="container">
              <div className="row">
                
                    <div className="main--content col-md-8 pb--60" data-trigger="stickyScroll">
                  <div className="main--content-inner drop--shadow">
                    
                            <div className="content--nav pb--30">
                      <ul className="nav ff--primary fs--14 fw--500 bg-lighter">
                        <li className="active"><Link to="member-activity-personal.html">Activity</Link></li>
                        <li><Link to="member-profile.html">Profile</Link></li>
                        <li><Link to="member-friends.html">Friends</Link></li>
                        <li><Link to="member-groups.html">Groups</Link></li>
                        <li><Link to="member-forum-topics.html">Forum</Link></li>
                        <li><Link to="member-media-all.html">Media</Link></li>
                      </ul>
                    </div>
                    

                            
                            <div className="filter--nav pb--60 clearfix">
                      <div className="filter--links float--left">
                        <ul className="nav ff--primary">
                          <li className="active"><Link to="member-activity-persoanl.html">Personal</Link></li>
                          <li><Link to="member-activity-mentions.html">Mentions</Link></li>
                          <li><Link to="member-activity-favorites.html">Favorites</Link></li>
                          <li><Link to="member-activity-friends.html">Friends</Link></li>
                          <li><Link to="member-activity-groups.html">Groups</Link></li>
                        </ul>
                      </div>

                      <div className="filter--options float--right">
                        <label>
                          <span className="fs--14 ff--primary fw--500 text-darker">Show By :</span>

                          <select name="activityfilter" className="form-control form-sm" data-trigger="selectmenu">
                            <option value="updates">Updates</option>
                            <option value="friendships">Friendships</option>
                            <option value="group-updates">Group Updats</option>
                            <option value="membership">Membership</option>
                            <option value="topics">Topics</option>
                            <option value="replies">Replies</option>
                            <option value="posts">Posts</option>
                            <option value="comments">Comments</option>
                          </select>
                        </label>
                      </div>
                    </div>
                    

                            
                            <div className="activity--list">
                      
                                <ul className="activity--items nav">
                        <li>
                          
                                        <div className="activity--item">
                            <div className="activity--avatar">
                              <Link to="member-activity-personal.html">
                                <img src="img/activity-img/avatar-01.jpg" alt="" />
                                                </Link>
                                            </div>

                              <div className="activity--info fs--14">
                                <div className="activity--header">
                                  <p><Link to="member-activity-personal.html">Eileen K. Ruiz</Link> posted an update</p>
                                </div>

                                <div className="activity--meta fs--12">
                                  <p><i className="fa mr--8 fa-clock-o"></i>Yeasterday at 08:20 am</p>
                                </div>

                                <div className="activity--content">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam quo deserunt a suscipit perferendis dicta at eveniet officiis!</p>
                                </div>
                              </div>
                            </div>
                            
                                    </li>
                          <li>
                            
                                        <div className="activity--item">
                              <div className="activity--avatar">
                                <Link to="member-activity-personal.html">
                                  <img src="img/activity-img/avatar-01.jpg" alt="" />
                                                </Link>
                                            </div>

                                <div className="activity--info fs--14">
                                  <div className="activity--header">
                                    <p><Link to="member-activity-personal.html">Eileen K. Ruiz</Link> posted an update in the group <Link to="group-home.html">Crazy Music Lovers</Link></p>
                                  </div>

                                  <div className="activity--meta fs--12">
                                    <p><i className="fa mr--8 fa-clock-o"></i>Yeasterday at 08:20 am</p>
                                  </div>

                                  <div className="activity--content">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing</p>
                                  </div>

                                  <div className="activity--action fw--700">
                                    <Link to="#">See More...</Link>
                                  </div>

                                  <div className="activity--comments fs--12">
                                    <ul className="acomment--items nav">
                                      <li>
                                        <div className="acomment--item clearfix">
                                          <div className="acomment--avatar">
                                            <Link to="member-activity-personal.html">
                                              <img src="img/activity-img/avatar-04.jpg" alt="" />
                                                                    </Link>
                                                                </div>

                                            <div className="acomment--info">
                                              <div className="acomment--header">
                                                <p><Link to="#">Leticia J. Espinosa</Link> Replied</p>
                                              </div>

                                              <div className="acomment--meta">
                                                <p><i className="fa mr--8 fa-clock-o"></i>Yeasterday at 08:20 am</p>
                                              </div>

                                              <div className="acomment--content">
                                                <p>Well Said!</p>
                                                <p>Love it..... <span>&hearts; &hearts; &hearts;</span></p>
                                              </div>
                                            </div>
                                          </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                  </div>
                                </div>
                                
                                    </li>
                              <li>
                                
                                        <div className="activity--item">
                                  <div className="activity--avatar">
                                    <Link to="member-activity-personal.html">
                                      <img src="img/activity-img/avatar-01.jpg" alt="" />
                                                </Link>
                                            </div>

                                    <div className="activity--info fs--14">
                                      <div className="activity--header">
                                        <p><Link to="member-activity-personal.html">Eileen K. Ruiz</Link> and <Link to="member-activity-personal.html">Leticia J. Espinosa</Link> are now friends</p>
                                      </div>

                                      <div className="activity--meta fs--12">
                                        <p><i className="fa mr--8 fa-clock-o"></i>Yeasterday at 08:20 am</p>
                                      </div>
                                    </div>
                                  </div>
                                  
                                    </li>
                                <li>
                                  
                                        <div className="activity--item">
                                    <div className="activity--avatar">
                                      <Link to="member-activity-personal.html">
                                        <img src="img/activity-img/avatar-01.jpg" alt="" />
                                                </Link>
                                            </div>

                                      <div className="activity--info fs--14">
                                        <div className="activity--header">
                                          <p><Link to="member-activity-personal.html">Eileen K. Ruiz</Link> posted an update in the group <Link to="group-home.html">Crazy Music Lovers</Link></p>
                                        </div>

                                        <div className="activity--meta fs--12">
                                          <p><i className="fa mr--8 fa-clock-o"></i>Yeasterday at 08:20 am</p>
                                        </div>

                                        <div className="activity--content">
                                          <div className="link--embed">
                                            <Link className="link--url" to="https://www.youtube.com/watch?v=YE7VzlLtp-4" data-trigger="video_popup"></Link>

                                            <div className="link--video">
                                              <img src="img/activity-img/link-video-poster.jpg" alt="" />
                                                        </div>

                                              <div className="link--info fs--12">
                                                <div className="link--title">
                                                  <h4 className="h6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered</h4>
                                                </div>

                                                <div className="link--desc">
                                                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing</p>
                                                </div>

                                                <div className="link--rel ff--primary text-uppercase">
                                                  <p>www.unknownneonnettle.com</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      
                                    </li>
                                    <li>
                                      
                                        <div className="activity--item">
                                        <div className="activity--avatar">
                                          <Link to="member-activity-personal.html">
                                            <img src="img/activity-img/avatar-01.jpg" alt="" />
                                                </Link>
                                            </div>

                                          <div className="activity--info fs--14">
                                            <div className="activity--header">
                                              <p><Link to="member-activity-personal.html">Eileen K. Ruiz</Link> posted an update in the group <Link to="group-home.html">Crazy Music Lovers</Link></p>
                                            </div>

                                            <div className="activity--meta fs--12">
                                              <p><i className="fa mr--8 fa-clock-o"></i>Yeasterday at 08:20 am</p>
                                            </div>

                                            <div className="activity--content">
                                              <div className="gallery--embed" data-trigger="gallery_popup">
                                                <ul className="nav AdjustRow">
                                                  <li>
                                                    <Link to="img/activity-img/gallery-embed-01.jpg">
                                                      <img src="img/activity-img/gallery-embed-01.jpg" alt="" />
                                                                </Link>
                                                            </li>
                                                    <li>
                                                      <Link to="img/activity-img/gallery-embed-02.jpg">
                                                        <img src="img/activity-img/gallery-embed-02.jpg" alt="" />
                                                                </Link>
                                                            </li>
                                                      <li>
                                                        <Link to="img/activity-img/gallery-embed-03.jpg">
                                                          <img src="img/activity-img/gallery-embed-03.jpg" alt="" />
                                                                </Link>
                                                            </li>
                                                        <li>
                                                          <Link to="img/activity-img/gallery-embed-04.jpg" data-overlay="0.5">
                                                            <img src="img/activity-img/gallery-embed-04.jpg" alt="" />
                                                              <span>24+ More</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                                
                                    </li>
                                              <li>
                                                
                                        <div className="activity--item">
                                                  <div className="activity--avatar">
                                                    <Link to="member-activity-personal.html">
                                                      <img src="img/activity-img/avatar-01.jpg" alt="" />
                                                </Link>
                                            </div>

                                                    <div className="activity--info fs--14">
                                                      <div className="activity--header">
                                                        <p><Link to="member-activity-personal.html">Eileen K. Ruiz</Link> joined the group <Link to="group-home.html">Crazy Music Lovers</Link></p>
                                                      </div>

                                                      <div className="activity--meta fs--12">
                                                        <p><i className="fa mr--8 fa-clock-o"></i>Yeasterday at 08:20 am</p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  
                                    </li>
                                </ul>
                                              
                            </div>
                                            
                        </div>

                                          
                        <div className="load-more--btn pt--30 text-center">
                                            <Link to="#" className="btn btn-animate">
                                              <span>See More Activities<i className="fa ml--10 fa-caret-right"></i></span>
                                            </Link>
                                          </div>

                    </div>
                                        
                    
                    
                    <div className="main--sidebar col-md-4 pb--60" data-trigger="stickyScroll">
                                          
                        <div className="widget">
                                            <h2 className="h4 fw--700 widget--title">Find A Buddy</h2>

                                            
                            <div className="buddy-finder--widget">
                                              <form action="#">
                                                <div className="row">
                                                  <div className="col-xs-6 col-xxs-12">
                                                    <div className="form-group">
                                                      <label>
                                                        <span className="text-darker ff--primary fw--500">I Am</span>

                                                        <select name="gender" className="form-control form-sm" data-trigger="selectmenu">
                                                          <option value="male">Male</option>
                                                          <option value="female">Female</option>
                                                          <option value="other">Other</option>
                                                        </select>
                                                      </label>
                                                    </div>
                                                  </div>

                                                  <div className="col-xs-6 col-xxs-12">
                                                    <div className="form-group">
                                                      <label>
                                                        <span className="text-darker ff--primary fw--500">Looking For</span>

                                                        <select name="lookingfor" className="form-control form-sm" data-trigger="selectmenu">
                                                          <option value="female">Female</option>
                                                          <option value="male">Male</option>
                                                          <option value="other">Other</option>
                                                        </select>
                                                      </label>
                                                    </div>
                                                  </div>

                                                  <div className="col-xs-6 col-xxs-12">
                                                    <div className="form-group">
                                                      <label>
                                                        <span className="text-darker ff--primary fw--500">Age</span>

                                                        <select name="age" className="form-control form-sm" data-trigger="selectmenu">
                                                          <option value="18to25">18 to 25</option>
                                                          <option value="25to30">25 to 30</option>
                                                          <option value="30to35">30 to 35</option>
                                                          <option value="35to40">35 to 40</option>
                                                          <option value="40plus">40+</option>
                                                        </select>
                                                      </label>
                                                    </div>
                                                  </div>

                                                  <div className="col-xs-6 col-xxs-12">
                                                    <div className="form-group">
                                                      <label>
                                                        <span className="text-darker ff--primary fw--500">City</span>

                                                        <select name="city" className="form-control form-sm" data-trigger="selectmenu">
                                                          <option value="newyork">New York</option>
                                                          <option value="California">California</option>
                                                          <option value="Atlanta">Atlanta</option>
                                                        </select>
                                                      </label>
                                                    </div>
                                                  </div>

                                                  <div className="col-xs-12">
                                                    <div className="form-group">
                                                      <label>
                                                        <span className="text-darker ff--primary fw--500">Filter Country</span>

                                                        <select name="city" className="form-control form-sm" data-trigger="selectmenu">
                                                          <option value="unitedstates">United States</option>
                                                          <option value="australia">Australia</option>
                                                          <option value="turkey">Turkey</option>
                                                          <option value="vietnam">Vietnam</option>
                                                        </select>
                                                      </label>
                                                    </div>
                                                  </div>

                                                  <div className="col-xs-12">
                                                    <button type="submit" className="btn btn-primary">Search</button>
                                                  </div>
                                                </div>
                                              </form>
                                            </div>
                                            
                        </div>
                                          
                        <div className="widget">
                                            <h2 className="h4 fw--700 widget--title">Notice</h2>

                                            
                            <div className="text--widget">
                                              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some  look even slightly believable.</p>
                                            </div>
                                            
                        </div>
                                          
                        <div className="widget">
                                            <h2 className="h4 fw--700 widget--title">Forums</h2>

                                            
                            <div className="links--widget">
                                              <ul className="nav">
                                                <li><Link to="sub-forums.html">User Interface Design<span>(12)</span></Link></li>
                                                <li><Link to="sub-forums.html">Front-End Engineering<span>(07)</span></Link></li>
                                                <li><Link to="sub-forums.html">Web Development<span>(37)</span></Link></li>
                                                <li><Link to="sub-forums.html">Social Media Marketing<span>(13)</span></Link></li>
                                                <li><Link to="sub-forums.html">Content Marketing<span>(28)</span></Link></li>
                                              </ul>
                                            </div>
                                            
                        </div>
                                          
                  
                        
                        <div className="widget">
                                            <h2 className="h4 fw--700 widget--title">Archives</h2>

                                            
                            <div className="nav--widget">
                                              <ul className="nav">
                                                <li>
                                                  <Link to="#">
                                                    <i className="fa fa-calendar-o"></i>
                                                    <span className="text">Jan - July 2017</span>
                                                    <span className="count">(86)</span>
                                                  </Link>
                                                </li>
                                                <li>
                                                  <Link to="#">
                                                    <i className="fa fa-calendar-o"></i>
                                                    <span className="text">Jan - Dce 2016</span>
                                                    <span className="count">(328)</span>
                                                  </Link>
                                                </li>
                                                <li>
                                                  <Link to="#">
                                                    <i className="fa fa-calendar-o"></i>
                                                    <span className="text">Jan - Dec 2015</span>
                                                    <span className="count">(427)</span>
                                                  </Link>
                                                </li>
                                              </ul>
                                            </div>
                                            
                        </div>
                                          
                        <div className="widget">
                                            <h2 className="h4 fw--700 widget--title">Advertisements</h2>

                                            
                            <div className="ad--widget">
                                              <Link to="#">
                                                <img src="img/widgets-img/ad.jpg" alt="" className="center-block" />
                                </Link>
                            </div>
                                              
                        </div>
                                            
                    </div>
                                          
                </div>
                                      </div>
        </section>
      </div>
      
      
    
    )
  }
}
