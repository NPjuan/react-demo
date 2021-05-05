import "./index.css";
export default function DetailList({ desc = []}) {
  return (
    <ul className="list">
      {desc.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
