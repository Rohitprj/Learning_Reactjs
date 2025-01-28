import "./Title.css";

export default function Title({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <div className="title">
      <p>{title}</p>
      <h1>{subTitle}</h1>
    </div>
  );
}
