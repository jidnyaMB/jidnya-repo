const Sidebar = ({ showWidget }) => (
  <aside className="p-4 bg-gray-50">
    <h4 className="font-semibold">Quick Links</h4>
    <ul>
      <li><a href="#tips" className="text-blue-600">Tips</a></li>
      <li><a href="#news" className="text-blue-600">News</a></li>
    </ul>
    {showWidget && (
      <div className="mt-4 p-2 border bg-white">
        <strong>Widget:</strong> This is conditionally rendered.
      </div>
    )}
  </aside>
);

export default Sidebar;
