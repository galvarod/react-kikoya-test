import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const Cart = ({ items, total, currency, removeFromCart, checkOut }) => {
    return (
        <div>
            <h3>Shopping Cart</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <div className="cart__body">
                                {items.map(item => (
                                    <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} />
                                ))}
                            </div>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                        <div className="cart__total">Total: {total + (total * 0.16)} {currency}</div>
                        <div>
                            {items.length > 0 && <button onClick={checkOut(true)}>CHECKOUT</button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired,
    checkOut: PropTypes.func.isRequired,
}

export default Cart;
