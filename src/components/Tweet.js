import userEvent from "@testing-library/user-event";
import ProfileImage from "../components/ProfileImage.js";



function Tweet(props) {
 
  return (
    <div className="tweet">
      <img
        src={props.detailsObj.user.image}
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{props.detailsObj.user.name}</span>
            <span className="handle">{props.detailsObj.user.handle}</span>
          </span>

          <span className="timestamp">{props.detailsObj.timestamp}</span>
        </div>

        <p className="message">{props.detailsObj.message}
       
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}
<ProfileImage></ProfileImage>;
<userEvent></userEvent>


export default Tweet;
