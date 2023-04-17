import React from 'react'

export default function index({mountains}) {
  return (
    <div>
      
    </div>
  )
}
export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/mountains');
    const mountains = await res.json();
    return {
      props: { mountains },
    };
  }