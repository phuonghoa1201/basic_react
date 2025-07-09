
import ProfileCard from "../components/ProfileCard/ProfileCard";
function About(){
    return(
        <div>
               <h2 style={{textAlign:"center"}}>About us</h2>
                <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                >
                    <ProfileCard />
                </div>
                    </div>
     
    );
}
export default About;