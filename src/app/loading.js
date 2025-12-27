'use client'
import { BallTriangle } from "react-loader-spinner";

export default function loading() {
    return (
        <div className="flex justify-center items-center min-h-[100vh]">
            <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
        </div>
    );
};
