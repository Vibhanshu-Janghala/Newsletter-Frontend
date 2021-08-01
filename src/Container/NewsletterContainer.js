import Newsletter from "../Components/Newsletter";
import {useState} from "react";

const NewsletterContainer = () => {
    const [formState, setFormState] = useState("");
    const handleFormSubmit = async (email) => {
        setFormState(() => "Loading");
        try {
            const response = await fetch("add/", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({mail:email})
                }
            );
            console.log(response);
            if (response.status === 200) {
                setFormState(() => "Success");
            } else {
                console.error(response)
                setFormState(() => "Failed.Try again");
            }
        } catch (error) {
            console.error(error);
            setFormState(() => "Failed.Try again");
        }
        setTimeout(() => {
            setFormState(() => "")
        }, 1500)
    }
    return (
        <Newsletter formSubmit={handleFormSubmit} formState={formState}/>
    );
}
export default NewsletterContainer;