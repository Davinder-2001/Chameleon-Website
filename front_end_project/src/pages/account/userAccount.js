import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import background from "./assets/photo-1526958977630-bc61b30a2009.avif";
import profile from "./assets/MicrosoftTeams-image (3).png";
import "./userAccount.css";
import Button from 'react-bootstrap/Button';
import COM from "./assets/MicrosoftTeams-image (5).png";
import EV from "./assets/MicrosoftTeams-image (4).png";
import website from "./assets/hero.png";
import icon from "./assets/icon.png";

class userAccount extends Component {
    render() {
        return (<>
            <Container className="banner">
                <img src={background} alt="Cover" className="img-background" />
                <div className="user-intro">
                    <div className="left-intro">
                        <img src={profile} alt="Profile" className="profile-image" />
                        <h2>Name Surname</h2>
                        <p>Product Designer</p>
                        <p>Waurn Ponds, Australia</p>
                        <Button variant="dark" href="#">Share Profile</Button>
                    </div>
                    <div className="right-intro">
                        <p><img src={COM} alt="City of Melbourne Project" style={{ width: '50px', display: 'inline-block' }} /> City of Melbourne</p>
                        <p><img src={website} alt="Website Project" style={{ width: '50px', display: 'inline-block' }} /> Website Uplift</p>
                    </div>
                </div>
                <div className="bio">
                    <h2>Bio</h2>
                    <hr></hr>
                    <p>Add personal bio about role within the company and what you are working on.</p>
                </div>
                <div className="card">
                    <div className="left-column">
                        <div className="card-container">
                            <h2>Projects</h2>
                            <hr></hr>
                            <div className="projects">
                                <h3><img src={EV} alt="EV Adoption Tools" style={{ width: '250px' }} /> EV Adoption Tools<a className="progress" href="#">Check Progress</a></h3>
                                <h3><img src={COM} alt="City of Melbourne" style={{ width: '250px' }} /> City of Melbourne Open Data<a className="progress" href="#">Check Progress</a></h3>
                                <h3><img src={website} alt="Website Upligt" style={{ width: '250px' }} /> Website Uplift<a className="progress" href="#">Check Progress</a></h3>
                            </div>
                        </div>
                        <br></br>
                        <div className="card-container">
                            <h2>Saved Items</h2>
                            <hr></hr>
                            <div className="projects">
                                <h3><img src={EV} alt="EV Adoption Tools" style={{ width: '250px' }} /> TITLE<p>asdsadsadsd</p><p>8 August 2023</p></h3>
                                <h3><img src={COM} alt="City of Melbourne" style={{ width: '250px' }} /> TITLE<p>asdsadsadsd</p><p>8 August 2023</p></h3>
                                <h3><img src={website} alt="Website Upligt" style={{ width: '250px' }} /> TITLE<p>asdsadsadsd</p><p>8 August 2023</p></h3>
                            </div>
                        </div>
                    </div>
                    <div className="right-column">
                        <h3>Quick Links</h3>
                        <hr></hr>
                        <a href="#"><h4><img src={icon} alt="icon" style={{ width: '20px' }} />Trello</h4></a>
                        <a href="#"><h4><img src={icon} alt="icon" style={{ width: '20px' }} />Github</h4></a>
                        <br></br>
                        <h3>Recent Activity</h3>
                        <hr></hr>
                        <a href="#"><h4><img src={icon} alt="icon" style={{ width: '20px' }} />Posted Article</h4></a>
                        <a href="#"><h4><img src={icon} alt="icon" style={{ width: '20px' }} />Updated Website Uplift Progress</h4></a>
                        <br></br>
                        <h3>Upcoming Tasks</h3>
                        <hr></hr>
                        <a href="#"><h4><img src={icon} alt="icon" style={{ width: '20px' }} />Push front-end commit to git</h4></a>
                        <a href="#"><h4><img src={icon} alt="icon" style={{ width: '20px' }} />Finalise SRS doc</h4></a>
                        <br></br>
                        <h3>Suggested Content</h3>
                        <hr></hr>
                        <a href="#"><h4><img src={icon} alt="icon" style={{ width: '20px' }} />Blog Post</h4></a>
                        <a href="#"><h4><img src={icon} alt="icon" style={{ width: '20px' }} />News Article</h4></a>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>

            </Container>

        </>);
    }
}

export default userAccount;
