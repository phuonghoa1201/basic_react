import StaticCard from "../StaticCard/StaticCard";
import CardGrid from "../CardGrid/CardGrid";
import Gallery from "../Gallery/Gallery";
function MainContent() {
  return (
    <main style={{ flex: 1, padding: '10px' }}>
        <h1 style={{textAlign:'center'}}>Welcome to React!</h1>
      <CardGrid/>
      <Gallery/>
    </main>
  );
}

export default MainContent;
