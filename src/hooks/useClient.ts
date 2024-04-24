// useClient.ts
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const useClient = () => {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    // Marquer le composant comme un composant client
    console.log('Composant rendu côté client');
  }, [router.isReady]);
};