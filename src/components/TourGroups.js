import React from 'react';
import { useState, useEffect } from 'react';
import GroupBookings from './GroupBookings';
import NotificationForm from '@/components/NotificationForm';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Link from 'next/link';
export default function TourGroups() {
  const [groupClimbs, setGroupClimbs] = useState([]);
  useEffect(() => {
    const fetchGroupClimbs = async () => {
      try {
        const response = await fetch(`https://lauwo-adventures-api.onrender.com/group_climbs/`);
        if (response.ok) {
          const data = await response.json();
          setGroupClimbs(data);
        } else {
          console.error('Failed to fetch group climbs data');
          setGroupClimbs([]);
        }
      } catch (error) {
        console.error('Failed to fetch group climbs data', error);
        setGroupClimbs([]);
      }
    };

    fetchGroupClimbs();
  }, []);
  console.log(groupClimbs);
  const contentStyle = {
    width: '85%',
    maxHeight: '85%',
    overflow: 'auto',
    margin: 'auto',
  };
  return (
    <section className="py-8 font-poly ">
      <h2 className="text-center text-3xl font-bold mb-4">
        Join Some of Our Climb Groups
      </h2>
      <p className="text-center leading-8 mx-6">
        In the event that the scheduled group climbs do not align with your
        preferred dates, we have a convenient solution. Simply provide us with
        your details through the form{' '}
        <Link href="/kilimanjaro-group-climb" className="text-yellow-500">
          here
        </Link>
        , and Lauwo will promptly notify you as soon as a group climb that meets
        your specifications becomes available.
      </p>

      <div className="p-4 mb-4">
        {groupClimbs.length > 0 ? (
          <ul role="list" className="divide-y divide-black divide-opacity-50">
            {groupClimbs.map((groupClimb) => (
              <li
                className="flex justify-between gap-x-6 py-6"
                key={groupClimb.id}
              >
                <div className="flex gap-x-4">
                  <div className="flex-none h-14 w-14 rounded-full bg-yellow-500 flex items-center justify-center">
                    <p className="text-white text-sm font-bold">
                      {groupClimb.day}
                      <br />
                      {groupClimb.month}
                    </p>
                  </div>
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {groupClimb.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {groupClimb.tag}
                    </p>
                  </div>
                </div>
                <div>
                  <Popup
                    trigger={
                      <button className="bg-yellow-500 text-white rounded-md px-4 py-2">
                        Join Group
                      </button>
                    }
                    modal
                    nested
                    closeOnDocumentClick
                    contentStyle={contentStyle}
                  >
                    {(close) => (
                      <div className="modal">
                        <button className="close " onClick={close}>
                          &times;
                        </button>
                        <GroupBookings id={groupClimb.id} />
                      </div>
                    )}
                  </Popup>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center">
            <div>
              <Popup
                trigger={
                  <button className="bg-yellow-500 text-white rounded-md px-4 py-2">
                    Join Notification List
                  </button>
                }
                modal
                nested
                closeOnDocumentClick
                contentStyle={contentStyle}
              >
                {(close) => (
                  <div className="modal">
                    <button className="close " onClick={close}>
                      &times;
                    </button>
                    <NotificationForm mountain={'Kilimanjaro'} />
                  </div>
                )}
              </Popup>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
