/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { RoomCard } from "./RoomCard";

export const HotelRooms = ({hotelRooms}) => {
    const navigate  = useNavigate()

    const handleNavigateToRoom = (id) => {
        navigate(`/room/${id}`)
        console.log('room id ', id)
    }

    const roomsArray = hotelRooms && hotelRooms.rooms ? hotelRooms.rooms : [];
    const hotelName = roomsArray.length > 0 ? roomsArray[0].hotel : '';

    return (
        <div className="channels-container">
          {hotelName && <span className="title-supreme">{hotelName}</span>}
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