import './App.css';
import { App as KonstaApp, Page, Navbar, Block } from 'konsta/react';

function App() {
  return (
    <KonstaApp theme="material">
      <Page>
        <Navbar title="Health Level 8" />

        <Block strong>Hello world!</Block>
      </Page>
    </KonstaApp>
  );
}

export default App;
