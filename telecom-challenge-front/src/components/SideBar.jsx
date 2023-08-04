import SearchBar from "./SearchBar";

const SideBar = () => {
  return (
    <section className="bg-black lg:h-screen lg:w-60 p-8">
      <h2 className="text-white text-2xl font-bold tracking-wider mb-16">
        <span className="text-orange-300">D</span>ev{" "}
        <span className="text-orange-300">T</span>ools
      </h2>

      <SearchBar />
    </section>
  );
};

export default SideBar;
