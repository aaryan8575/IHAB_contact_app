import React from 'react'
import Viewcard from '@/components/Viewcard';
import PageTemplate from '@/components/PageTemplate';
import Header from '@/components/Header';
import Button from '@/components/button';
export default function page() {
  return (
    <PageTemplate>
      <main className='overflow-hidden'>
        <Header title="Cards / View Card" rightSide={() => {
          return (
            <Button title="Share Card" leftIcon={""} />
          )
        }} />
        <Viewcard />
      </main>
    </PageTemplate>
  )
}
