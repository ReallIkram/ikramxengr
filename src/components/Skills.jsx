function Skills() {
const skills = ['HTML','CSS','JavaScript','React','Node.js','Java','Solidity','Bootstrap'];
return (
<section id="skills" className="py-5 bg-light">
<div className="container">
<h2 className="text-center mb-4">Skills</h2>
<div className="row">
{skills.map(skill => (
<div className="col-md-3 col-6 mb-3" key={skill}>
<div className="card text-center shadow-sm">
<div className="card-body fw-semibold">{skill}</div>
</div>
</div>
))}
</div>
</div>
</section>
);
}
export default Skills