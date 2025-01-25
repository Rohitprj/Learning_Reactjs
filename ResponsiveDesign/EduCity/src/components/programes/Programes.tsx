import "./Programes.css";
import graduation3 from "../../assets/graduation3.jpg";
import grad from "../../assets/graduation-cap-svgrepo-com.svg";

const Programes = () => {
  return (
    <div className="programes">
      <div className="programe">
        <img src={graduation3} alt="" />
        <div className="caption">
          <img src={grad} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>

      <div className="programe">
        <img src={graduation3} alt="" />
        <div className="caption">
          <img src={grad} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>

      <div className="programe">
        <img src={graduation3} alt="" />
        <div className="caption">
          <img src={grad} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Programes;
