function Contact() {
return (
<section id="contact" className="py-5">
<div className="container">
<h2 className="text-center mb-4">Contact</h2>
<form className="w-50 mx-auto">
<input className="form-control mb-2" placeholder="Name" />
<input className="form-control mb-2" placeholder="Email" />
<textarea className="form-control mb-2" placeholder="Message"></textarea>
<button className="btn btn-dark w-100">Send</button>
</form>
</div>
</section>
);
}
export default Contact