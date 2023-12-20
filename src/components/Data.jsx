async function Data() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    data.map((item) => {
        return(
        <div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>{item.category}</p>
            <img src={item.img}/>
        </div>
        )
    })
}