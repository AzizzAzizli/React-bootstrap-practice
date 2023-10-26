import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/header";
import { Card } from "./components/card";
import movies from './data/movies.json'
function App() {
  return (
    <>
      <Header />
      <div className="d-flex  flex-wrap gap-2 bg-dark p-3"> 
      {movies.map((item,index)=> <Card key={item.Title} {...item} /> )}

          </div>
     
    </>
  );
}

export default App;
