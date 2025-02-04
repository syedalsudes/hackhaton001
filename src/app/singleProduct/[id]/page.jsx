"use client"
import { Cards } from "../../blog/page";
import { useParams } from "next/navigation"; // Adjust the import path as needed\


export default function CardDetailsPage() {
    const { id } = useParams(); // Get the product ID from the URL
    console.log("ID from useParams:", id);
    console.log("Cards array:", Cards);

    const item = Cards.find((p) => parseInt(p.id) === parseInt(id));
    console.log("item:", item)

    // Match the product by ID

    if (!item) {
        return <div>Product not found</div>; // Handle invalid product IDs
    }

    return (
        //{ id: "1", Image: "blog1.png", h5: "Just In", h1: "Nike Air Force 1 Mid '07", h3: "Men's Shoes", h6: "1 Colour", h2: "MRP : ₹ 10 795.00" }, 
        <div className="card-container">
            <div className="card-box1">
                <img src={item.Image} alt={item.h1} />
            </div>
            <div className="card-box2">
                <h1>{item.h1}</h1>
                <p>Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.</p>
                <h4>{item.h2}</h4>
                <button>🛒 Add To Cart</button>
            </div>
        </div>
    );
}
