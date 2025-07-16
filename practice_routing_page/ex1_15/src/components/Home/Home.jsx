import ClickCounter from "../Button/ClickCounter/ClickCounter";

function Home() {
    return (
        <div className="flex justify-center items-center h-screen flex-col">
            <section
                className="w-full h-full flex flex-col justify-center items-center bg-[url('https://mightyslide.com/wp-content/uploads/edd/2024/11/01-15.jpg')] bg-cover bg-center"
            >
                <div className="bg-black/50 w-full h-full flex flex-col justify-center items-center">
                <img className="w-20 rounded-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT19urE4x5YYNW5YH4Hhfos32BKk34TsZuTcg&s"/>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Welcome to My Portfolio
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-6">
                        I’m Phuong Hoa,  studying  software development at VKU university in DaNang City.
                    </p>
                    <ClickCounter/>
                </div>
            </section>
        </div>
    );

}
export default Home;