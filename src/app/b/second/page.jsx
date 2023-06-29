import React from 'react'
import Settingspage from '@/components/settingspage';
import PageTemplate from '@/components/PageTemplate';
import Header from '@/components/Header';

export default function page() {
  return (
    <PageTemplate>
        <main className='overflow-hidden'>
          <Header title="Settings" />
          <Settingspage/>
         
        </main>
      </PageTemplate>
  )
}

