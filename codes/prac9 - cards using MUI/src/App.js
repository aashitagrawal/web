import "./App.css";
import ActionAreaCard from "./components/ActionAreaCard";
import BasicCard from "./components/BasicCard";
import MediaControlCard from "./components/MediaControlCard";
import MovieCard from "./components/MovieCard";
import MovieCardTwo from "./components/MovieCardTwo";
import OutlinedCard from "./components/OutlinedCard";
import RecipeReviewCard from "./components/RecipeReviewCard";
import MovieCardThree from "./components/MovieCardThree";

function App() {
  return (
    <div className="grid pb-16 bg-zinc-200">
      <p className="title">21BIT005</p>
      <div className="justify-center flex">
        <h1 className="text-6xl text-black mt-4">
          <p className="text">Cards using MaterialUI and React.</p>
        </h1>
      </div>
      <div className="flex flex-wrap justify-between p-8">
        <div className="p-8">
          <ActionAreaCard />
        </div>
        <div className="p-8">
          <BasicCard />
        </div>
        <div className="p-8">
          <MediaControlCard />
        </div>
        <div className="p-8">
          <MovieCard />
        </div>
        <div className="p-8">
          <MovieCardTwo />
        </div>
        <div className="p-8">
          <OutlinedCard />
        </div>
        <div className="p-8">
          <RecipeReviewCard />
        </div>
        <div className="p-8">
          <MovieCardThree />
        </div>
      </div>
    </div>
  );
}

export default App;
