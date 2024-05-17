/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { RoomCard } from "./RoomCard";

export const Rooms = ({rooms}) => {
    const navigate  = useNavigate()

    const handleNavigateToRoom = (id) => {
        navigate(`/room/${id}`)
    }

    const roomsArray = rooms && rooms.rooms ? rooms.rooms : [];

    return (
        <div className="channels-container">
          <span className="title-supreme">Rooms</span>
          {roomsArray.map((c) => (
            <RoomCard
              key={c.id}
              _id={c._id}
              name={c.name}
              available={c.available}
              price={c.price}
              hotel={c.hotel}
              capacity={c.capacity}
              imgUrl={c.imgUrl}
              navigateToRoomHandler={handleNavigateToRoom}
            />
          ))}
        </div>
      );      
}