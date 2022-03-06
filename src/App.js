import Card from './Component/Card/Card';
import Api from './Component/Card/Api';
function App() {
  const align = {
    textAlign : 'center'
  } 
  return (
    <div>
      <h1 style={align}>29+ Image Information </h1>
    {Api.map((val =>{
       return(
        <Card author = {val.author} download_url = {val.download_url} id ={val.id} url = {val.url} key ={val.id} ></Card>
      )
    }))}
    </div>
  );
}

export default App;
