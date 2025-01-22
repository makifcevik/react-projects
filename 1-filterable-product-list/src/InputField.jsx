const InputField = ({filter, setFilter}) => {

const handleInputChange = (e) => {
    setFilter(e.target.value);
} 

    return(
        <div className="max-w-md mx-auto my-4">
            <h1 className="text-center p-6 font-bold text-2xl">Product Filter:</h1>
            <input 
                type="text" 
                value={filter}
                onChange={handleInputChange}
                placeholder="Filter Products"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

        </div>
    );
}

export default InputField;