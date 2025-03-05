import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const AddToCart: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const initialProduct: CartItem | null = location.state || null;
  const [cartItems, setCartItems] = useState<CartItem[]>(initialProduct ? [initialProduct] : []);
  const [quantityz, setQuantity] = useState(1);

  const handleRemoveItem = (id: string) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Shopping Cart</h1>
      
      {cartItems.length > 0 ? (
        cartItems.map(({ id, name, price, image }) => (
          <div key={id} className="flex items-center bg-white p-5 rounded-lg shadow-md mb-4">
            {/* Left Side: Image & Name */}
            <div className="flex items-center w-1/3">
              <img src={image} alt={name} className="w-24 h-24 object-cover rounded-lg" />
              <h2 className="text-lg font-semibold text-gray-900 ml-4">{name}</h2>
            </div>
            
            {/* Right Side: Details */}
            <div className="w-2/3 flex flex-col gap-2">
              <p className="text-gray-600 text-lg font-medium">PRICE: ${price.toFixed(2)}</p>
              <div className="flex items-center gap-2">
                <label className="font-medium">Quantity:</label>
                <button className="btn btn-outline-secondary" onClick={() => setQuantity(quantityz - 1)} disabled={quantityz <= 1}>-</button>
                <span className="mx-2">{quantityz}</span>
                <button className="btn btn-outline-secondary" onClick={() => setQuantity(quantityz + 1)}>+</button>
              </div>
              <p className="text-gray-700 text-lg font-medium">Total: ${(price * quantityz).toFixed(2)}</p>
            </div>

            {/* Remove Button */}
            <button onClick={() => handleRemoveItem(id)} className="ml-6 bg-red-500 text-black px-4 py-2 rounded-md text-lg font-medium hover:bg-red-600 transition">
              Remove
            </button>
          </div>
        ))
      ) : (
        <div className="text-center text-black-600 text-lg font-medium py-10">
          Your cart is empty.
        </div>
      )}
      
      {/* Three Cards Section */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow-md">
            <p className="text-lg font-bold">🔴 Subtotal: $12,000.00</p>
            <p className="text-gray-700 font-medium mt-2">🔴 Shipping</p>
            <label className="block mt-2">
              <input type="radio" name={`shipping-${index}`} className="mr-2" /> Store Pickup - Ready in 2 Days
            </label>
            <label className="block mt-2">
              <input type="radio" name={`shipping-${index}`} className="mr-2" /> Standard Delivery - Delivered in 2-5 days (Rs.500/- upon delivery)
            </label>
            <p className="text-sm text-gray-600 mt-3">This shipping option allows you to receive your order at your convenience.</p>
            <p className="text-lg font-bold mt-3">🔴 Convenience Fee: $11,547.00</p>
            <p className="text-xl font-bold mt-2 text-green-700">🔴 Total: $396,447.00</p>
          </div>
        ))}
      </div> */}

      {/* Three Cards Section - One Row, Three Columns */}
                    {/* Three Cards Section - One Row, Three Columns */}
