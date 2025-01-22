const About = ({data}) => {
    return(
        <>
            <div id="about" className="flex flex-col justify-center items-center">
                <h1 className="text-3xl font-semibold text-yellow-500 my-3 text-center">About Me</h1>
                <p className="text-lg text-gray-200 ml-3 max-w-5xl mb-10">
                    {data.longDescription}
                </p>
            </div>
        </>
    );
}

export default About;