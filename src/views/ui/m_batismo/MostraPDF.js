import GeraPDFdia from "../../../components/m_batismo/GeraPDFdia";
import Error from "../../Error";

function MostraPDF() {
  if ((sessionStorage.getItem('permz')==='0') || (sessionStorage.getItem('permz')==='1'))  {
    return (
      <div className="App">
        <GeraPDFdia />
      </div>
    );
  }  else {
    return (
      <Error />
    );}
}
export default MostraPDF;