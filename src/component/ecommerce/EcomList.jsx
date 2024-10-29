import { useState } from "react";

function EcomList()
{
    const [cart, setCart] = useState([])
    let allProducts = [
        {
            prodId: 501,
            prodName: "Laptop",
            prodCost: 40000,
            prodImage:
            "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww",
        },
        {
        prodId: 502,
        prodName: "Mobile",
        prodCost: 30000,
        prodImage:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8fHww",
        },
        {
        prodId: 503,
        prodName: "Tablet",
        prodCost: 20000,
        prodImage:
        "https://plus.unsplash.com/premium_photo-1673968280716-ca0c00af8a39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFibGV0fGVufDB8fDB8fHww",
        },
        {
        prodId: 504,
        prodName: "Watch",
        prodCost: 30000,
        prodImage:
        "https://media.istockphoto.com/id/1189984324/photo/smart-watch-for-branding-and-mock-up-3d-render-illustration.webp?a=1&b=1&s=612x612&w=0&k=20&c=obd89zfN8JUq7fiQdLoI7KCl-_N3CwpvLur3D5s-zZs=",
        },
        {
        prodId: 505,
        prodName: "Desktop",
        prodCost: 25000,
        prodImage:
        "https://plus.unsplash.com/premium_photo-1683326528070-4ebec9188ae1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVza3RvcHxlbnwwfHwwfHx8MA%3D%3D",
        },
    ];

    function addToCart(prodId)
    {
        let cartItem = allProducts.find((eachProduct)=> eachProduct.prodId===prodId)
        let newId = cart.length===0 ? 1 : cart[cart.length-1].cartId + 1
        setCart([...cart, {...cartItem, cartId:newId}]);
    }

    function deleteCartItem(cartId)
    {
        let filteredCart= cart.filter((eachCartItem) => eachCartItem.cartId != cartId)
        setCart(filteredCart)
    }
    
    let mappedCart=cart.map((eachCartItem)=>(
        <tr key={eachCartItem.cartId}>
            <td>{eachCartItem.cartId}</td>
            <td>{eachCartItem.prodName}</td>
            <td>{eachCartItem.prodCost}</td>
            <td><button className="btn btn-danger" onClick={()=>deleteCartItem(eachCartItem.cartId)}>Delete</button></td>
        </tr>
    ))

    let mappedAllProducts = allProducts.map((eachProduct) => (
        <div className="col-sm-12 col-md-6 col-lg-3" key={eachProduct.prodId}>
        <div className="card m-3">
          <img className="" src={eachProduct.prodImage}></img>
          <div className="card-title">
            <h5>{eachProduct.prodName}</h5>
          </div>
          <div className="card-text">
            <p>Product ID: {eachProduct.prodId}</p>
          </div>
          <div className="card-text">
            <p>Product Price: {eachProduct.prodCost}</p>
          </div>
          <div>
            <button className="btn btn-primary" onClick={()=>addToCart(eachProduct.prodId)}>Add to Cart</button>
          </div>
        </div>
      </div>
    ));
    
    let content = (
        <>
            <p>Total Items:{cart.length}</p>
            <p>Total Cost:{cart.reduce((sum, eachCartItem) => sum + eachCartItem.prodCost, 0)}</p>
        </>
    )

    return (
        <>
        <div className="container m-3">
            <div className="row">
                <div className="col-9">
                    <h3>LIST OF GADGETS</h3>
                    <div className="row">
                        {mappedAllProducts}
                    </div>
                </div>
                <div className="col-3">
                    <h6>CART ITEMS</h6>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>COST</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {mappedCart}
                        </tbody>
                    </table>
                    <div>
                        {cart.length!=0 ? content : ""}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default EcomList