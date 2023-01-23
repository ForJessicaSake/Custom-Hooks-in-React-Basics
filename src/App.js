
import UseFetch from "./UseFetch";
function App() {

  const {data:products, loading, error} = UseFetch("https://fakestoreapi.com/products")
  return (
    <main className="App">
      {error && <p>{error}</p>}
      {loading && <p>...products are being fetched</p>}
      {products && products.map((product)=>(
        <section key={product.id} style={{display:'flex', gridTemplateColumns:'repeat(2,1)'}}>
        <figure>
        <img src={product.image} alt='products' style={{width:'4rem'}}/>
        </figure>
        <figcaption>
        <h4>{product.title}</h4>
        <p>${product.price}</p>
        </figcaption>
        </section>

      ))}
    </main>
  );
}

export default App;
