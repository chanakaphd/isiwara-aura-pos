/*
=====================================
ISIWARA AURA ROOM ENGINE V1
=====================================
Version: 1.0
Purpose:
- Room Allocation
- Therapist Availability
- Changing Room Allocation
=====================================
*/

const RoomEngine = {

    /*
    ============================
    SAMPLE DATA
    ============================
    */

    rooms: [

        {
            roomNumber: "R-01",
            roomType: "normal",
            beds: 3,
            status: "Available"
        },

        {
            roomNumber: "R-02",
            roomType: "normal",
            beds: 1,
            status: "Available"
        },

        {
            roomNumber: "R-03",
            roomType: "shirodhara",
            beds: 1,
            status: "Available"
        }

    ],

    therapists: [

        {
            name: "Kasun",
            status: "Available"
        },

        {
            name: "Nimal",
            status: "Available"
        }

    ],

    changingRooms: [

        {
            room: "CR-1",
            status: "Available"
        },

        {
            room: "CR-2",
            status: "Available"
        }

    ],

    /*
    ============================
    FIND AVAILABLE ROOM
    ============================
    */

    findAvailableRoom(roomType = "normal") {

        return this.rooms.find(room =>

            room.roomType === roomType &&
            room.status === "Available"

        );

    },

    /*
    ============================
    FIND AVAILABLE THERAPIST
    ============================
    */

    findAvailableTherapist() {

        return this.therapists.find(

            therapist =>
            therapist.status === "Available"

        );

    },

    /*
    ============================
    FIND CHANGING ROOM
    ============================
    */

    findChangingRoom() {

        return this.changingRooms.find(

            room =>
            room.status === "Available"

        );

    },

    /*
    ============================
    RESERVE RESOURCES
    ============================
    */

    reserveResources(room,
                     therapist,
                     changingRoom) {

        room.status = "Reserved";

        therapist.status = "Reserved";

        changingRoom.status = "Reserved";

    },

    /*
    ============================
    MAIN ALLOCATION FUNCTION
    ============================
    */

    allocateBooking(roomType = "normal") {

        const room =
            this.findAvailableRoom(
                roomType
            );

        if (!room) {

            return {

                success: false,

                message:
                "No room available"

            };

        }

        const therapist =
            this.findAvailableTherapist();

        if (!therapist) {

            return {

                success: false,

                message:
                "No therapist available"

            };

        }

        const changingRoom =
            this.findChangingRoom();

        if (!changingRoom) {

            return {

                success: false,

                message:
                "No changing room available"

            };

        }

        this.reserveResources(

            room,
            therapist,
            changingRoom

        );

        return {

            success: true,

            room:
            room.roomNumber,

            therapist:
            therapist.name,

            changingRoom:
            changingRoom.room,

            preparationTime:
            5

        };

    }

};

console.log(

    RoomEngine.allocateBooking()

);