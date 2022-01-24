import {useDispatch, useSelector} from "react-redux";
import {getFromData} from "../redux/reducers/formReducer";

export const useForm = (submitCallback) => {
    const formState = useSelector(state => state.form)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        submitCallback()
    }

    const handleChange = e => {
        dispatch(getFromData(e))
    }

    return [formState, handleChange, handleSubmit];
}

