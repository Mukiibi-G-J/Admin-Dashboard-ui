import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          {/* <Route path="about" element={<Login />} /> */}
        </Route>
        {/* <Route path="users">
          <Route index element={<List />} />
          <Route path=":userid" element={<User />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="products">
          <Route index element={<List />} />
          <Route path=":productid" element={<Single />} />
          <Route path="new" element={<New />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
