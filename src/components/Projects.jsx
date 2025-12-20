function Projects() {
return (
<section id="projects" className="py-5 bg-light">
<div className="container">
<h2 className="text-center mb-4">Projects</h2>
<div className="row">
{[1,2,3].map(p => (
<div className="col-md-4 mb-3" key={p}>
<div className="card h-100 shadow-sm">
<div className="card-body">
<h5 className="card-title">Project {p}</h5>
<p className="card-text">Short description of the project.</p>
<a href="#" className="btn btn-outline-dark btn-sm">View</a>
</div>
</div>
</div>
))}
</div>
</div>
</section>
);
}
export default Projects