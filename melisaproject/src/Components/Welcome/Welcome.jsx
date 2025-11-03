import ProfileCard from '../ProfileCard/ProfileCard';
import headerImage from '../../imgs/melisalogo.png'; // Adjust the path and filename
// import './Welcome.css'

function Welcome(props){
    return (
      <div>
        <img src={headerImage} alt="Header Banner" className="header-image" />
        
        <h1>°°••.. players ..••°°</h1>
        
        <ProfileCard 
          name="Lily" 
          bio="Loves coding and diet coke" 
          dessert="strawberry shortcake"
          age={20} 
        />
        
        <ProfileCard 
          name="Apple" 
          bio="Is A Cat and likes to eat and sleep " 
          dessert="scraps in the sink drain"
          age={3} 
        />
        
        <ProfileCard 
          name="Almond" 
          bio="Also a cat but is AWESOME! and has lots of fun." 
          dessert="tuna & chicken"
          age={3} 
        />
      </div>
    );
}

export default Welcome;