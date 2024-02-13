import { createClient } from '@supabase/supabase-js'
//import { cookies } from 'next/headers'
//import { createClient } from '@/utils/supabase/server'


export async function addTenant(formData: FormData) {

  const name = formData.get('name') as string
  const phone = formData.get('phone') as string
  const room_number = formData.get('room_number') as string
  const date_of_renewal = formData.get('date_of_renewal') as string

  // const cookieStore = cookies()
  // const supabase = createClient(cookieStore) 

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
}