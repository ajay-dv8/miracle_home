import NameCard from '@/components/nameCard';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
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
    <div className='w-full px-20'>
      <div className="flex flex-col justify-center items-center sticky top-0">
        <div>
          <Link href='/'><Button>Go Back</Button></Link>
        </div>

        <div>
          <h2 className='text-2xl font-bold'>Please confirm your name</h2>
          <p>Your name should be here if your form has been submitted</p>
        </div>

      </div>
      <div>
        <div className="w-full flex flex-col gap-4 justify-center items-center">

          <Table>
            <TableCaption>A list of your data.</TableCaption>
            <TableHeader className=''>
            <TableRow>
              <TableHead className="w-64 text-center">Name</TableHead>
              <TableHead className="text-center">Phone</TableHead>
              <TableHead className="text-center">Room no.</TableHead>
              <TableHead className="text-center">Date of renewal</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow className='px-10'>

              <TableCell className="font-medium pl-12 border border-b-2">
                {data ? data.map((data) => (
                  <NameCard 
                    key={data.id} 
                    name={data ? data.name : ''}
                    // room_number={data ? data.room_number : ''}
                    // phone={data ? data.phone : ''}
                    // date={data ? data.date_of_renewal : ''}
                  />
                )) : "Loading"}
              </TableCell>

              <TableCell className=' m-2 border border-b-2'>
                {data ? data.map((data) => (
                  <NameCard 
                    key={data.id} 
                     room_number={data ? data.room_number : ''}
                  />
                )) : "Loading"}
              </TableCell>

              <TableCell className='m-2 border border-b-2'>
                {data ? data.map((data) => (
                  <NameCard 
                    key={data.id} 
                    phone={data ? data.phone : ''}
                  />
                )) : "Loading"}
              </TableCell>

              <TableCell className="m-2 border border-b-2">
                {data ? data.map((data) => (
                  <NameCard 
                    key={data.id} 
                    date={data ? data.date_of_renewal : ''}
              />
                )) : "Loading"}
              </TableCell>
            </TableRow>
          </TableBody>
          </Table>
        </div>

      </div>
    </div>
  )
}

export default page