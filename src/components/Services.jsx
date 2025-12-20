
function Services() {
return (
<section className="py-5">
<div className="container">
<h2 className="text-center mb-4">Services</h2>
<div className="row">
{['Web Development','Smart Contracts','API Development'].map(s => (
<div className="col-md-4 mb-3" key={s}>
<div className="card text-center shadow-sm">
<div className="card-body">{s}</div>
</div>
</div>
))}
</div>
</div>
</section>
);
}
export default Services