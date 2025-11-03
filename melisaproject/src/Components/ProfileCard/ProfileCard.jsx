import './ProfileCard.css';


function ProfileCard(props) {
    return (
      <div className="profile-card">
        <h2>{props.name}</h2>
        <p>{props.bio}</p>
        <p>Dessert: {props.dessert}</p>
        <p>Age: {props.age}</p>
      </div>
    );
  }
  
  export default ProfileCard;