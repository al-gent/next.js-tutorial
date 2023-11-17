'use client';

import { useState } from 'react';

export function ProductRow({product }) {
  const [quantityDesired, setQuantityDesired] = useState('');
  const parsedQuantityDesired = parseInt(quantityDesired)

  const [quantity, setQuantity] = useState(product.quantity);
  const parsedQuantityAvail = parseInt(quantity)

  return(
  <tr >
    <td>{product.name}</td>
    <td> {quantity} {product.unit}</td>
    <td>{'$'+product.price+'/'+product.unit}</td>
    <td>
    <form classname={styles.smallerForm.textarea}>
      <input type="integer"
      value= {quantityDesired}
      placeholder="Desired Quantity"
      onChange={e=> setQuantityDesired(e.target.value)}/>
    <button
      onClick={e => {
      e.preventDefault();
      console.log(quantityDesired, quantity)
      if (isNaN(parsedQuantityDesired) || parsedQuantityDesired < 0 || parsedQuantityAvail  < parsedQuantityDesired) {
        console.log('invalid quant');
        return;
      }
      console.log(quantityDesired)
      setQuantityDesired('');
      setQuantity(product.quantity-quantityDesired)
      }}>Add</button>
    </form>
    </td>
  </tr>
  )
}