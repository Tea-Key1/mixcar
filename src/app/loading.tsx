import { Fragment } from "react";
import { motion } from "framer-motion"

export default function Loading() {
    return (<Fragment>
        <div className="h-[100%] w-[100%] flex justify-center items-center">
            <div className="text-3xl underline font-bold">Loading</div>
        </div>
    </Fragment>)
}