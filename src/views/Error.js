import { Link } from 'react-router-dom';
import "../assets/scss/Error.scss";
import errorBg from '../assets/images/bg/error-bg.jpg';

const Error = () => {
  return (
    <>
      <div
        className="loginBox"
        style={{ background: `url(${errorBg}) no-repeat bottom center #fff` }}
      >
        <div className="d-flex align-items-center justify-content-center h-100">
          <div className="text-center">
            <h1 className='error-title'>404</h1>
            <div className="my-3">
              <h4>Página não Encontrada!</h4>
              <span className="text-muted d-block fs-5">
                Você parece estar perdido{' '}
              </span>
            </div>

            <Link to="/" className="btn btn-danger">
              Voltar para Página Inicial
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
