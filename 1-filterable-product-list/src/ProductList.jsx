const ProductList = ({products}) => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">            
            {products.map((product, index) => (
                <div 
                    key={index} 
                    className="bg-white border border-gray-200 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-gray-600">₺{product.price}</p>
                </div>
            ))}
            
        </div>
    );
}

export default ProductList;