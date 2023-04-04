import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "../Friend/Friend";

const Friends = () => {
    const friends = useLoaderData()

  return <div><h2>{friends.length}</h2>
  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mx-6">
    {
        friends.map(friend => <Friend
        key={friend.id}
        friend={friend}
        ></Friend>)
    }
  </div>
  </div>;
};

export default Friends;
