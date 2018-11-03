import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Feature from './Feature';
import HowItWork from './HowItWork';
import Popular from './Popular';
import Members from './Members';
import WhyChoseUs from './WhyChoseUs';
import Faq from './Faq';
import Footer from './Footer';

class Landing extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Banner />
        <Feature />
        <HowItWork />
        <Popular />
        <Members />
        <WhyChoseUs />
        <Faq />
        <Footer />
      </div>
    );
  };
};

export default Landing;