export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg-primary transition-colors duration-300">
      <h1 className="text-5xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="text-xl text-text-secondary mt-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <a href="/" className="mt-8 text-accent-primary hover:text-accent-hover underline text-lg transition-colors">
        Go Home
      </a>
    </div>
  );
}
