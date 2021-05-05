import './index.css'
export default function Block({title, desc=[]}){
  return (
    <div className="block">
      <header>{title}</header>
      {desc.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
}