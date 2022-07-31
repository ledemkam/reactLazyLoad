import './App.css';
import axios from "axios";
import Header from './Components/Header/Header';
import { useEffect, useState ,lazy, Suspense} from 'react';


function App() {
  const [data,setData] = useState([])

  useEffect(() =>{
    axios.get('https://itunes.apple.com/in/rss/topalbums/limit=100/json')
    .then((res) => {
      setData(res.data.feed.entry )
    })
  },[])

  const Albums = lazy(() => import("./Components/Album/Album"))

  const loadingImg = <div className="album-img">
  <img alt="loading" src="https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif" />
               </div>

  return (
    <div className="App">
       <Header/>
       <div className="albums">
        { data.map(e => {

          return (
                <Suspense>
                  <Albums
                    key={e.id.label}
                    fallback={loadingImg}
                    image={e["im:image"][2].label}
                    title={e.title.label}
                    link={e.id.label}
                    price={e["im:price"].label}
                    date={e["im:releaseDate"].label}
                  />
                </Suspense>
              );
            })
          }
      </div>
    </div>
  );
}

export default App;
