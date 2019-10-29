import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                { label: "First Name", value: "Bharani" },
                { label: "Last Name", value: "Palani" },
                { label: "Email", value: "barani.potshot@gmail.com" },
                { label: "Mobile", value: "+91-98848-56788" },
                { label: "City", value: "Chennai" },
                { label: "Country", value: "India" },
            ]
        }
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
                                    <div style={{ height:"20px" }} className="col-lg-4 col-md-6"><span className="contactLabel">{c.label}</span></div>
                                    <div className="col-lg-8 col-md-6">{c.value}</div>                            
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