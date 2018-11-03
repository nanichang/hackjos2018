import React from 'react';
import { Link } from "react-router-dom";

export default function Members() {
  return (
    <div>
      <section className="section pt--70 pb--20">
        <div className="container">
          <div className="row">
            <div className="col-md-7 pb--60">
              
                        <div className="section--title pb--20">
                <div className="title">
                  <h2 className="h2">Most Popular Members</h2>
                </div>
              </div>
              
                        <div className="member--slider owl-carousel" data-owl-items="4" data-owl-autoplay="false" data-bg-img="img/members-img/pattern-bg.png" data-owl-nav="true" data-owl-center="true" data-owl-responsive='{"0": {"items": "1"}, "486": {"items": "3"}, "992": {"items": "4"}}'>
                
                            <div className="member--item online">
                  <div className="vc--parent">
                    <div className="vc--child">
                      <div className="img img-circle">
                        <Link to="member-activity-personal.html" className="btn-link">
                          <img src="img/members-img/member-01.jpg" alt="" />
                                            </Link>
                                        </div>

                        <div className="name">
                          <h3 className="h6 fs--12">
                            <Link to="member-activity-personal.html" className="btn-link">Rosa R. Secor</Link>
                          </h3>
                        </div>

                        <div className="activity">
                          <p><i className="fa mr--8 fa-clock-o"></i>Active 5 monts ago</p>
                        </div>

                        <div className="actions">
                          <ul className="nav">
                            <li>
                              <Link to="#" title="Send Message" className="btn-link" data-toggle="tooltip" data-placement="bottom">
                                <i className="fa fa-envelope-o"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="#" title="Add Friend" className="btn-link" data-toggle="tooltip" data-placement="bottom">
                                <i className="fa fa-user-plus"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="#" title="Media" className="btn-link" data-toggle="tooltip" data-placement="bottom">
                                <i className="fa fa-folder-o"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                            <div className="member--item">
                    <div className="vc--parent">
                      <div className="vc--child">
                        <div className="img img-circle">
                          <Link to="member-activity-personal.html" className="btn-link">
                            <img src="img/members-img/member-02.jpg" alt="" />
                                            </Link>
                                        </div>

                          <div className="name">
                            <h3 className="h6 fs--12">
                              <Link to="member-activity-personal.html" className="btn-link">Juan Bishop</Link>
                            </h3>
                          </div>

                          <div className="activity">
                            <p><i className="fa mr--8 fa-clock-o"></i>Active 5 monts ago</p>
                          </div>

                          <div className="actions">
                            <ul className="nav">
                              <li>
                                <Link to="#" title="Send Message" className="btn-link" data-toggle="tooltip" data-placement="bottom">
                                  <i className="fa fa-envelope-o"></i>
                                </Link>
                              </li>
                              <li>
                                <Link to="#" title="Add Friend" className="btn-link" data-toggle="tooltip" data-placement="bottom">
                                  <i className="fa fa-user-plus"></i>
                                </Link>
                              </li>
                              <li>
                                <Link to="#" title="Media" className="btn-link" data-toggle="tooltip" data-placement="bottom">
                                  <i className="fa fa-folder-o"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                            <div className="member--item online">
                      <div className="vc--parent">
                        <div className="vc--child">
                          <div className="img img-circle">
                            <Link to="member-activity-personal.html" className="btn-link">
                              <img src="img/members-img/member-03.jpg" alt="" />
                                            </Link>
                                        </div>

                            <div className="name">
                              <h3 className="h6 fs--12">
                                <Link to="member-activity-personal.html" className="btn-link">Kelly Salazar</Link>
                              </h3>
                            </div>

                            <div className="activity">
                              <p><i className="fa mr--8 fa-clock-o"></i>Active 5 monts ago</p>
                            </div>

                            <div className="actions">
                              <ul className="nav">
                                <li>
                                  <Link to="#" title="Send Message" className="btn-link" data-toggle="tooltip" data-placement="bottom">
                                    <i className="fa fa-envelope-o"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#" title="Add Friend" className="btn-link" data-toggle="tooltip" data-placement="bottom">
                                    <i className="fa fa-user-plus"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#" title="Media" className="btn-link" data-toggle="tooltip" data-placement="bottom">
                                    <i className="fa fa-folder-o"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                            <div className="member--item online">
                        <div className="vc--parent">
                          <div className="vc--child">
                            <div className="img img-circle">
                              <Link to="member-activity-personal.html" className="btn-link">
                                <img src="img/members-img/member-04.jpg" alt="" />
                                            </Link>
                                        </div>

                              <div className="name">
                                <h3 className="h6 fs--12">
                                  <Link to="member-activity-personal.html" className="btn-link">Gregory L. Caudill</Link>
                                </h3>
                              </div>

                              <div className="activity">
                                <p><i className="fa mr--8 fa-clock-o"></i>Active 5 monts ago</p>
                              </div>

                              <div className="actions">
                                <ul className="nav">
                                  <li>
                                    <Link to="#" title="Send Message" className="btn-link" data-toggle="tooltip" data-placement="bottom">
                                      <i className="fa fa-envelope-o"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#" title="Add Friend" className="btn-link" data-toggle="tooltip" data-placement="bottom">
                                      <i className="fa fa-user-plus"></i>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#" title="Media" className="btn-link" data-toggle="tooltip" data-placement="bottom">
                                      <i className="fa fa-folder-o"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                            <div className="member--item">
                          <div className="vc--parent">
                            <div className="vc--child">
                              <div className="img img-circle">
                                <Link to="member-activity-personal.html" className="btn-link">
                                  <img src="img/members-img/member-05.jpg" alt="" />
                                            </Link>
                                        </div>

                                <div className="name">
                                  <h3 className="h6 fs--12">
                                    <Link to="member-activity-personal.html" className="btn-link">William P. Waite</Link>
                                  </h3>
                                </div>

                                <div className="activity">
                                  <p><i className="fa mr--8 fa-clock-o"></i>Active 5 monts ago</p>
                                </div>

                                <div className="actions">
                                  <ul className="nav">
                                    <li>
                                      <Link to="#" title="Send Message" className="btn-link" data-toggle="tooltip" data-placement="bottom">
                                        <i className="fa fa-envelope-o"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Add Friend" className="btn-link" data-toggle="tooltip" data-placement="bottom">
                                        <i className="fa fa-user-plus"></i>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="#" title="Media" className="btn-link" data-toggle="tooltip" data-placement="bottom">
                                        <i className="fa fa-folder-o"></i>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                        </div>
                        
                    </div>

                      <div className="col-md-5 pb--60">
                        
                        <div className="section--title pb--20">
                          <div className="title">
                            <h2 className="h2">Show Some Sweet Love</h2>
                          </div>
                        </div>
                        
                        <div className="testimonial--items owl-carousel" data-owl-dots="true" data-owl-margin="10" data-owl-autoplay="false" data-owl-animate="fadeOut">
                          
                            <div className="testimonial--item clearfix">
                            <div className="img mr--20 float--left">
                              <img src="img/testimonial-img/01.jpg" alt="" />
                                </div>

                              <div className="info">
                                <blockquote className="fs--12">
                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ever.</p>
                                </blockquote>

                                <div className="name">
                                  <h3 className="h6 fs--12">Philip K. Rice &amp; Nina B. Bandy</h3>
                                </div>

                                <div className="rating">
                                  <ul className="nav">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star-o"></i></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            
                            <div className="testimonial--item clearfix">
                              <div className="img mr--20 float--left">
                                <img src="img/testimonial-img/02.jpg" alt="" />
                                </div>

                                <div className="info">
                                  <blockquote className="fs--12">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ever.</p>
                                  </blockquote>

                                  <div className="name">
                                    <h3 className="h6 fs--12">Philip K. Rice &amp; Nina B. Bandy</h3>
                                  </div>

                                  <div className="rating">
                                    <ul className="nav">
                                      <li><i className="fa fa-star"></i></li>
                                      <li><i className="fa fa-star"></i></li>
                                      <li><i className="fa fa-star"></i></li>
                                      <li><i className="fa fa-star"></i></li>
                                      <li><i className="fa fa-star-o"></i></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              
                            <div className="testimonial--item clearfix">
                                <div className="img mr--20 float--left">
                                  <img src="img/testimonial-img/03.jpg" alt="" />
                                </div>

                                  <div className="info">
                                    <blockquote className="fs--12">
                                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ever.</p>
                                    </blockquote>

                                    <div className="name">
                                      <h3 className="h6 fs--12">Philip K. Rice &amp; Nina B. Bandy</h3>
                                    </div>

                                    <div className="rating">
                                      <ul className="nav">
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                
                        </div>
                              
                    </div>
                          </div>
                        </div>
        </section>
    </div>
  )
}
