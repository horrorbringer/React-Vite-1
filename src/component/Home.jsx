import { sourceImageList } from "../assets/dataImages.js";
const Home = () => {
  // const imageList = sourceImageList.map((img) => {
    
  //   return ;
  // });
  return (
    <>
      <div className="wrap-header">
        <h1 className="header1">Colors</h1>
      </div>
      <article>
        <div>
          <h1>{sourceImageList[0].title}</h1>
        </div>
        <div>
          <img src={sourceImageList[0].imgSrc} />
        </div>
      </article>
    </>
  );
};
export default Home;
