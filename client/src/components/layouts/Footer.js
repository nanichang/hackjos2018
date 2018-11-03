import React from 'react';
import { Link } from "react-router-dom";

export default () => {
  return (
    <footer className="footer--section">
      
            <div className="footer--widgets pt--70 pb--20 bg-lightdark" data-bg-img="img/footer-img/footer-widgets-bg.png">
        <div className="container">
          <div className="row AdjustRow">
            <div className="col-md-3 col-xs-6 col-xxs-12 pb--60">
              
                            <div className="widget">
                <h2 className="h4 fw--700 widget--title">About Us</h2>

                
                                <div className="text--widget">
                  <p>Ipsum is simply dummy text of the printing indusLorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
                
                            </div>
              

                            
                            <div className="widget">
                <h2 className="h4 fw--700 widget--title">Subscribe To Our Newsletter</h2>

                
                                <div className="newsletter--widget style--1" data-form="validate">
                  <form action="https://themelooks.us13.list-manage.com/subscribe/post?u=79f0b132ec25ee223bb41835f&id=f4e0e93d1d" method="post" name="mc-embedded-subscribe-form" target="_blank">
                    <div className="input-group">
                      <input type="email" name="EMAIL" placeholder="Enter your emil address" className="form-control" autoComplete="off" required />

                        <div className="input-group-btn">
                          <button type="submit" className="btn-link"><i className="fa fa-send-o"></i></button>
                        </div>
                                        </div>
                                    </form>
                                </div>
                  
                            </div>
                
                        </div>

              <div className="col-md-3 col-xs-6 col-xxs-12 pb--60">
                
                            <div className="widget">
                  <h2 className="h4 fw--700 widget--title">Recent Post</h2>

                  
                                <div className="recent-posts--widget">
                    <ul className="nav">
                      <li>
                        <p className="date fw--300">
                          <Link to="#"><i className="fa mr--8 fa-file-text-o"></i>19 Jan 2017</Link>
                        </p>
                        <p className="title fw--700">
                          <Link to="blog-details.html">I look at you and see the rest of my life in front</Link>
                        </p>
                      </li>
                      <li>
                        <p className="date fw--300">
                          <Link to="#"><i className="fa mr--8 fa-file-text-o"></i>19 Jan 2017</Link>
                        </p>
                        <p className="title fw--700">
                          <Link to="blog-details.html">If I know what love is, it is because of you</Link>
                        </p>
                      </li>
                      <li>
                        <p className="date fw--300">
                          <Link to="#"><i className="fa mr--8 fa-file-text-o"></i>19 Jan 2017</Link>
                        </p>
                        <p className="title fw--700">
                          <Link to="blog-details.html">At the touch of love everyone becomes a poet</Link>
                        </p>
                      </li>
                    </ul>
                  </div>
                  
                            </div>
                

                            
                            <div className="widget">
                  <h2 className="h4 fw--700 widget--title">Tags</h2>

                  
                                <div className="tags--widget">
                    <ul className="nav">
                      <li><Link to="#">BuddyPress</Link></li>
                      <li><Link to="#">HTML</Link></li>
                      <li><Link to="#">Music</Link></li>
                      <li><Link to="#">Technology</Link></li>
                      <li><Link to="#">Movies</Link></li>
                      <li><Link to="#">Photography</Link></li>
                      <li><Link to="#">WordPress</Link></li>
                    </ul>
                  </div>
                  
                            </div>
                
                        </div>

              <div className="col-md-3 col-xs-6 col-xxs-12 pb--60">
                
                            <div className="widget">
                  <h2 className="h4 fw--700 widget--title">Some of Catagories</h2>

                  
                                <div className="nav--widget">
                    <ul className="nav">
                      <li>
                        <Link to="#">
                          <i className="fa fa-folder-o"></i>
                          <span className="text">Social Media</span>
                          <span className="count">(26)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-folder-o"></i>
                          <span className="text">Business Studies</span>
                          <span className="count">(06)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-folder-o"></i>
                          <span className="text">Technology</span>
                          <span className="count">(34)</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                            </div>
                

                            
                            <div className="widget">
                  <h2 className="h4 fw--700 widget--title">From Archives</h2>

                  
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
                
                        </div>

              <div className="col-md-3 col-xs-6 col-xxs-12 pb--60">
                
                            <div className="widget">
                  <h2 className="h4 fw--700 widget--title">Forums</h2>

                  
                                <div className="links--widget">
                    <ul className="nav">
                      <li><Link to="sub-forums.html">User Interface Design</Link></li>
                      <li><Link to="sub-forums.html">Front-End Engineering</Link></li>
                      <li><Link to="sub-forums.html">Web Development</Link></li>
                      <li><Link to="sub-forums.html">Social Media Marketing</Link></li>
                      <li><Link to="sub-forums.html">Content Marketing</Link></li>
                    </ul>
                  </div>
                  
                            </div>
               
                            <div className="widget">
                  <h2 className="h4 fw--700 widget--title">Useful Links</h2>

                  
                                <div className="links--widget">
                    <ul className="nav">
                      <li><Link to="#">Register</Link></li>
                      <li><Link to="#">Login</Link></li>
                      <li><Link to="#">Membership Levels</Link></li>
                      <li><Link to="#">Shop</Link></li>
                      <li><Link to="#">Contact</Link></li>
                    </ul>
                  </div>
                  
                            </div>
                
                        </div>
            </div>
          </div>
        </div>
        
            <div className="footer--extra bg-darker pt--30 pb--40 text-center">
          <div className="container">
            
                    <div className="widget">
              <h2 className="h4 fw--700 widget--title">Recent Active Members</h2>

              
                        <div className="recent-active-members--widget style--2">
                <div className="owl-carousel" data-owl-items="12" data-owl-nav="true" data-owl-speed="1200" data-owl-responsive='{"0": {"items": "3"}, "481": {"items": "6"}, "768": {"items": "8"}, "992": {"items": "12"}}'>
                  <div className="img">
                    <Link to="member-activity-personal.html"><img src="img/widgets-img/recent-active-members/01.jpg" alt="" /></Link>
                                </div>

                    <div className="img">
                      <Link to="member-activity-personal.html"><img src="img/widgets-img/recent-active-members/02.jpg" alt="" /></Link>
                                </div>

                      <div className="img">
                        <Link to="member-activity-personal.html"><img src="img/widgets-img/recent-active-members/03.jpg" alt=""/></Link>
                                </div>

                        <div className="img">
                          <Link to="member-activity-personal.html"><img src="img/widgets-img/recent-active-members/04.jpg" alt="" /></Link>
                                </div>

                          <div className="img">
                            <Link to="member-activity-personal.html"><img src="img/widgets-img/recent-active-members/05.jpg" alt="" /></Link>
                                </div>

                            <div className="img">
                              <Link to="member-activity-personal.html"><img src="img/widgets-img/recent-active-members/06.jpg" alt="" /></Link>
                                </div>

                              <div className="img">
                                <Link to="member-activity-personal.html"><img src="img/widgets-img/recent-active-members/07.jpg" alt="" /></Link>
                                </div>

                                <div className="img">
                                  <Link to="member-activity-personal.html"><img src="img/widgets-img/recent-active-members/08.jpg" alt="" /></Link>
                                </div>

                                  <div className="img">
                                    <Link to="member-activity-personal.html"><img src="img/widgets-img/recent-active-members/09.jpg" alt="" /></Link>
                                </div>

                                    <div className="img">
                                      <Link to="member-activity-personal.html"><img src="img/widgets-img/recent-active-members/10.jpg" alt="" /></Link>
                                </div>

                                      <div className="img">
                                        <Link to="member-activity-personal.html"><img src="img/widgets-img/recent-active-members/11.jpg" alt="" /></Link>
                                </div>

                                        <div className="img">
                                          <Link to="member-activity-personal.html"><img src="img/widgets-img/recent-active-members/12.jpg" alt="" /></Link>
                                </div>

                                          <div className="img">
                                            <Link to="member-activity-personal.html"><img src="img/widgets-img/recent-active-members/13.jpg" alt="" /></Link>
                                </div>
                                          </div>
                                        </div>
                                        
                    </div>
                                      
                </div>
                                  </div>
                                  
                      
            
            <div className="footer--copyright pt--30 pb--30 bg-darkest">
                                    <div className="container">
                                      <div className="text fw--500 fs--14 text-center">
                                        <p>Copyright &copy; Soci<span>fly</span>. All Rights Reserved.</p>
                                      </div>
                                    </div>
                                  </div>
                                  
        </footer>
  );
};
