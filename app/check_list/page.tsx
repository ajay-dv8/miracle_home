import NameCard from '@/components/nameCard';
import { Button } from '@/components/ui/button';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

const page = async () => {

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data, error } = await supabase
  .from('tenants')
  .select('*')

  return (
    <div>
      <div className="flex flex-col justify-center sticky top-0">
      <div>
          <Link href='/'><Button>Go Back</Button></Link>
        </div>

        <div>
        <h2 className='text-2xl font-bold'>Please confirm your name</h2>
        <p>Your name should be here if your form has been submitted</p>
        </div>

      </div>
      <div>
        <div className="w-full flex flex-col gap-4 p-4 justify-center items-center">
          {data ? data.map((data) => (
            <NameCard 
              key={data.id} 
              name={data ? data.name : ''}
              // room_number={data ? data.room_number : ''}
              // phone={data ? data.phone : ''}
              // date={data ? data.date_of_renewal : ''}
            />
          )) : "Loading"}
        </div>

      </div>
    </div>
  )
}

export default page