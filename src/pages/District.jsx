import districtJSON from "../assets/nmdistrict60.json";
import {MapContainer} from "react-leaflet/MapContainer";
import {TileLayer} from "react-leaflet/TileLayer";
import {GeoJSON} from "react-leaflet/GeoJSON";

export const District = () => {

	return (<div className={"pt-[112px] lg:pt-[96px] flex flex-1 flex-col"}>
			<p className={"bg-black w-full flex justify-center gap-1 text-white"}><a
				className={"underline text-blue-200"} target={"_blank"}
				href={"https://www.nmlegis.gov/Members/Find_By_Address"}>Click here</a> to confirm your exact district.
			</p>
			<MapContainer center={[35.25, -106.82]} zoom={11}
			              style={{width: "100%", height: "100%"}}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<GeoJSON data={districtJSON}/>
			</MapContainer>
		</div>
	)
}
