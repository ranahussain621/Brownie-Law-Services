import React from 'react'
import GoogleMapReact from 'google-map-react';
import './contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faSquareYoutube, faTwitterSquare,} from "@fortawesome/free-brands-svg-icons";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map() {

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <>

<div className="container mt-5">
<div className="row mx-md-5 mx-3">
        <div className="col-md-6 col-sm-12">
          <div className="title_section">
            <p className='poppins-700 tex-lg' >Our Contact</p>
            <p className='poppins-500 text-dark' style={{fontSize:'18px'}}>We have world-class, flexible support
              via live chat, email, and phone. We
              guarantee that you’ll be able to have
              any issue resolved within 24 hours.
              You can contact our support
              immediately here.</p>
          </div>

          <div className="address mt-3">
            <p  className='poppins-700 tex-lg' >Address</p>
            <p className='poppins-500 text-dark' style={{fontSize:'18px'}}>455 Wallstreet St., New York, VA 12364, USA</p>
          </div>

          <div className="phone mt-3">

            <p  className='poppins-700 tex-lg' >Phones</p>
            <p className='poppins-500'  style={{fontSize:'18px'}}>+1 123 456 78910</p>
            <p className='poppins-500'  style={{fontSize:'18px'}}>+1 123 456 78910</p>
          </div>

          <div className="e-mail mt-3">
            <p className='poppins-600 poppins-700' style={{fontSize:'24px'}}>E-mail</p>
            <p className='poppins-500' style={{fontSize:'18px'}}>Patsy@brownielinkservices.com</p>
          </div>
          <div className="icons d-flex mt-5">
            <div className="px-2">
              <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "22px" }} />
            </div>
            <div className="px-2">
              <FontAwesomeIcon icon={faTwitterSquare} style={{ fontSize: "22px" }} />
            </div>
            <div className="px-2">
              <FontAwesomeIcon icon={faSquareYoutube} style={{ fontSize: "22px" }} />
            </div>
            <div className="px-2">
              <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "22px" }} />
            </div>

          </div>
        </div>
        <div className="col-md-6 col-sm-12 d-flex justify-content-end">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
        </div>

      </div>

</div>
    
    </>
  )
}