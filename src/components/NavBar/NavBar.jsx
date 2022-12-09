import mic from "./assets/Mic.png";

const NavBar = () => {
    return (
        <h3 className="text">Music 
        <img src={mic} alt="Microphone"/>
        <small className="text">Library</small></h3>
    )
}

export default NavBar