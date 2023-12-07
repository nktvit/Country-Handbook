import InputBox from "./components/InputBox";
import TypingText from "./components/TypingText";
import {lazy} from "react"
const PhotoCollage = lazy(() => import("./components/PhotoCollage"));


const App: React.FC = () => {
  return (
    <main className="bg-slate-100 flex min-h-screen justify-center items-center p-5">
      <PhotoCollage />
      <div className="z-30 container flex flex-col text-center text-gray-800">
        <div id="logo" className="uppercase flex flex-col md:flex-row mb-8 text-4xl md:text-5xl justify-center font-logo">
          <span className="mr-2">Country</span>
          <span className="underline decoration-2 decoration-indigo-700">Handbook</span>
        </div>

        <TypingText fullText="Find the touristic info about any country" />
        <InputBox />
        <div className="mt-6">
          <p className="text-sm text-gray-600">Start by typing a <span className="text-indigo-700">country name</span></p>
          <p className="mt-2 text-sm text-gray-600">Get useful information like places to visit, local cuisine, and cultural insights</p>
        </div>
      </div>
    </main>
  );
}

export default App;
