import { CheckCircleOutlined } from "@ant-design/icons";
function LoadingSuccess(){
    return(
         <div>
            <CheckCircleOutlined style={{ fontSize: 40, color:"green" }} />
            <h3>Data loaded successfully</h3>
        </div>
    );

}
export default LoadingSuccess;