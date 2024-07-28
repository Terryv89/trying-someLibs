import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          CLICK
        </Button>
      </div>
      <div>
        <Button danger outline>
          HEJ
        </Button>
      </div>
      <div>
        <Button warning outline>
          buy now
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          hide
        </Button>
      </div>
      <div>
        <Button primary rounded>
          show
        </Button>
      </div>
      <div>
        <Button>plain</Button>
      </div>
    </div>
  );
}

export default App;
