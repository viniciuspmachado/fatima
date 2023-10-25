import GeraPDFdet from "../../../components/m_batismo/GeraPDFdet";
import Error from "../../Error";

function MostraPDF_Det() {
  if ((sessionStorage.getItem('permz')==='0') || (sessionStorage.getItem('permz')==='1'))  {
    return (
      <div className="App">
        <GeraPDFdet />
      </div>
    );
  }  else {
    return (
      <Error />
    );}
}
export default MostraPDF_Det;