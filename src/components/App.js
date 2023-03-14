import videoData from "../data/video.js";
import Video from "./Video";

function App() {

  return (
    <div className="App">
      <Video videoData={videoData}></Video>
    </div>
  );
}

export default App;
