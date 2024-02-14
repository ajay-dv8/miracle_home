'use client'
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Button } from "./ui/button"
//import { addTenant } from "@/app/auth/addTenant/route";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast"
import { Label } from "./ui/label";

// {searchParams,}: {searchParams: { message: string };}
const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [room_number, setRoom_number] = useState('');
  const [date_of_renewal, setDate_of_renewal] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast()

  async function addTenant(event:any) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    const name = formData.get('name') as string
    const phone = formData.get('phone') as string
    const room_number = formData.get('room_number') as string
    const date_of_renewal = formData.get('date_of_renewal') as string
  
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
  
    const { data, error } = await supabase
    .from('tenants')
    .insert([
      { 
        name: name, 
        phone: phone, 
        room_number: room_number, 
        date_of_renewal: date_of_renewal,
      }
    ])
    .select("*");
    console.log(data)

    toast({
      title: "Success.",
      description: "Your info has been submitted successfully",
    })

    setName('');
    setPhone('');
    setRoom_number('');
    setDate_of_renewal('');

    setIsLoading(false);
  }

  return (
    <div>
      <form 
        onSubmit={addTenant}
        className="flex flex-col gap-4 items-center flex-wrap mt-8"
      >
        
        <Input 
          type='text' 
          name='name' 
          placeholder="Name" 
          value={name} onChange={e => setName(e.target.value)}
        />

        <Input type='text' name='phone' placeholder="Phone number" value={phone} onChange={e => setPhone(e.target.value)}/>

        <div className="flex flex-row gap-2 mb-6">
        <Select name='room_number'>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="room number"/>
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="6">6</SelectItem>
          </SelectContent>
        </Select>
        
        <Input type='date' name='date_of_renewal' placeholder="date_of_renewal" value={date_of_renewal} onChange={e => setDate_of_renewal(e.target.value)} />

        </div>

        <Button 
          type="submit" 
          className="w-full bg-blue-500 hover:bg-blue-400 text-white shadow-2xl" 
          disabled={isLoading}

          // onClick={() => {
          //   toast({
          //     title: "Success.",
          //     description: "Your info has been submitted successfully",
          //   })
          // }}
        >
          {isLoading ? 'Loading...' : 'Submit'}
        </Button>

      </form>
    </div>
  )
}

export default Form