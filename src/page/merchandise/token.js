import { useLocation } from "react-router-dom";
import queryString from 'query-string'
// 
import IMAGES from "../../assets/auction/robots/robotImg";
// 
export const NftToken = () => {
  const param = useLocation();
  const { id } = queryString.parse(param.search);
	return <img src={`${window.location.origin}${IMAGES[id]}`} />
}
