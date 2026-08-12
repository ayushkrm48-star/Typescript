
import React from "react";

interface prop{
    id : number,
    name : string
}
export interface orderFormProps{
    onSubmit(order : {name : string , cups:number}) : void
}
export function OrderForm({id,name} : prop){
    return (
        <>
            <div>User id is :{id} and name is {name}</div>
        </>
    );
}