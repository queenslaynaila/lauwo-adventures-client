import React from 'react';
import { generateSlug } from '@/utils/generateSlug';

export default function DayTrip() {
  return (
    <>
      <header className="w-full h-1/2 bg-[url('/g-3.jpg')]  lg:h-96 bg-cover bg-center flex justify-center items-center relative"></header>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/day_trips');
  const dayTrips = await res.json();
  const paths = dayTrips.map((day) => ({
    params: { daytrip: generateSlug(day.name) },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch('http://localhost:3000/day_trips');
  const dayTrips = await res.json();
  const dayTrip = dayTrips.find(
    (day) => generateSlug(day.name) === params.daytrip
  )
  return {
    props: { dayTrip },
  };
}


