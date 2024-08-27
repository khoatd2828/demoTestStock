import dynamic from 'next/dynamic';

const BrowserRouter = dynamic(() => import('react-router-dom').then(mod => mod.BrowserRouter), {
  ssr: false
});

const ClientRouter = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default ClientRouter;
