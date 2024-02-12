import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './page/AboutUs';
import Person from './components/Person';
import GoBack from './components/GoBack';
import stars from './stars.json';
import AllStars from './page/AllStars';
import SingleStar from './page/SingleStar';

function App() {
  return (
    <>
      <h1>Many Stars </h1>

      <Routes>
        <Route path='/' element={<AllStars stars={stars} />} />
        <Route path='/:id' element={<SingleStar stars={stars} />} />
        <Route path='/about' element={<AboutUs />}>
          <Route index element={<p>Some meaningful words</p>} />
          <Route path='elena' element={<Person name={'Elena'} />} />
          <Route path='basil' element={<Person name={'Basil'} />} />
          <Route path='mary' element={<Person name={'Mary'} />} />
        </Route>
        <Route path='*' element={<p>404 - nothing here</p>} />
      </Routes>

      <GoBack />
    </>
  );
}

export default App;
