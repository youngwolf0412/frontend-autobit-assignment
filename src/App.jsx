import Container from "./components/Container";
import Header from "./components/Header";
import ScriptSelector from "./components/ScriptSelector";
import ScriptTable from "./components/ScriptTable";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <>
      <Container>
        <Header />
        <ScriptSelector />
        <ScriptTable />
      </Container>
      <BottomNav />
    </>
  );
}

export default App;
