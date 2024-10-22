import { sourceImageList } from "../assets/dataImages.js";
export const Card = () => {
  return (
    <div>
      {/* card */}
      <article className="card">
        <div className="card-item">
          <div className="img-title">
            <h1>{sourceImageList[0].title}</h1>
          </div>
          <div className="img-list">
            <img src={sourceImageList[0].imgSrc} />
          </div>
        </div>
        <div className="card-item">
          <div className="img-title">
            <h1>{sourceImageList[0].title}</h1>
          </div>
          <div className="img-list">
            <img src={sourceImageList[1].imgSrc} />
          </div>
        </div>
        <div className="card-item">
          <div className="img-title">
            <h1>{sourceImageList[0].title}</h1>
          </div>
          <div className="img-list">
            <img src={sourceImageList[2].imgSrc} />
          </div>
        </div>
        <div className="card-item">
          <div className="img-title">
            <h1>{sourceImageList[0].title}</h1>
          </div>
          <div className="img-list">
            <img src={sourceImageList[3].imgSrc} />
          </div>
        </div>
        <div className="card-item">
          <div className="img-title">
            <h1>{sourceImageList[0].title}</h1>
          </div>
          <div className="img-list">
            <img src={sourceImageList[4].imgSrc} />
          </div>
        </div>
        <div className="card-item">
          <div className="img-title">
            <h1>{sourceImageList[0].title}</h1>
          </div>
          <div className="img-list">
            <img src={sourceImageList[5].imgSrc} />
          </div>
        </div>
        <div className="card-item">
          <div className="img-title">
            <h1>{sourceImageList[0].title}</h1>
          </div>
          <div className="img-list">
            <img src={sourceImageList[6].imgSrc} />
          </div>
        </div>
        <div className="card-item">
          <div className="img-title">
            <h1>{sourceImageList[0].title}</h1>
          </div>
          <div className="img-list">
            <img src={sourceImageList[7].imgSrc} />
          </div>
        </div>
      </article>
      {/* end of card */}
    </div>
  );
};
