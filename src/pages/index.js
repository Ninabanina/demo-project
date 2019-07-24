import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { Link } from 'gatsby-plugin-modal-routing'
import "../grid-desktop.css"
import "../grid-mobile.css"
import "../style-desktop.css"
import "../style-mobile.css"

class IndexPage extends React.Component {
  render() {
    return (
      <div className="grid-container background-dark">
        <div
          className="banner top-small bottom-small"
          style={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <div className="banner-logo">
            <img alt="this is our product" width="60px" src="https://picsum.photos/id/248/48/48" />
          </div>
          <div className="banner-name upper" style={{ justifySelf: "end" }}>
            <h4>Hello World</h4>
          </div>
        </div>
        <div className="carousel">
          <Carousel showThumbs={false} autoPlay showStatus={false} infiniteLoop>
            <div>
              <img alt="this is our product" src="https://picsum.photos/id/1/1800/900" />
            </div>
            <div>
              <img alt="this is our product" src="https://picsum.photos/id/2/1800/900" />
            </div>
            <div>
              <img alt="this is our product" src="https://picsum.photos/id/4/1800/900" />
            </div>
          </Carousel>
        </div>

        <div className="hero top-medium">
          <h1 className="hero-title center-h center-text upper"> Hello World </h1>
          <p className="hero-subtitle center-h upper bottom-medium" style={{fontWeight: '400'}}>
            Service offering <i style={{margin: "0 0.2em", verticalAlign: "middle"}}> for </i> client name
          </p>
          <p className="hero-content center-h  center-text up bottom-medium">
            Quisque ultricies lacinia dictum. Aenean in erat quis lectus
            sagittis commodo in eu ligula. 
            <br/>
            Nullam malesuada ornare orci at
            tristique. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae. 
            <br/>
            Ut aliquet felis et massa
            vestibulum, quis tempus elit tempus. Suspendisse volutpat lacus quis
            eros fringilla hendrerit.
          </p>
          <Link
            to="/modal/"
            className="hero-button upper center-h button bottom-medium"
            asModal
            state={{
              noScroll: true
            }}
          >
            Read More
          </Link>
        </div>
        <div className="highlight-image top-large">
          <img alt="this is our product" width="100%" src="https://picsum.photos/id/41/1800/900" />
        </div>
        <div className="blurb top-medium">
          <h3 className="blurb-title center-h center-text upper">Blurb</h3>
          <p className="blurb-content center-h center-text up top-small">
            Ut aliquet felis et massa vestibulum, quis tempus elit tempus.
            <br/>
            Suspendisse volutpat lacus quis eros fringilla hendrerit.
            <br/>
            Aenean in erat quis lectus
            sagittis commodo in eu ligula.
          </p>
        </div>
        <div className="featured-image top-large bottom-large">
          <img alt="this is our product" className="featured-image-top" width="100%" src="https://picsum.photos/id/50/1800/900" />
          <img alt="this is our product" className="featured-image-bottom-left" width="100%" src="https://picsum.photos/id/60/900/900" />
          <img alt="this is our product" className="featured-image-bottom-right" width="100%" src="https://picsum.photos/id/70/900/900" />
        </div>
        <div className="cta background-light text-dark inner-top-large">
          <h2 className="cta-title upper down">Breakout area</h2>
          <p className="cta-content">
            <hr style={{ margin: '1em 0', width: '20%'}} />
            Quisque ultricies lacinia dictum. Aenean in erat quis lectus
            sagittis commodo in eu ligula.
          </p>
          <img alt="this is our product" className="cta-image right down" width="100%" src="https://picsum.photos/id/80/1200/800" />
        </div>
        <div className="more-layouts top-medium">
          <h1 className="more-layouts-title center-h center-text upper">More layouts</h1>
          <div className="more-layouts-image top-small">
            <img alt="this is our product" width="100%" src="https://picsum.photos/id/34/1800/900" />
          </div>
        </div>
        <div className="bottom-blurb top-large">
          <h3 className="bottom-blurb-title center-h center-text upper">Blurb</h3>
          <p className="bottom-blurb-content center-h center-text up top-small">
            Quisque ultricies lacinia dictum. Aenean in erat quis lectus
            sagittis commodo in eu ligula.
            <br/>
            Nullam malesuada ornare orci at
            tristique. Vestibulum faucibus orci luctus et Curae. 
            <br/>
            Ut aliquet felis et massa
            vestibulum,eros fringilla hendrerit.
          </p>
        </div>
        <div className="bottom-featured top-large">
          <div className="bottom-featured-caption-top right-small bottom-small">
            <h4 className="upper border-top inner-top-small">Image caption</h4>
            <p>
              Quisque ultricies lacinia dictum. Aenean in erat quis lectus
              sagittis commodo in eu ligula.
            </p>
          </div>
          <img alt="this is our product" className="bottom-featured-image-top" width="100%" src="https://picsum.photos/id/100/1600/1000" />
          <div className="bottom-featured-caption-left right-small bottom-small">
            <h4 className="upper border-top inner-top-small">Image caption</h4>
            <p>
              Quisque ultricies lacinia dictum. Aenean in erat quis lectus
              sagittis commodo in eu ligula.
            </p>
          </div>
          <div className="bottom-featured-caption-right right-small bottom-small">
            <h4 className="upper border-top inner-top-small">Image caption</h4>
            <p>
              Quisque ultricies lacinia dictum. Aenean in erat quis lectus
              sagittis commodo in eu ligula.
            </p>
          </div>
          <img alt="this is our product" className="bottom-featured-image-left" width="100%" src="https://picsum.photos/id/101/800/1000" />
          <img alt="this is our product" className="bottom-featured-image-right" width="100%" src="https://picsum.photos/id/102/800/1000" />
        </div>
        <div className="more-projects  top-large border-top-grey">
          <h2 className="more-projects-title center-h center-text upper top-small">More Projects</h2>
          <div className="more-projects-content center-h center-text">
            Quisque ultricies lacinia dictum.
            <br/>
            Vestibulum faucibus orci luctus et
            ultrices posuere cubilia Curae. 
          </div>
        </div>

        <div className="projects top-large">
          <div className="project1 bottom-small">
            <img alt="this is our product" width="100%" src="https://picsum.photos/id/101/750/450" />
            <h4 className="center-h center-text top-small">Project Name</h4>
            <p className="center-h center-text">Quisque ultricies lacinia dictum.</p>
          </div>
          <div className="project2 bottom-small">
            <img alt="this is our product" width="100%" src="https://picsum.photos/id/100/750/450" />
            <h4 className="center-h center-text top-small">Project Name</h4>
            <p className="center-h center-text">Quisque ultricies lacinia dictum.</p>
          </div>
          <div className="project3 bottom-small">
            <img alt="this is our product" width="100%" src="https://picsum.photos/id/130/750/450" />
            <h4 className="center-h center-text top-small">Project Name</h4>
            <p className="center-h center-text">Quisque ultricies lacinia dictum.</p>
          </div>
          <div className="project4 bottom-small">
            <img alt="this is our product" width="100%" src="https://picsum.photos/id/140/750/450" />
            <h4 className="center-h center-text top-small">Project Name</h4>
            <p className="center-h center-text">Quisque ultricies lacinia dictum.</p>
          </div>
        </div>
        <div className="footer center-h top-large bottom-small border-top-grey" style={{paddingLeft: '1em', paddingRight: '1em'}}>© DELOITTE DIGITAL 2013</div>
      </div>
    )
  }
}

export default IndexPage
