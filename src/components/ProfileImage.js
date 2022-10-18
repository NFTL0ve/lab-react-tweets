<img src="IMAGE_URL" className="profile" alt="profile"/>



function ProfileImage(props){
        return(
            <section className="profile">
           <h3>Title: {props.detailsObj.title}</h3>
           <h3>Rating: {props.detailsObj.rating}</h3>
           </section>
        )
    }


export default ProfileImage