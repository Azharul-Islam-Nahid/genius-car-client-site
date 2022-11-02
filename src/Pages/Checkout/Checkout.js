import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {

    const { user } = useContext(AuthContext);

    const service = useLoaderData();

    const handlePlaceOrder = e => {

        e.preventDefault();

        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price: price,
            customer: name,
            email: email,
            phone: phone,
            message: message

        }

        if (phone.length > 11) {
            alert('Enter valid phone number')
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order submitted')
                    form.reset();
                }
            })
            .catch(err => console.error(err))

    }

    const { _id, title, img, price } = service;

    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <img className='mx-auto w-9/12 mb-4' src={img} alt="" />
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <h2 className="text-4xl">You are going to avail: {title}</h2>
                    <h4 className="text-3xl">Price: {price} $</h4>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full" required />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full" required />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" required />
                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                </div>
                <textarea name='message' className="textarea textarea-bordered mt-4 h-24 w-full" placeholder="Your message"></textarea>
                <input className="btn  mt-4" type="submit" value='place your order' />
                <div>

                </div>
            </form>
        </div>
    );
};

export default Checkout;