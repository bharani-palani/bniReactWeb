import React from 'react';
import baseUrl from "../environment";
import Loader from 'react-loader-spinner'
import helpers from "../helpers";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        }
    }
    componentDidMount() {
        const that = this;
        const apiUrl = `${baseUrl()}/contacts`;
        const axios = require('axios');
        axios.get(apiUrl)
        .then(response => {
            const [contactHeading, contactList] = helpers.sageHeaderAndList(response.data.response,"contact_sort");
            that.setState({contacts: contactList, contactHeading});
        })
        .catch(error => console.log(error))
        .finally(() => 1);
    }
    LoadRandomSpinnerIcon = () => {
        const icons = ["Audio","BallTriangle","Bars","Circles","Grid","Hearts","Oval","Puff","Rings","TailSpin","ThreeDots"]
        const rIndex = Math.floor(Math.random() * icons.length) + 1;
        return icons[rIndex - 1];
    }
    render() {
        document.title = "Bharani | Contact";
        return (
            <div id="wrapper">
                <section className="section lb" style={{ minHeight: window.screen.height }}>
                    {
                        this.state.contacts.length < 1 ?
                        <div className="spinner">
                            <Loader
                                type={helpers.LoadRandomSpinnerIcon()}
                                color="#c2d82e"
                                height={100}
                                width={100}    
                            />
                        </div>
                        :
                        <>
                            <div className="section-title">
                                <div style={{ backgroundColor: "transparent" }} className="process-box">
                                    <div className="process-front text-center">
                                        <h2 style={{ color: "#aaa" }}>Contact</h2>
                                        <hr />
                                        <i className="fi-creative-telephone"></i>
                                        <p>{this.state.contactHeading ? this.state.contactHeading.contact_value : null }</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row container-fluid">
                                {
                                    this.state.contacts.length > 0 ? this.state.contacts.map((c,i) => 
                                        <div key={i}>
                                            <div style={{ height:"20px" }} className="col-lg-2 col-md-6"><span className="contactLabel">{c.contact_label}</span></div>
                                            <div className="col-lg-10 col-md-6">
                                                {
                                                    c.contact_href ? <a href={c.contact_href}>{c.contact_value}</a> : c.contact_value
                                                }
                                            </div>                            
                                        </div>
                                    )
                                    :
                                    null
                                }
                            </div>
                        </>
                    }
                </section>
            </div>
        );
    }
}

export default Contact;