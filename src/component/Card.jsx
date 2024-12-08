import { sourceImageList } from "../assets/dataImages.js";
export const Card = () => {
  const dataImgs = sourceImageList.map((p) => {
    return `
      <div className="card-item">
        <div className="img-title">
          <h1>${p.title}</h1>
        </div>
        <div className="img-list">
          <img src="${p.imgSrc}" />
        </div>
      </div>
    	`;
  }).join("");
  return (
    <div>
      {/* card */}
      <article className="card">
        {/* {dataImgs} */}
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
