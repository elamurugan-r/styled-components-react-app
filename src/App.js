import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Footer, NavBar } from './components'
import { GlobalStyle } from './globalStyles';
import { Home } from './pages/Home/Home';
import { Products } from './pages/Products/Products';
import { ScrollToTop } from './pages/ScrollToTop';
import { Services } from './pages/Services/Services';
import { SignUp } from './pages/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop />
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/services" exact component={Services} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
