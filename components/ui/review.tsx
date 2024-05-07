import React from "react";

const Review = ({name, time, comment, src}: {name: string, time: string, comment: string, src: string}) => {
	return (
        <div className="flex">
            <img src={src} alt="owner" className="rounded-full w-[80px] h-[80px] mr-5" />
            <div>
                <h2 className="text-3xl leading-10">{name}</h2>
                <h3 className="text-xl leading-10">{time}</h3>
                <p className="break-all mt-5">{comment}</p>
            </div>
        </div>
    )
}

export default Review;
