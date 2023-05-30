import React from 'react';
import { Spinner } from '../../../components/ui/spinner/Spinner';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div>
        <Spinner />
      </div>
      <p>Cargando...</p>
    </div>
  );
}
