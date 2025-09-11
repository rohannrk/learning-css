import Keyboard from '../components/keyboard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Interactive Keyboard
        </h1>
        <Keyboard />
      </div>
    </div>
  );
}
