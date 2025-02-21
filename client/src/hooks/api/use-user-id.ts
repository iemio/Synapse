import { useParams } from "react-router-dom";

const useUserId = () => {
    const params = useParams();
    return params.userId as string;
};

export default useUserId;
