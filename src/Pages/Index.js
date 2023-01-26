import AdventureList from "../Components/adventureList/AdventureList";

function Index(props) {
  return (
    <div>
      <h2>All Possible Adventures</h2>
      {<AdventureList props={props} />}{" "}
    </div>
  );
}

export default Index;
