import ParticleBackground from "./components/ParticleBackground";
import CardMain from "./components/CardMain";
function App() {
  return (
    <div className=" w-full h-screen bg-black">
      <ParticleBackground />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-3xl">
        <CardMain />
      </div>
    </div>
  );
}

export default App;
