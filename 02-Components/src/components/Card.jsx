const Card = (props) => {
    console.log(props)
  return (
    <>
    <div className="card">
        <img src={props.img}  alt="" />
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
        <button className="btn">View Profile</button>

        <div className="carddata">
            <p>Hello sainath</p>
        </div>
    </div>
    </>
  );
};

export default Card;
