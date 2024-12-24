import Sidebar from './Sidebar';
import Repositories from './Repositories';
import { useState } from 'react';

const Repository = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-screen w-full lg:flex">
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Repositories isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default Repository;
