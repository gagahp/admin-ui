import React, { useState } from 'react'

function UserCard(props) {
    // const { name, email, street, city, ...rest } = props;
    const { title, body, ...rest} = props;
    const [clicked, setClicked] = useState(false);

    console.log(rest);

    return (
        <div class="group">
            <div className="
            bg-white p-6 rounded-lg shadow hover:shadow-md hover:bg-red-50 hover:border hover:border-gray-500 transition-shadow text-center hover:scale-105 transition-transform duration-300
            flex flex-col justify-between h-full
            ">
            {/* <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow text-center "> */}
                <div className="">
                    <h1 className="text-xl font-semibold text-gray-800 mb-2 capitalize">{title}</h1>
                    <p className="text-gray-600 group-hover:text-red">{body}</p>
                </div>

                {/* <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
                <p className="text-gray-600">
                    <span className="font-medium">Email:</span> {email}
                </p>
                <p className="text-gray-600">
                    <span className="font-medium">Address:</span> {street}, {city}
                </p> */}

                {/* Menampilkan data tambahan dari rest */}
                {/* {Object.entries(rest).map(([key, value]) => (
                    <p key={key} className="text-gray-600">
                        <span className="font-medium capitalize">{key}:</span> {value}
                    </p>
                ))} */}

                <div className="flex items-center justify-between">
                <button 
                    className={`${clicked ? "group-hover:bg-special-red2 bg-special-red" : "group-hover:bg-gray-02 bg-gray-01"} text-white p-2 rounded-md w-full`}
                    onClick={() => setClicked(true)}>
                        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
                </button>
                </div>
            </div>
        </div>
    );
}

export default UserCard