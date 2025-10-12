import Card from "./components/Card";

const App = () => {
  return (
    <>
      <div className="parent">
        {/* By using normal function */}
        {/* {Card()} */}

        {/* By Using jsx syntax */}
        <Card
          img={
            "https://i.pinimg.com/736x/35/64/98/356498db32d503a043bc10ce61c90108.jpg"
          }
          name={"Prime"}
          desc={"A vibrant energy drink designed to boost focus and stamina."}
        />
        <Card
          img={
            "https://i.pinimg.com/736x/38/ac/c6/38acc62afd2427a8daa60ee73fe4dcaa.jpg"
          }
          name={"Nescafe"}
          desc={
            "A classic coffee brand delivering rich, smooth flavor for any time of day."
          }
        />
        <Card
          img={
            "https://i.pinimg.com/1200x/60/45/0e/60450e412ca44310d657142ab8f5b109.jpg"
          }
          name={"Red Bull"}
          desc={
            "The iconic energy drink known for giving you wings and keeping you energized."
          }
        />
        <Card
          img={
            "https://i.pinimg.com/736x/47/64/2c/47642c91a0108ffe8a61057bd2ea069a.jpg"
          }
          name={"Monster"}
          desc={
            "A bold and powerful energy drink for high-performance moments."
          }
        />
        <Card
          img={
            "https://i.pinimg.com/736x/57/9d/b4/579db43282e6242e59ec02d06d3d7fc6.jpg"
          }
          name={"Coca Cola"}
          desc={"The world-famous soda with a refreshing, timeless taste."}
        />
      </div>
    </>
  );
};

export default App;
