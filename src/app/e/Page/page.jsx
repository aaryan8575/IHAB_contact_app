import React from 'react'
import PageTemplate from '@/components/PageTemplate'
import Header from '@/components/Header'
import ContactCard from '../../d/contactcard/page'

function page() {
    return (
        <PageTemplate>
            <Header title="Contacts" searchBar={true} />
            <div className='flex '>
                <ContactCard />
               {/*  <ContactCard />
                <ContactCard />
                <ContactCard /> */}
            </div>
        </PageTemplate>

    )
}

export default page
