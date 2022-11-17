import helloBike from "../../assets/Images/hello-bike.webp";

const rentInfoCard = () => {
    return <div className = "w-[986px] bg-white rounded-md p-4 flex flex-col">
    <div id="Hello" className="text-5xl font-extrabold text-blue-700 text-left mb-4">Your <span className="text-yellow-500">Rent Info</span> </div>
    <div>
    <img src={helloBike} alt="bike hello" className="rounded-xl w-1/4 h-1/4 m-auto"></img>
    </div>
    <div id="Name" className = "text-2xl font-bold text-center">Bike #XXXXXX</div>
    
    <div className="grid grid-cols-3">
        <div className="px-4 py-2 font-semibold">Lokasi Pengambilan</div>
        <div className="px-4 py-2">: GSP</div>
    </div>

    <div className="grid grid-cols-3">
        <div className="px-4 py-2 font-semibold">Tanggal Pengambilan</div>
        <div className="px-4 py-2">: 15 November 2022</div> 
    </div>
    
    <div className="grid grid-cols-3">
        <div className="px-4 py-2 font-semibold">Jam Pengambilan</div>
        <div className="px-4 py-2">: 23:00</div>
    </div>

    <div className="grid grid-cols-3">
        <div className="px-4 py-2 font-semibold">Status Pengembalian</div>
        <div className="px-4 py-2">: Belum Dikembalikan</div> 
    </div>

    <div class ="ml-auto">
    <button class="mx-auto h-10 px-10 m-2 text-white text-2xl transition-colors duration-150 bg-blue-700 rounded-lg focus:shadow-outline hover:bg-blue-800">Return Bike!</button>
    </div>
    


    </div>
}

export default rentInfoCard;