<div className="grid grid-cols-3 gap-4 mt-8">
  {/* Card 1 */}
  <div className="bg-white p-5 rounded-lg shadow-md">
    <p className="text-lg font-bold">🔴 Subtotal: $12,000.00</p>
    <p className="text-gray-700 font-medium mt-2">🔴 Shipping</p>
    <label className="block mt-2">
      <input type="radio" name="shipping-1" className="mr-2" /> Store Pickup - Ready in 2 Days
    </label>
    <label className="block mt-2">
      <input type="radio" name="shipping-1" className="mr-2" /> Standard Delivery - Delivered in 2-5 days (Rs.500/- upon delivery)
    </label>
    <p className="text-sm text-gray-600 mt-3">This shipping option allows you to receive your order at your convenience.</p>
    <p className="text-lg font-bold mt-3">🔴 Convenience Fee: $11,547.00</p>
    <p className="text-xl font-bold mt-2 text-green-700">🔴 Total: $396,447.00</p>
  </div>

  {/* Card 2 */}
  <div className="bg-white p-5 rounded-lg shadow-md">
    <p className="text-lg font-bold">🔴 Subtotal: $15,500.00</p>
    <p className="text-gray-700 font-medium mt-2">🔴 Shipping</p>
    <label className="block mt-2">
      <input type="radio" name="shipping-2" className="mr-2" /> Store Pickup - Ready in 2 Days
    </label>
    <label className="block mt-2">
      <input type="radio" name="shipping-2" className="mr-2" /> Standard Delivery - Delivered in 2-5 days (Rs.500/- upon delivery)
    </label>
    <p className="text-sm text-gray-600 mt-3">This shipping option allows you to receive your order at your convenience.</p>
    <p className="text-lg font-bold mt-3">🔴 Convenience Fee: $13,200.00</p>
    <p className="text-xl font-bold mt-2 text-green-700">🔴 Total: $410,250.00</p>
  </div>

  {/* Card 3 */}
  <div className="bg-white p-5 rounded-lg shadow-md">
    <p className="text-lg font-bold">🔴 Subtotal: $9,800.00</p>
    <p className="text-gray-700 font-medium mt-2">🔴 Shipping</p>
    <label className="block mt-2">
      <input type="radio" name="shipping-3" className="mr-2" /> Store Pickup - Ready in 2 Days
    </label>
    <label className="block mt-2">
      <input type="radio" name="shipping-3" className="mr-2" /> Standard Delivery - Delivered in 2-5 days (Rs.500/- upon delivery)
    </label>
    <p className="text-sm text-gray-600 mt-3">This shipping option allows you to receive your order at your convenience.</p>
    <p className="text-lg font-bold mt-3">🔴 Convenience Fee: $9,200.00</p>
    <p className="text-xl font-bold mt-2 text-green-700">🔴 Total: $380,150.00</p>
  </div>
</div>





      
      {/* Proceed to Checkout Button */}
      <div className="text-center mt-6">
        <button onClick={() => navigate("/products")} className="bg-green-500 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default AddToCart;






























// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
// }

// const AddToCart: React.FC = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const initialProduct: CartItem | null = location.state || null;

//   const [cartItems, setCartItems] = useState<CartItem[]>(initialProduct ? [initialProduct] : []);

//   const [quantityz, setQuantity] = useState(1);

//   const handleQuantityChange = (id: string, amount: number) => {
//     setCartItems((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
//       )
//     );
//   };

//   const handleRemoveItem = (id: string) => {
//     setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Shopping Cart</h1>
      
//       {cartItems.length > 0 ? (
//         cartItems.map(({ id, name, price, image, quantity }) => (
//           <div key={id} className="flex items-center bg-white p-5 rounded-lg shadow-md mb-4">
//             <img src={image} alt={name} className="w-24 h-24 object-cover rounded-lg" />
            
//             <div className="flex-1 ml-6">
//               <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
//               <p className="text-gray-600 text-lg font-medium">${price.toFixed(2)}</p>
              
//               {/* <div className="flex items-center mt-3 space-x-4">
//                 <button 
//                   onClick={() => handleQuantityChange(id, -1)} 
//                   className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md text-lg font-bold hover:bg-gray-300 transition"
//                 >-</button>
                
//                 <span className="text-lg font-semibold">{quantity}</span>
                
//                 <button 
//                   onClick={() => handleQuantityChange(id, 1)} 
//                   className="px-4 py-2 bg-blue-500 text-black rounded-md text-lg font-bold hover:bg-blue-600 transition"
//                 >+</button>
//               </div> */}
//               {/* Quantity Selector */}
//           <div className="d-flex align-items-center mb-3">
//             <label className="me-2"><strong>Quantity:</strong></label>
//             <button className="btn btn-outline-secondary" onClick={() => setQuantity(quantityz - 1)} disabled={quantityz <= 1}>-</button>
//             <span className="mx-2">{quantityz}</span>
//             <button className="btn btn-outline-secondary" onClick={() => setQuantity(quantityz + 1)}>+</button>
//           </div>
//             </div>

//             <button 
//               onClick={() => handleRemoveItem(id)} 
//               className="ml-6 bg-red-500 text-black px-4 py-2 rounded-md text-lg font-medium hover:bg-red-600 transition"
//             >
//               Remove
//             </button>
//           </div>
//         ))
//       ) : (
//         <div className="text-center text-black-600 text-lg font-medium py-10">
//           Your cart is empty.
//         </div>
//       )}

//       <div className="text-center mt-6">
//         <button 
//           onClick={() => navigate("/")} 
//           className="bg-green-500 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition"
//         >
//           Continue Shopping
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddToCart;
