import { Separator } from "./ui/separator";


type CardProps = {
name? : string | any ; 
room_number? : string | any;
phone? : string | any;
date? : Date | string | any
}
const NameCard = ({name, room_number, phone, date}:CardProps) => {
  return (
    <div className=" w-full">
      <div className="w-full flex flex-row gap-4 justify-center items-center">
        <p className="">{name}</p>
        <p>{room_number}</p>
        <p>{phone}</p>
        <p>{date}</p> 
          
        <Separator/>
      </div>
    </div>
  )
}

export default NameCard