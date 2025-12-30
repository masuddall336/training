

const ProductLoad = ({ product }) => {
  console.log(product);
  let Quantity = product.length;
  return (
    <div className="h-[300px]">
      <h2 className="text-center">Add Products:</h2>
      <table>
        <thead>
          <tr>
            <th>Sl.</th>
            <th>Product Name</th>
            <th>Qty.</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            product.map((single_product, index) => {
              console.log(single_product.name, single_product.products, single_product.address, index);
              
              <tr key={index}>
                <td>{index}</td>
                <td>{single_product.name}</td>
                <td>{single_product.products}</td>
                <td>{single_product.address}</td>
                <td></td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default ProductLoad
