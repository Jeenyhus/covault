export default function Header() {
    return (
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Covault</h1>
          <nav className="space-x-4">
            <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
            <a href="#apply" className="text-gray-600 hover:text-blue-600">Apply</a>
          </nav>
        </div>
      </header>
    );
  }
  