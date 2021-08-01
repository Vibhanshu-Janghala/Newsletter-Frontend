import {useState} from "react";

const Newsletter = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.formSubmit(email);
        setEmail(() => "");
    }
    const [email, setEmail] = useState("");
    const handleChange = (e) => {
        setEmail(() => e.target.value);
    }
    return (
        <div
            className="flex flex-col max-w-6xl md:h-56 bg-white rounded-lg shadow-lg overflow-hidden md:flex-row my-44 md:my-80 md:ml-auto md:mr-auto ">
            <div className="md:flex items-center justify-center md:w-1/2 md:bg-gray-700">
                <div className="py-6 px-8 md:py-0">
                    <h2 className="text-gray-700 text-2xl font-bold md:text-gray-100">Sign Up For Project Updates</h2>
                    <p className="mt-2 text-gray-600 md:text-gray-400">Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Consectetur obcaecati odio</p>
                </div>
            </div>
            <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2 md:border-b-8 border-gray-700">
                {props.formState === "" ? <form onSubmit={handleSubmit}>
                        <div className="flex flex-col rounded-lg overflow-hidden sm:flex-row">
                            <input
                                className="py-3 px-5 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100"
                                type="text" name="email" placeholder="Enter your email"
                                onChange={handleChange}
                            />
                            <button
                                className="py-3 px-4 bg-gray-700 text-gray-100 font-semibold uppercase hover:bg-gray-600"
                                type="submit"
                            >
                                subscribe
                            </button>
                        </div>
                    </form>
                    :
                    <p className="mt-2 text-gray-600 md:text-gray-400 text-3xl font-bold">{props.formState}</p>}
            </div>
        </div>);
}
export default Newsletter;