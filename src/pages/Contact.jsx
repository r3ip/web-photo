import { Col, Container, Row } from "react-grid-system"

export const Contact = () => {
  return (
    <>
      <div className="md:mt-48">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text">
            <h1 className="text-5xl font-bold">Contactame!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card w-full max-w-sm shadow-2xl bg-base-200">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Correo</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mensaje</span>
                </label>
                <input type="text" placeholder="Message" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gradient-to-r from-blue-400 to-emerald-400">Enviar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
