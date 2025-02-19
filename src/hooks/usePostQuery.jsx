import { useMutation } from "react-query";
import { request } from "../services/request";
import { toast } from "react-toastify";

const postRequest = (url, data) => {
    return request.post(url, data)
}

const usePostQuery = ({ hideToast = false } = {}) => {
    const { mutate, isLoading, error } = useMutation((url, data) => postRequest(url, data), {
        onSuccess: (item) => {
            if (!hideToast) {
                toast.success(item?.data?.message)
            }
        },
        onError: (error) => {
            console.log(error)
            toast.error(error)
        }
    })

    return {
        postRequest,
        mutate,
        isLoading,
        error
    }

}

export default usePostQuery
