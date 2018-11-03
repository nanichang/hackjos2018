import React from 'react';
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div>
      
        <section className="banner--section">
        
            <div className="banner--slider owl-carousel" data-owl-dots="true" data-owl-dots-style="2">
          
                <div className="banner--item" data-bg-img="img/banner.jpg" data-overlay="0.75">
            <div className="vc--parent">
              <div className="vc--child">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                      
                                        <div className="banner--content pt--70 pb--80 text-center">
                        <div className="title">
                          <h1 className="h1 text-lightgray">Welcome To FOllow the money</h1>
                        </div>

                        <div className="sub-title">
                          <h2 className="h2 text-lightgray">A Network of Grassroots Citizen Who are Dedicated to Track Government and International Aid Spending</h2>
                        </div>

                        <div className="action text-uppercase">
                          <Link to="/about" className="btn btn-white">Learn More</Link>
                          <Link to="#" className="btn btn-primary">See Members</Link>
                        </div>
                      </div>
                      
                                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          

                
                <div className="banner--item" data-bg-img="img/banner.jpg" data-overlay="0.75">
            <div className="vc--parent">
              <div className="vc--child">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                      
                                        <div className="banner--content pt--70 pb--80 text-center">
                        <div className="title">
                          <h1 className="h1 text-lightgray">Welcome To Community</h1>
                        </div>

                        <div className="sub-title">
                          <h2 className="h2 text-lightgray">Connect, Share &amp; Engage</h2>
                        </div>

                        <div className="desc text-gray fs--16">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                        </div>

                        <div className="action text-uppercase">
                          <Link to="#" className="btn btn-white">Learn More</Link>
                          <Link to="#" className="btn btn-primary">See Members</Link>
                        </div>
                      </div>
                      
                                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner--item" data-bg-img="img/banner.jpg" data-overlay="0.75">
            <div className="vc--parent">
              <div className="vc--child">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 col-md-offset-1">                      
                      <div className="banner--content pt--70 pb--80 text-center">
                        <div className="title">
                          <h1 className="h1 text-lightgray">Welcome To Community</h1>
                        </div>

                        <div className="sub-title">
                          <h2 className="h2 text-lightgray">Connect, Share &amp; Engage</h2>
                        </div>

                        <div className="desc text-gray fs--16">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                        </div>

                        <div className="action text-uppercase">
                          <Link to="#" className="btn btn-white">Learn More</Link>
                          <Link to="#" className="btn btn-primary">See Members</Link>
                        </div>
                      </div>
                      
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
