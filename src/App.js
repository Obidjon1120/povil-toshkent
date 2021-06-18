import Navbar from "./components/navbar";
import Contacts from "./page/contacts";
import Customers from "./page/customers";
import Portifolio from "./page/portifolio";


function App() {
  return (
      <div className="container position-relative">
          <div className="line"></div>
          <Navbar/>
          <Portifolio/>
          <Customers />
          <Contacts/>
      </div>

  );
}

export default App;
