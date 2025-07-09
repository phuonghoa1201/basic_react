import StaticCard from "../StaticCard/StaticCard";
import CardGrid from "../CardGrid/CardGrid";
function MainPanel() {
  return (
    <main style={{ flex: 1, padding: '10px' }}>
        <h1 style={{textAlign:'center'}}>Welcome to your dashboard</h1>
      <CardGrid/>
    </main>
  );
}

export default MainPanel;
