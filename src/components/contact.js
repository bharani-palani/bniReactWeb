import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                { label: "First Name", value: "Bharani", href: "" },
                { label: "Last Name", value: "Palani", href: "" },
                { label: "Email", value: "barani.potshot@gmail.com", href:"mailto:barani.potshot@gmail.com" },
                { label: "Mobile", value: "+91-98848-56788", href: "tel:+91-9884856788" },
                { label: "City", value: "Chennai", href: "" },
                { label: "Country", value: "India", href: "" },
            ]
        }
    }
    componentDidMount() {
        const apiUrl = window.location.hostname === "localhost" ?
        "http://localhost/bniReactWeb/services/technologies" : 
        "http://bharani.tech/services/technologies";
        
        // fetch(apiUrl)
        //   .then(response => response.json())
        //   .then(data => console.log( data ));

        const axios = require('axios');
        axios.get(apiUrl)
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
      }
    render() {
        document.title = "Bharani | Contact";
        return (
            <div id="wrapper">
                <section className="section lb" style={{ minHeight: window.screen.height }}>
                    <div className="section-title">
                        <div style={{ backgroundColor: "transparent" }} className="process-box">
                            <div className="process-front text-center">
                                <h2 style={{ color: "#aaa" }}>Contact</h2>
                                <hr />
                                <i className="fi-creative-telephone"></i>
                                <p>Reach me on the below</p>
                            </div>
                        </div>
                    </div>
                    <div className="row container-fluid">
                        {
                            this.state.contacts.map((c,i) => 
                                <div key={i}>
                                    <div style={{ height:"20px" }} className="col-lg-2 col-md-6"><span className="contactLabel">{c.label}</span></div>
                                    <div className="col-lg-10 col-md-6">
                                        {
                                            c.href ? <a href={c.href}>{c.value}</a> : c.value
                                        }
                                    </div>                            
                                </div>
                            )
                        }
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact;