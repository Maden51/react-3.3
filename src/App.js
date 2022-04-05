import './App.css';
import MessageHistory from './components/MessageHistory';
import { messages } from './data';

function App() {
  const data = messages;
  
  return (
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <ul>
            {data.map((message) => (<MessageHistory key={message.id} list={message} />))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
