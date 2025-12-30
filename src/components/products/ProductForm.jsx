import React, { useState } from 'react'

const ProductForm = ({ pullProducts }) => {
    let handleOnSubmit = (e) => {
        e.preventDefault();
        let name = e.target.customerName.value;
        let products = e.target.produt.value;
        let address = e.target.address.value;
        let newProducts = {
            name,
            products,
            address
        }
        console.log(newProducts);
        pullProducts(newProducts);


    }
    let [name, setName] = useState('');
    let [produt, setProduct] = useState('');
    let [address, setAddress] = useState('');

    let changeinstand = (e) => {
        setName(e.target.value);

    }
    let changeinstandProducts = (e) => {
        setProduct(e.target.value);

    }
    let changeinstandaAddress = (e) => {
        setAddress(e.target.value);

    }

    return (
        <div className='bg-amber-200'>
            <form onSubmit={handleOnSubmit} className='text-center p-5'>
                <input className='bg-amber-600 text-amber-50 rounded mb-3 p-1' type="text" name="customerName" id="customer-name" placeholder='Customer Name' defaultValue={name} onChange={changeinstand} />
                <br />
                <input className='bg-amber-600 text-amber-50 rounded  p-1' type="text" name="produt" id="products" placeholder='Product Name' defaultValue={produt} onChange={changeinstandProducts} />
                <br />
                <input className='bg-amber-600 text-amber-50 rounded my-3  p-1' type="text" name="address" id="address" placeholder='Address' defaultValue={address} onChange={changeinstandaAddress} />
                <br />
                <input className='bg-amber-600 text-amber-50 rounded p-2 cursor-pointer' type="submit" value="submit" />
            </form>
        </div>
    )
}

export default ProductForm;
