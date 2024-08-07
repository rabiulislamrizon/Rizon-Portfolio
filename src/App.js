
import './App.css';





function App() {
  return (
    <div>


<div>
  <meta charSet="utf-8" />
  <meta httpEquiv="x-ua-compatible" content="ie=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content />
  {/* Site Title */}
  <title>Rizon Portfolio Website</title>
  {/* Place favicon.ico in the root directory */}
  <link rel="apple-touch-icon" href="./assets/img/favicon.png" />
  <link rel="shortcut icon" type="image/png" href="./assets/img/favicon.png" />
  {/* CSS here */}
  <link rel="stylesheet" href="assets/css/animate.min.css" />
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/css/font-awesome-pro.min.css" />
  <link rel="stylesheet" href="assets/css/flaticon_gerold.css" />
  <link rel="stylesheet" href="assets/css/nice-select.css" />
  <link rel="stylesheet" href="assets/css/backToTop.css" />
  <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
  <link rel="stylesheet" href="assets/css/swiper.min.css" />
  <link rel="stylesheet" href="assets/css/odometer-theme-default.css" />
  <link rel="stylesheet" href="assets/css/magnific-popup.css" />
  <link rel="stylesheet" href="assets/css/main.css" />
  <link rel="stylesheet" href="assets/css/light-mode.css" />
  <link rel="stylesheet" href="assets/css/meanmenu.css" />
  <link rel="stylesheet" href="assets/css/responsive.css" />
  {/* Preloader Area Start */}
 
  {/* Preloader Area End */}
  {/* start: Back To Top */}
  <div className="progress-wrap" id="scrollUp">
    <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
  {/* end: Back To Top */}
  {/* HEADER START */}
  <header className="tj-header-area header-absolute">
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex flex-wrap align-items-center">
          <div className="logo-box">
            <a href="index.html">
              <img src="assets/img/logo/logo.png" alt />
            </a>
          </div>
          <div className="header-info-list d-none d-md-inline-block">
            <ul className="ul-reset">
              <li><a href="mailto:mail@gerolddesign.com">mail@gerolddesign.com</a></li>
            </ul>
          </div>
          <div className="header-menu" id="headerMenu">
            <nav>
              <ul>
                <li className="has-dropdown current-menu-ancestor">
                  <a className="current-menu-item" href="index.html">Home</a>
                  <ul className="sub-menu">
                    <li className="has-dropdown current-menu-ancestor">
                      <a href="index.html">Dark Mode</a>
                      <ul className="sub-menu">
                        <li className="current-menu-item">
                          <a href="index.html">Home One</a>
                        </li>
                        <li>
                          <a href="index-2.html">Home Two</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home Three</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="index-light.html">Light Mode</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="index-light.html">Home One</a>
                        </li>
                        <li>
                          <a href="index-2-light.html">Home Two</a>
                        </li>
                        <li>
                          <a href="index-3-light.html">Home Three</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="portfolio.html">Portfolios</a></li>
                <li className="has-dropdown">
                  <a href="blog.html">Blog</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="mobile-menu d-lg-none" />
          <div className="header-button">
            <a href="#" className="btn tj-btn-primary">Hire me!</a>
          </div>
          <div className="menu-bar d-lg-none">
            <button>
              <span />
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  <header className="tj-header-area header-2 header-sticky sticky-out">
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex flex-wrap align-items-center">
          <div className="logo-box">
            <a href="index.html">
              <img src="assets/img/logo/logo.png" alt />
            </a>
          </div>
          <div className="header-info-list d-none d-md-inline-block">
            <ul className="ul-reset">
              <li><a href="mailto:mail@gerolddesign.com">mail@gerolddesign.com</a></li>
            </ul>
          </div>
          <div className="header-menu">
            <nav>
              <ul>
                <li className="has-dropdown current-menu-ancestor">
                  <a className="current-menu-item" href="index.html">Home</a>
                  <ul className="sub-menu">
                    <li className="has-dropdown current-menu-ancestor">
                      <a href="index.html">Dark Mode</a>
                      <ul className="sub-menu">
                        <li className="current-menu-item">
                          <a href="index.html">Home One</a>
                        </li>
                        <li>
                          <a href="index-2.html">Home Two</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home Three</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="index-light.html">Light Mode</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="index-light.html">Home One</a>
                        </li>
                        <li>
                          <a href="index-2-light.html">Home Two</a>
                        </li>
                        <li>
                          <a href="index-3-light.html">Home Three</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="portfolio.html">Portfolios</a></li>
                <li className="has-dropdown">
                  <a href="blog.html">Blog</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="mobile-menu d-lg-none" />
          <div className="header-button">
            <a href="#" className="btn tj-btn-primary">Hire me!</a>
          </div>
          <div className="menu-bar d-lg-none">
            <button>
              <span />
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* HEADER END */}
  <main className="site-content" id="content">
    {/* HERO SECTION START */}
    <section className="hero-section d-flex align-items-center" id="intro">
      <div className="intro_text">
        <svg viewBox="0 0 1320 300">
          <text x="50%" y="50%" textAnchor="middle">HI</text>
        </svg>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="hero-content-box">
              <span className="hero-sub-title">I Rizon Islam</span>
              <h1 className="hero-title">Web Developer &<br />SEO Expert</h1>
              <div className="hero-image-box d-md-none text-center">
                <img src="assets/img/hero/me.png" alt />
              </div>
              <p className="lead">
              You can Create a Website from us for any of your Business or SEO Services.I am an expert on SEO & Web Development according to your requrements, such as business,blog,news,eCommerce,Agency,LMS,real estate,portfolio websites,etc.
              </p>
              <div className="button-box d-flex flex-wrap align-items-center">
                <a href="#" className="btn tj-btn-secondary">Download CV <i className="flaticon-download" /></a>
                <ul className="ul-reset social-icons">
                  <li>
                    <a href="#"><i className="fa-brands fa-twitter" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa-light fa-basketball" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa-brands fa-linkedin-in" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa-brands fa-github" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <div className="hero-image-box text-center">
              <img src="https://i.ibb.co/9vrGKt2/profile-pic-10.png" alt />
            </div>
          </div>
        </div>
        <div className="funfact-area">
          <div className="row">
            <div className="col-6 col-lg-3">
              <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                <div className="number"><span className="odometer" data-count={14}>0</span></div>
                <div className="text">Years of <br />Experience</div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                <div className="number"><span className="odometer" data-count={50}>0</span>+</div>
                <div className="text">Project <br />Completed</div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                <div className="number"><span className="odometer" data-count="1.5">0</span>K</div>
                <div className="text">Happy <br />Clients</div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                <div className="number"><span className="odometer" data-count={14}>0</span></div>
                <div className="text">Years of <br />Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* HERO SECTION END */}
    {/* SERVICES SECTION START */}
    <section className="services-section" id="services-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">My Quality Services</h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                We put your ideas and thus your wishes in the form of a unique web project that inspires you and
                you customers.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="services-widget position-relative">
              <div className="service-item current d-flex flex-wrap align-items-center wow fadeInUp" data-wow-delay=".5s">
                <div className="left-box d-flex flex-wrap align-items-center">
                  <span className="number">01</span>
                  <h3 className="service-title">Branding Design</h3>
                </div>
                <div className="right-box">
                  <p>
                    I break down complex user experinece problems to create integritiy focussed solutions that
                    connect billions of people
                  </p>
                </div>
                <i className="flaticon-up-right-arrow" />
                <button data-mfp-src="#service-wrapper" className="service-link modal-popup" />
              </div>
              <div className="service-item d-flex flex-wrap align-items-center wow fadeInUp" data-wow-delay=".6s">
                <div className="left-box d-flex flex-wrap align-items-center">
                  <span className="number">02</span>
                  <h3 className="service-title">Web Design</h3>
                </div>
                <div className="right-box">
                  <p>
                    I break down complex user experinece problems to create integritiy focussed solutions that
                    connect billions of people
                  </p>
                </div>
                <i className="flaticon-up-right-arrow" />
                <button data-mfp-src="#service-wrapper" className="service-link modal-popup" />
              </div>
              <div className="service-item d-flex flex-wrap align-items-center wow fadeInUp" data-wow-delay=".7s">
                <div className="left-box d-flex flex-wrap align-items-center">
                  <span className="number">03</span>
                  <h3 className="service-title">UI/UX Design</h3>
                </div>
                <div className="right-box">
                  <p>
                    I break down complex user experinece problems to create integritiy focussed solutions that
                    connect billions of people
                  </p>
                </div>
                <i className="flaticon-up-right-arrow" />
                <button data-mfp-src="#service-wrapper" className="service-link modal-popup" />
              </div>
              <div className="service-item d-flex flex-wrap align-items-center wow fadeInUp" data-wow-delay=".8s">
                <div className="left-box d-flex flex-wrap align-items-center">
                  <span className="number">04</span>
                  <h3 className="service-title">Graphics Design</h3>
                </div>
                <div className="right-box">
                  <p>
                    I break down complex user experinece problems to create integritiy focussed solutions that
                    connect billions of people
                  </p>
                </div>
                <i className="flaticon-up-right-arrow" />
                <button data-mfp-src="#service-wrapper" className="service-link modal-popup" />
              </div>
              <div className="active-bg wow fadeInUp" data-wow-delay=".5s" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* SERVICES SECTION END */}
    {/* start: Service Popup */}
    <div id="service-wrapper" className="popup_content_area zoom-anim-dialog mfp-hide" data-lenis-prevent>
      <div className="popup_modal_img">
        <img src="./assets/img/services/modal-img.jpg" alt />
      </div>
      <div className="popup_modal_content">
        <div className="service_details">
          <div className="row">
            <div className="col-lg-7 col-xl-8">
              <div className="service_details_content">
                <div className="service_info">
                  <h6 className="subtitle">SERVICES</h6>
                  <h2 className="title">UI/UX Design</h2>
                  <div className="desc">
                    <p>
                      Elizabeth some dodgy chavs are you taking the piss faff about pardon amongst car boot a
                      load of old tosh is
                      cracking goal blow off telling brown.
                    </p>
                    <p>
                      Brolly show off show off pick your nose and blow off well A bit of how’s your father
                      tomfoolery blimey, me old
                      mucker starkers Queen’s English dropped a clanger bite your arm spiffing good time
                      burke Why chancer. Hotpot bum
                      bag cracking goal young delinquent naff bugger cup of chars bender loo it’s all gone to
                      pot the nancy cheeky.
                    </p>
                    <p>
                      At public school cras bog some dodgy chav Richard Why argy bargy vagabon William bender
                      matie boy, off his nut
                      chancer Jeffrey up the kyver say mufty you mug ummm telling pear shaped Oxford owt to
                      do with me do one so said
                      are you taking his.
                    </p>
                  </div>
                  <h3 className="title">Services Process</h3>
                  <div className="desc">
                    <p>
                      Elizabeth some dodgy chavs are you taking the piss faff about pardon amongst car boot a
                      load of old tosh is
                      cracking goal blow off telling brown.
                    </p>
                  </div>
                  <ul>
                    <li>Reinvent Your Business to Better</li>
                    <li>Pioneering the Internet's First</li>
                    <li>Pioneering the Design World's First</li>
                    <li>Pioneering the Design World's First</li>
                    <li>Pioneering the Design World's First</li>
                    <li>Pioneering the Design World's First</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-xl-4">
              <div className="tj_main_sidebar">
                <div className="sidebar_widget services_list">
                  <div className="widget_title">
                    <h3 className="title">All Services</h3>
                  </div>
                  <ul>
                    <li className="active">
                      <button>
                        <i className="flaticon-design" />
                        Branding Design
                      </button>
                    </li>
                    <li>
                      <button>
                        <i className="flaticon-3d-movie" />
                        3D Animation
                      </button>
                    </li>
                    <li>
                      <button>
                        <i className="flaticon-ux-design" />
                        UI/UX Design
                      </button>
                    </li>
                    <li>
                      <button>
                        <i className="flaticon-web-design" />
                        Web Design
                      </button>
                    </li>
                    <li>
                      <button>
                        <i className="flaticon-ui-design" />
                        App Design
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="sidebar_widget contact_form">
                  <div className="widget_title">
                    <h3 className="title">Get in Touch</h3>
                  </div>
                  <form action="index.html">
                    <div className="form_group">
                      <input type="text" name="name" id="name" placeholder="Name" autoComplete="off" />
                    </div>
                    <div className="form_group">
                      <input type="email" name="semail" id="semail" placeholder="Email" autoComplete="off" />
                    </div>
                    <div className="form_group">
                      <textarea name="smessage" id="smessage" placeholder="Your message" autoComplete="off" defaultValue={""} />
                    </div>
                    <div className="form_btn">
                      <button className="btn tj-btn-primary" type="submit">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end: Service Popup */}
    {/* PORTFOLIO SECTION START */}
    <section className="portfolio-section" id="works-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">My Recent Works</h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                We put your ideas and thus your wishes in the form of a unique web project that inspires you and
                you customers.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="portfolio-filter text-center wow fadeInUp" data-wow-delay=".5s">
              <div className="button-group filter-button-group">
                <button data-filter="*" className="active">All</button>
                <button data-filter=".uxui">UX/UI</button>
                <button data-filter=".branding">Branding</button>
                <button data-filter=".mobile-app">Apps</button>
                <div className="active-bg" />
              </div>
            </div>
            <div className="portfolio-box wow fadeInUp" data-wow-delay=".6s">
              <div className="portfolio-sizer" />
              <div className="gutter-sizer" />
              <div className="portfolio-item branding">
                <div className="image-box">
                  <img src="assets/img/portfolio/2.jpg" alt />
                </div>
                <div className="content-box">
                  <h3 className="portfolio-title">Deloitte</h3>
                  <p>Project was about precision and information.</p>
                  <i className="flaticon-up-right-arrow" />
                  <button data-mfp-src="#portfolio-wrapper" className="portfolio-link modal-popup" />
                </div>
              </div>
              <div className="portfolio-item uxui">
                <div className="image-box">
                  <img src="assets/img/portfolio/1.jpg" alt />
                </div>
                <div className="content-box">
                  <h3 className="portfolio-title">New Age</h3>
                  <p>Project was about precision and information.</p>
                  <i className="flaticon-up-right-arrow" />
                  <button data-mfp-src="#portfolio-wrapper" className="portfolio-link modal-popup" />
                </div>
              </div>
              <div className="portfolio-item mobile-app">
                <div className="image-box">
                  <img src="assets/img/portfolio/3.jpg" alt />
                </div>
                <div className="content-box">
                  <h3 className="portfolio-title">Sebastian</h3>
                  <p>Project was about precision and information.</p>
                  <i className="flaticon-up-right-arrow" />
                  <button data-mfp-src="#portfolio-wrapper" className="portfolio-link modal-popup" />
                </div>
              </div>
              <div className="portfolio-item branding">
                <div className="image-box">
                  <img src="assets/img/portfolio/4.jpg" alt />
                </div>
                <div className="content-box">
                  <h3 className="portfolio-title">Mochnix</h3>
                  <p>Project was about precision and information.</p>
                  <i className="flaticon-up-right-arrow" />
                  <button data-mfp-src="#portfolio-wrapper" className="portfolio-link modal-popup" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* PORTFOLIO SECTION END */}
    {/* start: Portfolio Popup */}
    <div id="portfolio-wrapper" className="popup_content_area zoom-anim-dialog mfp-hide" data-lenis-prevent>
      <div className="popup_modal_img">
        <img src="./assets/img/portfolio/modal-img.jpg" alt />
      </div>
      <div className="popup_modal_content">
        <div className="portfolio_info">
          <div className="portfolio_info_text">
            <h2 className="title">DStudio</h2>
            <div className="desc">
              <p>
                They are was greater open above shelter lets itself under appear sixth open gathering made upon
                can't own above midst
                gathering gathered he one us saying can't divide.
              </p>
            </div>
            <a href="#" className="btn tj-btn-primary">live preview <i className="fal fa-arrow-right" /></a>
          </div>
          <div className="portfolio_info_items">
            <div className="info_item">
              <div className="key">Category</div>
              <div className="value">Web Design</div>
            </div>
            <div className="info_item">
              <div className="key">Client</div>
              <div className="value">Artboard Studio</div>
            </div>
            <div className="info_item">
              <div className="key">Start Date</div>
              <div className="value">August 20, 2023</div>
            </div>
            <div className="info_item">
              <div className="key">Designer</div>
              <div className="value"><a href="#">ThemeJunction</a></div>
            </div>
          </div>
        </div>
        <div className="portfolio_gallery owl-carousel">
          <div className="gallery_item">
            <img src="./assets/img/portfolio-gallery/p-gallery-1.jpg" alt />
          </div>
          <div className="gallery_item">
            <img src="./assets/img/portfolio-gallery/p-gallery-2.jpg" alt />
          </div>
          <div className="gallery_item">
            <img src="./assets/img/portfolio-gallery/p-gallery-3.jpg" alt />
          </div>
          <div className="gallery_item">
            <img src="./assets/img/portfolio-gallery/p-gallery-4.jpg" alt />
          </div>
        </div>
        <div className="portfolio_description">
          <h2 className="title">Project Description</h2>
          <div className="desc">
            <p>
              The goal is there are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some
              form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered
              alteration in some form, by
              injected humour, or randomised words which don't look even slightly believable. If you are going to
              use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
            </p>
          </div>
        </div>
        <div className="portfolio_story_approach">
          <div className="portfolio_story">
            <div className="story_title">
              <h4 className="title">The story</h4>
            </div>
            <div className="story_content">
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by
                injected humour, or randomised words which don't look even slightly believable. If you are going
                to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. There
                are many variations of
                passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
                injected humour, or
                randomised words which don't look even slightly believable. If you are going to use a passage of
                Lorem Ipsum, you need to
                be sure there isn't anything embarrassing hidden in the middle of text.
              </p>
            </div>
          </div>
          <div className="portfolio_approach">
            <div className="approach_title">
              <h4 className="title">OUR APPROACH</h4>
            </div>
            <div className="approach_content">
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by
                injected humour, or randomised words which don't look even slightly believable. If you are going
                to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. There
                are many variations of
                passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
                injected humour, or
                randomised words which don't look even slightly believable. If you are going to use a passage of
                Lorem Ipsum, you need to
                be sure there isn't anything embarrassing hidden in the middle of text.
              </p>
            </div>
          </div>
        </div>
        <div className="portfolio_navigation">
          <div className="navigation_item prev-project">
            <a href="#" className="project">
              <i className="fal fa-arrow-left" />
              <div className="nav_project">
                <div className="label">Previous Project</div>
                <h3 className="title">Sebastian</h3>
              </div>
            </a>
          </div>
          <div className="navigation_item next-project">
            <a href="#" className="project">
              <div className="nav_project">
                <div className="label">Next Project</div>
                <h3 className="title">Qwillo</h3>
              </div>
              <i className="fal fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* end: Portfolio Popup */}
    {/* RESUME SECTION START */}
    <section className="resume-section" id="resume-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="section-header wow fadeInUp" data-wow-delay=".3s">
              <h2 className="section-title"><i className="flaticon-recommendation" /> My Experience</h2>
            </div>
            <div className="resume-widget">
              <div className="resume-item wow fadeInLeft" data-wow-delay=".4s">
                <div className="time">2022 - Present</div>
                <h3 className="resume-title">Lead Developer</h3>
                <div className="institute">Blockdots, London</div>
              </div>
              <div className="resume-item wow fadeInLeft" data-wow-delay=".5s">
                <div className="time">2021 - 2022</div>
                <h3 className="resume-title">Full Stack Web Developer</h3>
                <div className="institute">Parsons, The New School</div>
              </div>
              <div className="resume-item wow fadeInLeft" data-wow-delay=".6s">
                <div className="time">2020 - 2021</div>
                <h3 className="resume-title">UI Designer</h3>
                <div className="institute">House of Life, Leeds</div>
              </div>
              <div className="resume-item wow fadeInLeft" data-wow-delay=".7s">
                <div className="time">2018 - 2020</div>
                <h3 className="resume-title">Junior Graphics Designer</h3>
                <div className="institute">Theme Junction, Bursa</div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="section-header wow fadeInUp" data-wow-delay=".4s">
              <h2 className="section-title"><i className="flaticon-graduation-cap" /> My Education</h2>
            </div>
            <div className="resume-widget">
              <div className="resume-item wow fadeInRight" data-wow-delay=".5s">
                <div className="time">2020 - 2023</div>
                <h3 className="resume-title">Programming course</h3>
                <div className="institute">Harverd University</div>
              </div>
              <div className="resume-item wow fadeInRight" data-wow-delay=".6s">
                <div className="time">2016 - 2020</div>
                <h3 className="resume-title">Graphic design course</h3>
                <div className="institute">University of Denmark</div>
              </div>
              <div className="resume-item wow fadeInRight" data-wow-delay=".7s">
                <div className="time">2012 - 2015</div>
                <h3 className="resume-title">Web design course</h3>
                <div className="institute">University of California</div>
              </div>
              <div className="resume-item wow fadeInRight" data-wow-delay=".8s">
                <div className="time">2010 - 2011</div>
                <h3 className="resume-title">Design &amp; Technology</h3>
                <div className="institute">Parsons, The New School</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* RESUME SECTION END */}
    {/* SKILLS SECTION START */}
    <section className="skills-section" id="skills-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">My Skills</h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                We put your ideas and thus your wishes in the form of a unique web project that inspires you and
                you customers.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="skills-widget d-flex flex-wrap justify-content-center align-items-center">
              <div className="skill-item wow fadeInUp" data-wow-delay=".3s">
                <div className="skill-inner">
                  <div className="icon-box">
                    <img src="assets/img/icons/figma.svg" alt />
                  </div>
                  <div className="number">92%</div>
                </div>
                <p>Figma</p>
              </div>
              <div className="skill-item wow fadeInUp" data-wow-delay=".4s">
                <div className="skill-inner">
                  <div className="icon-box">
                    <img src="assets/img/icons/sketch.svg" alt />
                  </div>
                  <div className="number">80%</div>
                </div>
                <p>Sketch</p>
              </div>
              <div className="skill-item wow fadeInUp" data-wow-delay=".5s">
                <div className="skill-inner">
                  <div className="icon-box">
                    <img src="assets/img/icons/xd.svg" alt />
                  </div>
                  <div className="number">85%</div>
                </div>
                <p>XD</p>
              </div>
              <div className="skill-item wow fadeInUp" data-wow-delay=".6s">
                <div className="skill-inner">
                  <div className="icon-box">
                    <img src="assets/img/icons/wp.svg" alt />
                  </div>
                  <div className="number">99%</div>
                </div>
                <p>WordPess</p>
              </div>
              <div className="skill-item wow fadeInUp" data-wow-delay=".7s">
                <div className="skill-inner">
                  <div className="icon-box">
                    <img src="assets/img/icons/react.svg" alt />
                  </div>
                  <div className="number">89%</div>
                </div>
                <p>React</p>
              </div>
              <div className="skill-item wow fadeInUp" data-wow-delay=".8s">
                <div className="skill-inner">
                  <div className="icon-box">
                    <img src="assets/img/icons/js.svg" alt />
                  </div>
                  <div className="number">93%</div>
                </div>
                <p>JavaScript</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* SKILLS SECTION END */}
    {/* TESTIMONIAL SECTION START */}
    <section className="testimonial-section" id="testimonials-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-header">
              <h2 className="section-title wow fadeInLeft" data-wow-delay=".3s">My Client's Stories</h2>
              <p className="wow fadeInLeft" data-wow-delay=".4s">Empowering people in new a digital journey with my
                super services</p>
            </div>
          </div>
          <div className="col-lg-7 col-xl-6 offset-xl-1">
            <div className="testimonials-widget wow fadeInRight" data-wow-delay=".5s">
              <div className="owl-carousel testimonial-carousel">
                <div className="testimonial-item">
                  <div className="top-area d-flex flex-wrap justify-content-between">
                    <div className="logo-box">
                      <img src="assets/img/testimonials/logo/1.png" alt />
                    </div>
                    <div className="image-box">
                      <img src="assets/img/testimonials/user/1.jpg" alt />
                    </div>
                  </div>
                  <div className="icon-box">
                    <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z" fill="url(#paint0_linear_263_588)" />
                      <defs>
                        <linearGradient id="paint0_linear_263_588" x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991" gradientUnits="userSpaceOnUse">
                          <stop offset={1} stopColor="var(--tj-theme-primary)" />
                          <stop offset={1} stopColor="#140C1C" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z" fill="url(#paint1_linear_263_589)" />
                      <defs>
                        <linearGradient id="paint1_linear_263_589" x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991" gradientUnits="userSpaceOnUse">
                          <stop offset={1} stopColor="var(--tj-theme-primary)" />
                          <stop offset={1} stopColor="#140C1C" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p className="quote">“Taylor is a professional Designer he really helps my business by providing
                    value to my business.</p>
                  <h4 className="name">Brandon Fraser</h4>
                  <span className="designation">Senior Software Dev, Cosmic Sport</span>
                </div>
                <div className="testimonial-item">
                  <div className="top-area d-flex flex-wrap justify-content-between">
                    <div className="logo-box">
                      <img src="assets/img/testimonials/logo/2.png" alt />
                    </div>
                    <div className="image-box">
                      <img src="assets/img/testimonials/user/2.jpg" alt />
                    </div>
                  </div>
                  <div className="icon-box">
                    <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z" fill="url(#paint2_linear_263_511)" />
                      <defs>
                        <linearGradient id="paint2_linear_263_511" x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991" gradientUnits="userSpaceOnUse">
                          <stop offset={1} stopColor="var(--tj-theme-primary)" />
                          <stop offset={1} stopColor="#140C1C" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z" fill="url(#paint3_linear_263_510)" />
                      <defs>
                        <linearGradient id="paint3_linear_263_510" x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991" gradientUnits="userSpaceOnUse">
                          <stop offset={1} stopColor="var(--tj-theme-primary)" />
                          <stop offset={1} stopColor="#140C1C" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p className="quote">“Taylor is a professional Designer he really helps my business by providing
                    value to my business.</p>
                  <h4 className="name">Tim Bailey</h4>
                  <span className="designation">SEO Specialist, Theme Junction</span>
                </div>
                <div className="testimonial-item">
                  <div className="top-area d-flex flex-wrap justify-content-between">
                    <div className="logo-box">
                      <img src="assets/img/testimonials/logo/1.png" alt />
                    </div>
                    <div className="image-box">
                      <img src="assets/img/testimonials/user/1.jpg" alt />
                    </div>
                  </div>
                  <div className="icon-box">
                    <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z" fill="url(#paint4_linear_263_512)" />
                      <defs>
                        <linearGradient id="paint4_linear_263_512" x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991" gradientUnits="userSpaceOnUse">
                          <stop offset={1} stopColor="var(--tj-theme-primary)" />
                          <stop offset={1} stopColor="#140C1C" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z" fill="url(#paint5_linear_263_513)" />
                      <defs>
                        <linearGradient id="paint5_linear_263_513" x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991" gradientUnits="userSpaceOnUse">
                          <stop offset={1} stopColor="var(--tj-theme-primary)" />
                          <stop offset={1} stopColor="#140C1C" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p className="quote">“Taylor is a professional Designer he really helps my business by providing
                    value to my business.</p>
                  <h4 className="name">Brandon Fraser</h4>
                  <span className="designation">Senior Software Dev, Cosmic Sport</span>
                </div>
                <div className="testimonial-item">
                  <div className="top-area d-flex flex-wrap justify-content-between">
                    <div className="logo-box">
                      <img src="assets/img/testimonials/logo/2.png" alt />
                    </div>
                    <div className="image-box">
                      <img src="assets/img/testimonials/user/2.jpg" alt />
                    </div>
                  </div>
                  <div className="icon-box">
                    <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z" fill="url(#paint6_linear_263_514)" />
                      <defs>
                        <linearGradient id="paint6_linear_263_514" x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991" gradientUnits="userSpaceOnUse">
                          <stop offset={1} stopColor="var(--tj-theme-primary)" />
                          <stop offset={1} stopColor="#140C1C" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z" fill="url(#paint7_linear_263_515)" />
                      <defs>
                        <linearGradient id="paint7_linear_263_515" x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991" gradientUnits="userSpaceOnUse">
                          <stop offset={1} stopColor="var(--tj-theme-primary)" />
                          <stop offset={1} stopColor="#140C1C" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p className="quote">“Taylor is a professional Designer he really helps my business by providing
                    value to my business.</p>
                  <h4 className="name">Tim Bailey</h4>
                  <span className="designation">SEO Specialist, Theme Junction</span>
                </div>
                <div className="testimonial-item">
                  <div className="top-area d-flex flex-wrap justify-content-between">
                    <div className="logo-box">
                      <img src="assets/img/testimonials/logo/1.png" alt />
                    </div>
                    <div className="image-box">
                      <img src="assets/img/testimonials/user/1.jpg" alt />
                    </div>
                  </div>
                  <div className="icon-box">
                    <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z" fill="url(#paint8_linear_263_512)" />
                      <defs>
                        <linearGradient id="paint8_linear_263_512" x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991" gradientUnits="userSpaceOnUse">
                          <stop offset={1} stopColor="var(--tj-theme-primary)" />
                          <stop offset={1} stopColor="#140C1C" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z" fill="url(#paint9_linear_263_513)" />
                      <defs>
                        <linearGradient id="paint9_linear_263_513" x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991" gradientUnits="userSpaceOnUse">
                          <stop offset={1} stopColor="var(--tj-theme-primary)" />
                          <stop offset={1} stopColor="#140C1C" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p className="quote">“Taylor is a professional Designer he really helps my business by providing
                    value to my business.</p>
                  <h4 className="name">Brandon Fraser</h4>
                  <span className="designation">Senior Software Dev, Cosmic Sport</span>
                </div>
                <div className="testimonial-item">
                  <div className="top-area d-flex flex-wrap justify-content-between">
                    <div className="logo-box">
                      <img src="assets/img/testimonials/logo/2.png" alt />
                    </div>
                    <div className="image-box">
                      <img src="assets/img/testimonials/user/2.jpg" alt />
                    </div>
                  </div>
                  <div className="icon-box">
                    <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z" fill="url(#paint10_linear_263_514)" />
                      <defs>
                        <linearGradient id="paint10_linear_263_514" x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991" gradientUnits="userSpaceOnUse">
                          <stop offset={1} stopColor="var(--tj-theme-primary)" />
                          <stop offset={1} stopColor="#140C1C" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z" fill="url(#paint11_linear_263_515)" />
                      <defs>
                        <linearGradient id="paint11_linear_263_515" x1="-0.0363755" y1="-0.0729998" x2="35.3333" y2="-0.0729991" gradientUnits="userSpaceOnUse">
                          <stop offset={1} stopColor="var(--tj-theme-primary)" />
                          <stop offset={1} stopColor="#140C1C" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p className="quote">“Taylor is a professional Designer he really helps my business by providing
                    value to my business.</p>
                  <h4 className="name">Tim Bailey</h4>
                  <span className="designation">SEO Specialist, Theme Junction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* TESTIMONIAL SECTION END */}
    {/* BLOG SECTION STAR */}
    <section className="blog-section" id="blog-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">Recent Blogs</h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                We put your ideas and thus your wishes in the form of a unique web project that inspires you and
                you customers.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="blog-item wow fadeInUp" data-wow-delay=".5s">
              <div className="blog-thumb">
                <a href="blog-details.html">
                  <img src="assets/img/blog/1.jpg" alt />
                </a>
                <a href="#" className="category">Tutorial</a>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <ul className="ul-reset">
                    <li><i className="fa-light fa-calendar-days" /> Oct 01, 2022</li>
                    <li><i className="fa-light fa-comments" /> <a href="#">Comment (0)</a></li>
                  </ul>
                </div>
                <h3 className="blog-title"><a href="blog-details.html">top 10 ui ux designers</a></h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-item wow fadeInUp" data-wow-delay=".6s">
              <div className="blog-thumb">
                <a href="blog-details.html">
                  <img src="assets/img/blog/2.jpg" alt />
                </a>
                <a href="#" className="category">TIPS</a>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <ul className="ul-reset">
                    <li><i className="fa-light fa-calendar-days" /> Nov 01, 2022</li>
                    <li><i className="fa-light fa-comments" /> <a href="#">Comment (0)</a></li>
                  </ul>
                </div>
                <h3 className="blog-title"><a href="blog-details.html">App Development Guides</a></h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-item wow fadeInUp" data-wow-delay=".7s">
              <div className="blog-thumb">
                <a href="blog-details.html">
                  <img src="assets/img/blog/3.jpg" alt />
                </a>
                <a href="#" className="category">FREEBIES</a>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <ul className="ul-reset">
                    <li><i className="fa-light fa-calendar-days" /> Dec 01, 2022</li>
                    <li><i className="fa-light fa-comments" /> <a href="#">Comment (0)</a></li>
                  </ul>
                </div>
                <h3 className="blog-title"><a href="blog-details.html">learn graphic design free</a></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* BLOG SECTION END */}
    {/* CONTACT SECTION START */}
    <section className="contact-section" id="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7 order-2 order-md-1">
            <div className="contact-form-box wow fadeInLeft" data-wow-delay=".3s">
              <div className="section-header">
                <h2 className="section-title">Let’s work together!</h2>
                <p>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
              </div>
              <div className="tj-contact-form">
                <form id="contact-form">
                  <div className="row gx-3">
                    <div className="col-sm-6">
                      <div className="form_group">
                        <input type="text" name="conName" id="conName" placeholder="First name" autoComplete="off" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form_group">
                        <input type="text" name="conLName" id="conLName" placeholder="Last name" autoComplete="off" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form_group">
                        <input type="email" name="conEmail" id="conEmail" placeholder="Email address" autoComplete="off" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form_group">
                        <input type="tel" name="conPhone" id="conPhone" placeholder="Phone number" autoComplete="off" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form_group">
                        <select name="conService" id="conService" className="tj-nice-select">
                          <option value selected disabled>Choose Service</option>
                          <option value="braning">Branding Design</option>
                          <option value="web">Web Design</option>
                          <option value="uxui">UI/UX Design</option>
                          <option value="app">App Design</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form_group">
                        <textarea name="conMessage" id="conMessage" placeholder="Message" defaultValue={""} />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form_btn">
                        <button type="submit" className="btn tj-btn-primary">Send Message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 col-md-5 d-flex flex-wrap align-items-center order-1 order-md-2">
            <div className="contact-info-list">
              <ul className="ul-reset">
                <li className="d-flex flex-wrap align-items-center position-relative wow fadeInRight" data-wow-delay=".4s">
                  <div className="icon-box">
                    <i className="flaticon-phone-call" />
                  </div>
                  <div className="text-box">
                    <p>Phone</p>
                    <a href="tel:0123456789">+01 123 654 8096</a>
                  </div>
                </li>
                <li className="d-flex flex-wrap align-items-center position-relative wow fadeInRight" data-wow-delay=".5s">
                  <div className="icon-box">
                    <i className="flaticon-mail-inbox-app" />
                  </div>
                  <div className="text-box">
                    <p>Email</p>
                    <a href="mailto:mail@mail.com">gerolddesign@mail.com</a>
                  </div>
                </li>
                <li className="d-flex flex-wrap align-items-center position-relative wow fadeInRight" data-wow-delay=".6s">
                  <div className="icon-box">
                    <i className="flaticon-location" />
                  </div>
                  <div className="text-box">
                    <p>Address</p>
                    <a href="#">Warne Park Street Pine, <br />FL 33157, New York</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* CONTACT SECTION END */}
    {/* BEGIN: Contact Form Success Modal Message */}
    <div className="modal contact_modal" id="message_sent" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <span className="modal-title"><strong>Message Sent Successfully</strong></span>
            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><i className="fas fa-times" /></button>
          </div>
          <div className="modal-body">
            <p>Thank you for contacting us. We will get back to you shortly.<br />Have a great day!</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    {/* END: Contact Form Success Modal Message */}
    {/* BEGIN: Contact Form Fail Modal Message */}
    <div className="modal contact_modal failed" id="message_fail" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <span className="modal-title"><strong>Error</strong></span>
            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><i className="fas fa-times" /></button>
          </div>
          <div className="modal-body">
            <p>Oops! Something went wrong, please try again.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    {/* END: Contact Form Fail Modal Message End */}
  </main>
  {/* FOOTER AREA START */}
  <footer className="tj-footer-area">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="footer-logo-box">
            <a href="#"><img src="assets/img/logo/logo.png" alt /></a>
          </div>
          <div className="footer-menu">
            <nav>
              <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="portfolio.html">Portfolios</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="copy-text">
            <p>© 2024 All rights reserved by <a href="#" target="_blank">ThemeJunction</a></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* FOOTER AREA END */}
  {/* JSS here */}
</div>

      
    </div>
  );
}

export default App;
