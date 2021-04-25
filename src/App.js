import React, { useState } from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
import NavBar from './components/Navigation/Navbar';

const App = () => {

    const [showCheckoutForm, setShowCheckoutForm] = useState(false);

    const showCheckoutFormFn = e =>{
        setShowCheckoutForm(false);
    }

    return (
        <div className="container">
            <div>
                <NavBar/>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h1>Virtual Shop</h1>
                </div>
            </div>
            {
                !showCheckoutForm &&
                <div className="row">
                    <div className="col-md-8">
                        <ProductList />
                    </div>
                    <div className="col-md-4">
                        <Cart checkOut={showCheckoutFormFn} />
                    </div>
                </div>
            }
            {
                showCheckoutForm && <div>CheckoutForm</div>
            }
            <footer>
                <small>
                    powered by <a href="http://www.kikoya.mx/">Kikoya</a>
                </small>
            </footer>
        </div>
    );
}

export default App;
