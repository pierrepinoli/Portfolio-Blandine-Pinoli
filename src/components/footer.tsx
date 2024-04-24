
const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-black text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-400">
          Copyright © 2024{' '}
          <a href="https://pierre-pinoli.netlify.app" target="_blank" rel="noopener noreferrer" className="text-white">
            Pinoli Pierre
          </a>
        </p>
        <p className="text-gray-400">All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;