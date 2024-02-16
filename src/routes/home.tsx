import { Button } from "react-bootstrap";
import { useBearStore } from "../../stores/counter-stores";
export default function HomePage() {
  const bears = useBearStore((state) => state.bears);
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const removeAllBears = useBearStore((state) => state.removeAllBears);

  return (
    <>
      <h1>Home Page</h1>
      <p>Bear Count: {bears}</p>
      <Button onClick={increasePopulation} variant="light">
        Increase
      </Button>
      <Button onClick={removeAllBears} variant="danger">
        Set to 0
      </Button>
    </>
  );
}
