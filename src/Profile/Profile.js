import propTypes from "prop-types";
import './Profile.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = (props) => {

    const globalstyle = {
        backgroundColor: 'black',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };
    return (
        <div className='profile' style={globalstyle}>
            <div class="words word-1">
                <span>{props.fullName}</span>
            </div>
            <p style={{ color: "white", width: "60%", margin: "50px auto", lineHeight: "2rem" }}>{props.bio}</p>
            <h3>{props.profession}</h3>
            <img style={{ width: "200px", height: "200px", margin: "auto" }} src={props.children} alt='me'></img>
            <br />

            <Button style={{ marginTop: "80px" }} variant="light" href="/" onClick={() => props.handleName(props.fullName)}>THIS MY ALERT</Button>{' '}
        </div>
    )
};
Profile.defaultProps = {
    fullName: 'Your full name',
    bio: 'Your Bio',
    profession: 'Your Profession'
};

Profile.propTypes = {

    fullName: propTypes.string,
    bio: propTypes.string,
    profession: propTypes.string
};



export default Profile;

