import './App.css';

import { Home } from './components/routes/home/home.component';
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/routes/nav/nav.component';



const HatsPage = props => {
  // const { hello } = useParams();

  return (
    <h1>Hhats</h1>
  )
}

function App() {
  return (
    // <div>
    //   <Switch>
    //     <Route exact path='/' component={HomePage} />
    //     <Route path='/shop' component={ShopPage} />
    //   </Switch>

    // </div>
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<HatsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
