import SideBar from "./components/SideBar";
import ClientTable from "./components/ClientTable";

function App() {
  return (
    <main className="flex flex-col lg:flex-row h-screen">
      <SideBar />
      <ClientTable />
    </main>
  );
}

export default App;
