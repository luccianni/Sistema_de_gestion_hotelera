/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom";
import { Settings } from "../settings/Settings";
import { Hotels } from "../hotel/Hotels";
import { HotelView } from '../hotel/HotelView'
import { Rooms } from "../room/Rooms"
import { RoomView } from "../room/RoomView"
import { HotelRooms } from "../room/HotelRooms";

export const Content = ({hotels, getHotels, rooms, getRooms, hotelRooms}) => {
    return(
        <div className="content-container">
            <Routes>
                <Route path="settings" element={<Settings/>}/>
                <Route path="hotel" element={<Hotels hotels={hotels}/>}/>
                <Route path="hotel/:id" element={<HotelView getHotels={getHotels}/>}/>
                <Route path="room" element={<Rooms rooms={rooms}/>}/>
                <Route path="room/:id" element={<RoomView getRooms={getRooms}/>}/>
                <Route path="room/search/:id" element={<HotelRooms hotelRooms={hotelRooms}/>}/>
            </Routes>
        </div>
    )
}   