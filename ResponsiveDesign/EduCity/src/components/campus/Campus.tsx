import graduation3 from "../../assets/graduation3.jpg";
import "./Campus.css";
export const Campus = () => {
  return (
    <div>
      <div className="campus">
        <div className="galery">
          <img src={graduation3} alt="" />
          <img src={graduation3} alt="" />
          <img src={graduation3} alt="" />
          <img src={graduation3} alt="" />
        </div>
        <button className="btn seeMoreBtn">See more here</button>
      </div>
    </div>
  );
};
