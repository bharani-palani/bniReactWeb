import React from 'react';
import baseUrl from "../environment";
import Loader from 'react-loader-spinner'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                // { label: "First Name", value: "Bharani", href: "" },
                // { label: "Last Name", value: "Palani", href: "" },
                // { label: "Email", value: "barani.potshot@gmail.com", href:"mailto:barani.potshot@gmail.com" },
                // { label: "Mobile", value: "+91-98848-56788", href: "tel:+91-9884856788" },
                // { label: "City", value: "Chennai", href: "" },
                // { label: "Country", value: "India", href: "" },
            ]
        }
    }
    componentDidMount() {
        const that = this;
        const apiUrl = `${baseUrl()}/contacts`;
        const axios = require('axios');
        axios.get(apiUrl)
        .then(function (response) {
            // handle success
            const contactList = response.data.response.filter((e) => Number(e.contact_sort) > 1);
            const contactHeading = response.data.response.filter((e) => Number(e.contact_sort) < 2)[0];
            that.setState({contacts: contactList, contactHeading},() => {
                console.log(that.state)
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
      }
    LoadRandomSpinnerIcon = () => {
        const rIndex = Math.floor(Math.random() * 11) + 1;
        console.log(rIndex);
        const icons = ["Audio","BallTriangle","Bars","Circles","Grid","Hearts","Oval","Puff","Rings","TailSpin","ThreeDots"]
        return icons[rIndex-1];
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
                                type={this.LoadRandomSpinnerIcon()}
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