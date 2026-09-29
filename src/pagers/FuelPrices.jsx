import { useEffect, useState } from "react";
import API from "../api";

function FuelPrices() {
const [fuels, setFuels] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
const getFuels = async () => {
try {
const response = await API.get("/api/fuels");

setFuels(response.data);
} catch (error) {
console.log(error);
} finally {
setLoading(false);
}
};

getFuels();
}, []);
const editFuel = async (fuel) => {
const name = window.prompt(
"Fuel name:",
fuel.name
);

if (!name) return;

const price = window.prompt(
"Fuel price:",
fuel.price
);

if (!price) return;

await API.put(
`/fuels/${fuel._id}`,
{
name,
price: Number(price),
unit: fuel.unit,
},
config
);

loadData();
};
return (
<section className="page">

<div className="page-header">
<p>FUEL INFORMATION</p>
<h1>Fuel Prices</h1>
</div>

{loading ? (
<p className="loading">
Loading fuel prices...
</p>
) : (
<div className="price-grid">

{fuels.map((fuel) => (
<div
className="price-card"
key={fuel._id}
>
<div className="icon">
⛽
</div>

<h3>{fuel.name}</h3>

<h2>
Rs. {fuel.price}
</h2>

<p>
Per {fuel.unit}
</p>
<button className="edit-btn"onClick={() => editFuel(fuel)}>Edit
</button>
</div>
))}

</div>
)}

</section>
);
}
export default FuelPrices;