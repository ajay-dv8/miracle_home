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
    <div className='w-full px-20 md:px-4'>
      <div className="flex flex-col justify-center items-center sticky top-0">
        <div>
          <Link href='/'><Button>Go Back</Button></Link>
        </div>

        <div>
          <h2 className='text-2xl font-bold'>Please confirm your name</h2>
          <p>Your name should be here if your form has been submitted</p>
        </div>

      </div>
      <div className='w-full'>
        <div className="w-full flex flex-col gap-4 justify-center items-center px-4 md:px-20">

          <Table className='bg-white'>
            <TableCaption>A list of your data.</TableCaption>
            <TableHeader className=''>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Room no.</TableHead>
              <TableHead>Date of renewal</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data ? data.map((data) => (
            <TableRow key={data.id} className=''>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.phone} </TableCell>
              <TableCell>{data.room_number}</TableCell>
              <TableCell>{data.date_of_renewal}</TableCell>
            </TableRow>
             )) : "Loading"}
          </TableBody>
          </Table>
        </div>

      </div>
    </div>
  )
}

export default page