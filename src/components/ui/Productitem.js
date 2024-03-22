

export default function ProductItem({product}) {
    return (
        <div className="bg-white flex flex-col gap-y-1 relative items-center text-center text-sm font-semibold p-3">
        
    
            <img src={product.image} alt={product.title} />
            <div className="text-brand-color">{product.price}</div>
            <div className="text-gray-700 font-semibold">{product.title}</div>
            <div className="text-gray-500">{product.alt}</div>
        </div>
    )
}