import profilePic from "../images/profile-pic.jpg";

export default function Info() {
    return (
        <>
            <img className="profile-pic" alt="Profile Picture" src={profilePic}></img>
            <div className="info-wrapper">
                <h1 className="name">Suchindra Rameswaran</h1>
                <h2 className="career">Web Developer</h2>
            </div>
            <div className="button-wrapper">
                <a target="_blank" href="mailto:rsuchindran32@gmail.com"><button className="email-button">Email</button></a>
                <a target="_blank" href="https://www.linkedin.com/in/suchindra-rameswaran-184b4a123/"><button className="linkedin-button">LinkedIn</button></a>
            </div>
        </>
    )
}