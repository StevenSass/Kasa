function Profile({profileName, profilePhoto}) {
    return ( 
        <div className="profile">
            <p className="profile__text">{profileName}</p>
            <img className="profile__photo" src={profilePhoto} alt={"photo de " + {profileName}} />
        </div>
    )
}

export default Profile