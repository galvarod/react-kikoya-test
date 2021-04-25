import React, { useState } from 'react';
import PropTypes from 'prop-types';

CheckoutForm.propTypes = {
    items: PropTypes.array,
}

const CheckoutForm = ({items}) => {

    return (
        <div>
            <div className="cart__body">
                {items.map(item => (
                    <div key={item.id} {...item}>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </div>
                    ))}
                </div>
            <div>
                <button>Pay</button>
            </div>
        </div>
    );
}