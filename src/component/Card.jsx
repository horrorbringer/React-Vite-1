import { sourceImageList } from "../assets/dataImages.js";
export const Card = () => {
  const dataImgs = sourceImageList
    .map((p, index) => (
      <div className="card-item" key={index}>
        <div className="img-title">
          <h1>{p.title}</h1>
        </div>
        <div className="img-list">
          <img src={p.imgSrc} />
        </div>
      </div>
    ));
  return (
    <>
      {/* card */}
      <article className="card">
        {dataImgs}
      </article>
      {/* end of card */}
    </>
  );
};
