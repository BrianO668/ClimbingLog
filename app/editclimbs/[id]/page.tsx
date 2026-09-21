import EditForm from "./editForm";
import {Climb, climbs} from "@/app/data/climbs";

export default async function EditClimbs({params}: {params: Promise<{id: string}>}) {
                    //Take in param that is a promise that I will get an object containing an id of type string

    const {id} = await params; //Needs async function to wait for the param promise and assign the value here

    return (
        <div>
            <EditForm id={id} />
        </div>
    );
}