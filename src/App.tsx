import VirtualizedList from './apps/VirtualizedList/App';

// dummy
import userList, { User } from './dummy';
import Item from './molecules/Item';

function App() {
  return (
    <div>
      <div>
        <h1>Mirage Table</h1>
      </div>

      <div style={{ height: 1000, border: '1px solid #333', margin: '0px 100px' }}>
        <VirtualizedList<User> rootHeight={1000} itemHeight={100} items={userList}>
          {userList.map(
            (value: User, index: number): JSX.Element => (
              <Item<User> value={value} height={100} key={`item_${index}`} />
            ),
          )}
        </VirtualizedList>
      </div>

      <div style={{ height: 200 }}>
        <h2>End Section</h2>
      </div>
    </div>
  );
}

export default App;
