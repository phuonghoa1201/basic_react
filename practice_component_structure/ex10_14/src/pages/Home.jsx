import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import FeatureList from "../components/FeatureList/FeatureList";
import StaticArticle from '../components/StaticArticle/StaticArticle';
function Home(){
    return(
        <>
        <h2 style={{textAlign:"center"}}>Home</h2>
        <br></br>
        <LoadingSpinner/>
        <br></br>
        <FeatureList/>
        {/* <StaticArticle/> */}
        </>
    );
}
export default Home;