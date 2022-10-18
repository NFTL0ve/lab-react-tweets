import userEvent from "@testing-library/user-event";
import ProfileImage from "../components/ProfileImage.js";
import Message from "./Message.js";
import User from "./User.js";

function Tweet(props) {
 
  return (
    <div className="tweet">
      <img
        src={props.tweet.user.image}
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{props.tweet.user.name}</span>
            <span className="handle">{props.tweet.user.handle}</span>
          </span>

          <span className="timestamp">{props.tweet.timestamp}</span>
        </div>

<p>
        <span className="message">{props.tweet.message}</span>
        
       
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
<userEvent></userEvent>;
<Message></Message>;
<User></User>



export default Tweet;
