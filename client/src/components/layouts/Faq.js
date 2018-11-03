import React from 'react';
import { Link } from "react-router-dom";

export default function Faq() {
  return (
    <div>
      <section className="section pt--70 pb--20">
        <div className="container">
          <div className="row">
            <div className="col-md-5 pb--60">
              
                        <div className="faq--items" id="faqItems" data-scroll-reveal="group">
                <div className="title pb--20">
                  <h2 className="h2 fw--600">Frequently Asked Question</h2>
                </div>

                
                            <div className="faq--item style--1 panel">
                  <div className="title">
                    <h3 className="h6 fw--700 text-darker">
                      <Link to="#faqItem01" data-parent="#faqItems" data-toggle="collapse" className="collapsed">
                        <span>How can I register?</span>
                      </Link>
                    </h3>
                  </div>

                  <div id="faqItem01" className="content collapse">
                    <div className="content--inner">
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words even slightly believable.</p>
                    </div>
                  </div>
                </div>
                
                            <div className="faq--item style--1 panel">
                  <div className="title">
                    <h3 className="h6 fw--700 text-darker">
                      <Link to="#faqItem02" data-parent="#faqItems" data-toggle="collapse" className="collapsed">
                        <span>What are the benefits of premium plans?</span>
                      </Link>
                    </h3>
                  </div>

                  <div id="faqItem02" className="content collapse">
                    <div className="content--inner">
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words even slightly believable.</p>
                    </div>
                  </div>
                </div>
                

                            
                            <div className="faq--item style--1 panel">
                  <div className="title">
                    <h3 className="h6 fw--700 text-darker">
                      <Link to="#faqItem03" data-parent="#faqItems" data-toggle="collapse" className="collapsed">
                        <span>How can I renew my plan?</span>
                      </Link>
                    </h3>
                  </div>

                  <div id="faqItem03" className="content collapse">
                    <div className="content--inner">
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words even slightly believable.</p>
                    </div>
                  </div>
                </div>
                
                        </div>
              
                    </div>

            <div className="col-md-7 pb--60">
              
                        <div className="download--block" data-scroll-reveal="group">
                <div className="img">
                  <img src="img/download-img/mobile.png" alt="" />
                            </div>

                  <div className="info">
                    <div className="title">
                      <h2 className="h2 fw--600">Download Application &amp; Get More Features</h2>
                    </div>

                    <div className="content fs--12">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industtry's statndard dummy specimen book. Lorem Ipsum which looks reasonable. The generated Lorem Ipsum words etc.</p>
                    </div>

                    <div className="action text-uppercase">
                      <Link to="#" className="btn btn-sm btn-google"><i className="fa mr--8 fa-play"></i>Play Store</Link>
                      <Link to="#" className="btn btn-sm btn-apple"><i className="fa mr--8 fa-apple"></i>App Store</Link>
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
