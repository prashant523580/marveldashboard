import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
// import { Outlet } from 'react-router-dom';

function Main({ children }: { children: React.ReactNode }) {

    const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false);


    return (
        <>
            {/* <!-- ===== Page Wrapper Start ===== --> */}
            <div className="flex h-screen overflow-hidden ">
                {/* <!-- ===== Sidebar Start ===== --> */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                {/* <!-- ===== Sidebar End ===== --> */}
                {/* <!-- ===== Content Area Start ===== --> */}
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    {/* <!-- ===== Header Start ===== --> */}

                    <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
                    {/* <!-- ===== Header End ===== --> */}
                    {/* <!-- ===== Main Content Start ===== --> */}
                    <main className=''>
                        {/* <Outlet/> */}
                        <div className="mx-auto  max-w-screen-2xl w-full p-4 md:p-6 2xl:p-10">
                            {children}
                        </div>
                    </main>
                    {/* <!-- ===== Main Content End ===== --> */}
                </div>
                {/* <!-- ===== Content Area End ===== --> */}
            </div>
            {/* <!-- ===== Page Wrapper End ===== --> */}
        </>
    )
}

export default Main