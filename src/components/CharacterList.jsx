import { EyeIcon } from "@heroicons/react/20/solid";

function CharacterList({allcharacters}) {
  return (
    <div className="characters-list">
      {allcharacters.map((item) => (
        <Character key={item.id} item={item}/>
      ))}
    </div>
  )
};

export default CharacterList;

function Character({item}){
    return(
    <div className="list__item">
      <img src={item.image} alt={item.name} />
      <h3 className="name">
        <span>{item.gender==="Male" ? "m" : "f"}</span>
        <span>{item.name}</span>
      </h3>
      <div className="list-item__info">
        <span className={`status ${item.status==="Dead" ? "red": ""}`}></span>
        <span className="info"> {item.status} </span>
        <span className="info"> - {item.species} </span>
      </div>
      <button className="icon red">
        <EyeIcon />
      </button>
    </div>
    );
  
}