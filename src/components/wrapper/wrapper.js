import React from 'react';

class Wrapper extends React.Component {
    componentDidMount() {
        console.log(window.$)
    }
    render() {
        return (
        <div id="wrapper">

            <video className='videoTag' autoPlay loop muted>
                <source src={require("../../videos/video.mp4")} type='video/mp4' />
            </video>
            <div id="home" className="video-section js-height-full">
                <div className="overlay"></div>
                <div className="home-text-wrapper relative container">
                    <div className="home-message">
                        <img src={require("../../images/biglogo.png")} alt="" />
                        <p>Bharani Palani</p>
                        <div className="skillset">Full Stack Devops</div>
                        {/* <p>Hi, Thats my name ...</p> */}
                    </div>
                </div>
            </div>
  
            <div className="section bgcolor noover">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tagline-message">
                                <h3>Some text</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  
            <section className="section lb nopadtop noover">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="service-box m30">
                                <i className="flaticon-monitor"></i>
                                <h3>Outstanding design</h3>
                                <p>Designed to be flexible according to all your needs. Create your site with all module position.</p>
                            </div>
                        </div>
  
                        <div className="col-lg-4 col-md-12">
                            <div className="service-box m30">
                                <i className="flaticon-technology"></i>
                                <h3>Responsive Layout</h3>
                                <p>Genius template can be easily viewed on any mobile device. Smoothly responsive.</p>
                            </div>
                        </div>
  
                        <div className="col-lg-4 col-md-12">
                            <div className="service-box m30">
                                <i className="flaticon-gears"></i>
                                <h3>Easy to use</h3>
                                <p>The modules we have prepared are simple to use. No code information is needed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <div className="text-widget">
                                <h3>Powerful template features</h3>
  
                                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nunc dui, tristique in <a href={"javasript:void(0)"}>semper vel</a>, congue sed ligula. Nam dolor ligula, faucibus id sodales in, auctor fringill torquent per conubia nostra.</p>
  
                                <div className="clearfix"></div>
  
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 first">
                                        <ul className="check">
                                            <li>Custom Shortcodes</li>
                                            <li>Visual Page Builder</li>
                                            <li>Unlimited Shortcodes</li>
                                            <li>Responsive Theme</li>
                                            <li>Tons of Layouts</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <ul className="check">
                                            <li>Font Awesome Icons</li>
                                            <li>Pre-Defined Colors</li>
                                            <li>AJAX Transitions</li>
                                            <li>High Quality Support</li>
                                            <li>Unlimited Options</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 last">
                                        <ul className="check">
                                            <li>Shopping Layouts</li>
                                            <li>Pre-Defined Fonts</li>
                                            <li>Style Changers</li>
                                            <li>Footer Styles</li>
                                            <li>Header Styles</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="perspective-image hidden-sm hidden-xs hidden-md"> 
                    <img src={require("../../images/upload/p1.jpg")} alt="" className="img-responsive" />
                </div>
            </section>
  
            <section className="section lb">
                <div className="container">
                    <div className="section-title text-center">
                        <h3>Recent Works</h3>
                        <p>Maecenas sit amet tristique turpis. Quisque porttitor eros quis leo pulvinar, at hendrerit sapien iaculis. Donec consectetur accumsan arcu, sit amet fringilla ex ultricies.</p>
                    </div>
  
                    <div className="row">
                        <div className="col-md-12">
                            <div className="portfolio row with-desc">
                                <div className="post-media pitem item-w1 item-h1 cat1">
                                    <div className="entry">
                                        <img src={require("../../images/upload/desc_work_01.png")} alt="" className="img-responsive" />
                                        <div className="magnifier">
                                            <a className="golink" href={"javasript:void(0)"}>
                                              <i className="fa fa-link"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="item-desc">
                                        <h4><a href={"javasript:void(0)"}>Plumeria Logo Design</a></h4>
                                        <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sed. </p>
                                    </div>
                                </div>
  
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  
            <div className="section bgcolor noover">
                <div className="container-fluid">
                    <div className="client-box">
                        <img src={require("../../images/upload/client_01.png")} alt="" className="img-responsive" />
                    </div>
  
                    <div className="client-box">
                        <img src={require("../../images/upload/client_02.png")} alt="" className="img-responsive" />
                    </div>
  
                    <div className="client-box">
                        <img src={require("../../images/upload/client_03.png")} alt="" className="img-responsive" />
                    </div>
  
                    <div className="client-box">
                        <img src={require("../../images/upload/client_04.png")} alt="" className="img-responsive" />
                    </div>
                    <div className="client-box">
                        <img src={require("../../images/upload/client_05.png")} alt="" className="img-responsive" />
                    </div>
                </div>
            </div>
  
  
            <section className="section parallax" data-stellar-background-ratio="0.6" style={{ backgroundImage: "url('images/upload/parallax_01.jpg')" }}>
                <div className="container">
                    <div className="section-title light-color text-center">
                        <h3>Working Process</h3>
                        <p>Maecenas sit amet tristique turpis. Quisque porttitor eros quis leo pulvinar, at hendrerit sapien iaculis. Donec consectetur accumsan arcu, sit amet fringilla ex ultricies.</p>
                    </div>
  
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="process-box">
                                <div className="process-front text-center">
                                    <i className="flaticon-lightbulb-idea"></i>
                                    <h3>We plan properly</h3>
                                </div>
  
                                <div className="process-end text-center">
                                    <h3>Result</h3>
                                    <p>Quisque porttitor eros quis leo pulvinar, at hendrerit sapien iaculis.</p>
                                </div>
                            </div>
                        </div>
  
                        <div className="col-lg-3 col-md-6">
                            <div className="process-box">
                                <div className="process-front text-center">
                                    <i className="flaticon-computer"></i>
                                    <h3>We start project</h3>
                                </div>
  
                                <div className="process-end text-center">
                                    <h3>Result</h3>
                                    <p>Quisque porttitor eros quis leo pulvinar, at hendrerit sapien iaculis.</p>
                                </div>
                            </div>
                        </div>
  
                        <div className="col-lg-3 col-md-6">
                            <div className="process-box">
                                <div className="process-front text-center">
                                    <i className="flaticon-people"></i>
                                    <h3>We showcase work</h3>
                                </div>
  
                                <div className="process-end text-center">
                                    <h3>Result</h3>
                                    <p>Quisque porttitor eros quis leo pulvinar, at hendrerit sapien iaculis.</p>
                                </div>
                            </div>
                        </div>
  
                        <div className="col-lg-3 col-md-6">
                            <div className="process-box">
                                <div className="process-front text-center">
                                    <i className="flaticon-smiley"></i>
                                    <h3>You'll be happy</h3>
                                </div>
  
                                <div className="process-end text-center">
                                    <h3>Result</h3>
                                    <p>Quisque porttitor eros quis leo pulvinar, at hendrerit sapien iaculis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  
            <section className="section lb">
                <div className="container">
                    <div className="section-title text-center">
                        <h3>Latest News</h3>
                        <p>Maecenas sit amet tristique turpis. Quisque porttitor eros quis leo pulvinar, at hendrerit sapien iaculis. Donec consectetur accumsan arcu.</p>
                    </div>
  
                    <div className="row text-center">
                        <div className="col-lg-4 col-md-12">
                            <div className="blog-box">
                                <div className="post-media">
                                    <a href={"javasript:void(0)"}><img src={require("../../images/upload/blog_01.jpg")} alt="" className="img-responsive" /></a>
                                </div>
  
                                <div className="blog-desc">
                                    <h4><a href={"javasript:void(0)"}>The most suitable web design</a></h4>
                                    <p>Praesent at suscipit ligula. Suspendisse pre neque, quis suscipit enim. sed maximus, mia auctor.</p>
                                </div>
  
                                <div className="post-meta">
                                    <ul className="list-inline">
                                        <li><a href={"javasript:void(0)"}>21 March 2017</a></li>
                                        <li><a href={"javasript:void(0)"}>by HTML Design</a></li>
                                        <li><a href={"javasript:void(0)"}>14 Share</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
  
                        <div className="col-lg-4 col-md-12">
                            <div className="blog-box">
                                <div className="post-media">
                                    <a href={"javasript:void(0)"}><img src={require("../../images/upload/blog_02.jpg")} alt="" className="img-responsive" /></a>
                                </div>
  
                                <div className="blog-desc">
                                    <h4><a href={"javasript:void(0)"}>The most suitable web design</a></h4>
                                    <p>Sed suscipit neque in erat posuere tristique aliquam porta vestibulum. Cras placerat tincidunt. </p>
                                </div>
  
                                <div className="post-meta">
                                    <ul className="list-inline">
                                        <li><a href={"javasript:void(0)"}>20 March 2017</a></li>
                                        <li><a href={"javasript:void(0)"}>by HTML Design</a></li>
                                        <li><a href={"javasript:void(0)"}>11 Share</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
  
                        <div className="col-lg-4 col-md-12">
                            <div className="blog-box">
                                <div className="post-media">
                                    <a href={"javasript:void(0)"}><img src={require("../../images/upload/blog_03.jpg")} alt="" className="img-responsive" /></a>
                                </div>
  
                                <div className="blog-desc">
                                    <h4><a href={"javasript:void(0)"}>Design for all mobile devices</a></h4>
                                    <p>Suspendisse scelerisque ex ac mattis molestie vel enim ut massa placerat faucibus sed ut dui vivamus. </p>
                                </div>
  
                                <div className="post-meta">
                                    <ul className="list-inline">
                                        <li><a href={"javasript:void(0)"}>19 March 2017</a></li>
                                        <li><a href={"javasript:void(0)"}>by HTML Design</a></li>
                                        <li><a href={"javasript:void(0)"}>44 Share</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>    
  
            <section className="section bgcolor">
                <div className="container">
                    <a href={"javasript:void(0)"}>
                    <div className="row callout">
                        <div className="col-md-4 text-center">
                            <h3><sup>$</sup>49.99</h3>
                            <h4>Start your awesome project today!</h4>
                        </div>
  
                        <div className="col-md-8">
                            <p className="lead">Limited time offer! Your Agency profile will be added to our "Agencies" directory as well. </p>
                        </div>
                    </div>
                    </a>
                </div>
            </section>
  
            <footer className="section footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="widget clearfix">
                                <div className="newsletter-widget">
                                    <p>You can opt out of our newsletters at any time.<br /> See our <a href={"javasript:void(0)"}>privacy policy</a>.</p>
                                    <form className="form-inline" role="search">
                                        <div className="form-1">
                                            <input type="text" className="form-control" placeholder="Enter email here.." />
                                            <button type="submit" className="btn btn-primary"><i className="fa fa-paper-plane-o"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
  
                        <div className="col-lg-2 col-md-4">
                            <div className="widget clearfix">
                                <div className="list-widget">   
                                    <ul>
                                        <li><a href="page-about.html">About us</a></li>
                                        <li><a href="page-about-me.html">About me</a></li>
                                        <li><a href="page-services.html">Our Services</a></li>
                                        <li><a href="page-team.html">Our Team</a></li>
                                        <li><a href="page-contact-01.html">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
  
                        <div className="col-lg-2 col-md-4">
                            <div className="widget clearfix">
                                <div className="list-widget">   
                                    <ul>
                                        <li><a href="page-contact-02.html">Get In Touch</a></li>
                                        <li><a href="page-faqs.html">FAQ's</a></li>
                                        <li><a href="page-testimonials.html">Testimonials</a></li>
                                        <li><a href="page-elements-html">Elements</a></li>
                                        <li><a href="page-404.html">Not Found</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
  
                        <div className="col-lg-2 col-md-4">
                            <div className="widget clearfix">
                                <div className="list-widget">   
                                    <ul>
                                        <li><a href="shop-checkout.html">Checkout</a></li>
                                        <li><a href="shop-cart.html">Shopping Cart</a></li>
                                        <li><a href="shop-account.html">My Account</a></li>
                                        <li><a href="shop-login.html">Login / Register</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
  
            <div className="section copyrights">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="cop-logo">
                                <img src={require("../../images/logo-normal.png")} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 text-right">
                            <div className="cop-links">
                                <ul className="list-inline">
                                    <li>&copy; 2018 Genius | Design: <a href="https://html.design">HTML Design</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Wrapper;