function ProfileImage(props){
        return(
            <section className="profile">
           <h3>Title: {props.tweet.title}</h3>
           <h3>Rating: {props.tweet.rating}</h3>
           </section>
        )
    }


export default ProfileImage