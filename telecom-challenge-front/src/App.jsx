import SideBar from "./components/SideBar";
import ClientTable from "./components/ClientTable";

function App() {
  return (
    <main className="flex flex-col lg:flex-row">
      <SideBar />
      <ClientTable />
    </main>
  );
}

export default App;
