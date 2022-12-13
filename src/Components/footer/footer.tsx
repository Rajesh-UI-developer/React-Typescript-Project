import { FC } from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer: FC = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_left">
          <p>Copyright © </p>
          <ul>
            <li><Link to='/' >Terms Of Use</Link></li>
            <li className="privacy_line"><Link to='/' >Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="footer_right">
            <p>Social Media</p>
            <ul>
                <li><Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                <li><Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                <li><Link to="/"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                <li><Link to="/"><i className="fa fa-youtube-play" aria-hidden="true"></i></Link></li>
            </ul>
        </div>
      </div>
    </>
  );
};
export default Footer;
