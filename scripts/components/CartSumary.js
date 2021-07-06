import React from "react"

export const CartSummary = ({order}) => (

  <div className="minicart">
    {order.items.length ? (
      <div className='minicart__body'>
        {order.items.map(item =>{
          return (
            <div className='minicart__item'>
              {item.image ? 
                <div className="minicart__img">
                  <img src={item.image} />
                </div> 
                : 
                ''
              }
              <div className='minicart__info'>
                <h5><strong>{item.product_title}</strong></h5>
                <p><b>Items:</b> {item.quantity}</p>
                <p><b>price:</b> ${item.price / 100}</p>
              </div>
            </div>
          )
        })}
          <div className="minicart__footer">
            <p>quantity: {order.item_count}</p>
            <p>total:${order.total_price / 100}</p>
            <a href={'/cart'} className="btn">
              Go to Cart
            </a>
          </div>

        </div>
      ) : (
        <div className='minicart__body'>
          <p className='center'>your cart is empty</p>
          <div className="minicart__footer">
            <a href={'/collections/all'} className="btn">
              Go to Shopping
            </a>
          </div>
        </div>
      )}
  </div>
  
)
