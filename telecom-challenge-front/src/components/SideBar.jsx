import SearchBar from "./SearchBar";
import CreateButton from "./CreateButton";

const SideBar = () => {
  return (
    <section className="bg-black min-h-32 lg:min-h-full lg:w-60 p-8 flex justify-between items-center lg:block ">
      <h2 className="text-white text-2xl font-bold tracking-wider lg:mb-16">
        <span className="text-orange-300">D</span>ev{" "}
        <span className="text-orange-300">T</span>ools
      </h2>

      <SearchBar />

      <CreateButton />
    </section>
  );
};

export default SideBar;
