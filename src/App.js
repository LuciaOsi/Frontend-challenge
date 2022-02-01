import { FocusableInput } from "./components/FocusableInput";
import { Grocery } from "./components/Grocery";
import { ImageGallery } from "./components/ImageGallery";
import { ListItemsForNavigation } from "./components/ListItemsForNavigation";
import { Message } from "./components/Message";
import { PlayerStatus } from "./components/PlayerStatus";
import { Rating } from "./components/Rating";
import { TeamsList } from "./components/TeamsList";
import { Tab, Tabs } from "react-bootstrap";
import "./App.css";

const groceryList = [
  { name: "Oranges", votes: 0 },
  { name: "Bananas", votes: 0 },
];

const imageLinks = [
  {src: "https://reactnative.dev/img/tiny_logo.png", key:"0"},
  {src: "https://cloudfour.com/examples/img-currentsrc/images/kitten-large.png", key:"1"},
  {src: "https://picsum.photos/200", key:"2"},
]
export default function App() {
  return (
    <div className="App">
      <Tabs defaultActiveKey="focusable" id="tabs" className="mb-3">
        <Tab eventKey="focusable" title="'FocusableInput' test">
          <h3>'FocusableInput' test</h3>
          <FocusableInput />
        </Tab>
        <Tab eventKey="grocery" title="'Grocery' test">
          <h3>'Grocery' test</h3>
          <Grocery products={groceryList} />
        </Tab>
        <Tab eventKey="image" title="'ImageGallery' test">
          <h3>'ImageGallery' test</h3>
          <ImageGallery links={imageLinks}/>
        </Tab>
        <Tab eventKey="navigation" title="'ListItemsForNavigation' test">
          <h3>'ListItemsForNavigation' test</h3>
          <ListItemsForNavigation />
        </Tab>
        <Tab eventKey="message" title="'Message' test">
          <h3>'Message' test</h3>
          <Message />
        </Tab>
        <Tab eventKey="playerStatus" title="'PlayerStatus' test">
          <h3>'PlayerStatus' test</h3>
          <PlayerStatus />
        </Tab>
        <Tab eventKey="rating" title="'Rating' test">
          <h3>'Rating' test</h3>
          <Rating />
        </Tab>
        <Tab eventKey="teamList" title="'TeamsList' test">
          <h3>'TeamsList' test</h3>
          <TeamsList />
        </Tab>
      </Tabs>
    </div>
  );
}
