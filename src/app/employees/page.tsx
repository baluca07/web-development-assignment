import EmployeeList from "@/frontendComponents/employeeList";
import Link from "next/link";
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export default async function EmployeesPage() {
    const supabase = await createClient()

    const {data, error} = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }
    return (
        <>
            <Link href={"./admin"}>Manage employees...</Link>
            <EmployeeList></EmployeeList>
        </>
    )
}