import { Card } from "./Card";
import { Footer } from "./Footer";

const Home = () => {
  return (
    <>
      {/* header */}
      <div className="wrap-header">
        <h1 className="header1">Colors</h1>
      </div>
      {/* line footer */}
      <Card />
      <Footer/> 
    </>
  );
};
export default Home;
