import './App.css'
import { useState } from 'react';

type Product = { title: string, isFav: boolean, id: number }
const product: Product[] = [{ title: 'Cabbage', isFav: false, id: 1 }, { title: 'Tomato', isFav: true, id: 2 }, { title: 'Potato', isFav: false, id: 3 }];

const listOfProduct = product.map((product) => <li key={product.id} style={{ color: product.isFav ? 'yellow' : 'inherit' }}>{product.title}</li>);




export default function MyApp() {
  //hooks
  const [count, setCount] = useState(0);

  function handleClick(): void {
    setCount(count + 1);
  }

  return (
    <>
      <p>{count}</p>
      <ul>{listOfProduct}</ul>
      <PrimaryButton count={count} onClick={handleClick} />
      <PrimaryButton count={count} onClick={handleClick} />
      <PrimaryButton count={count} onClick={handleClick} />
      <PrimaryButton count={count} onClick={handleClick} />

    </>
  );
}

function PrimaryButton({ count, onClick }: { count: number, onClick: () => void }) {
  return <button onClick={onClick} style={{ width: 100, height: 100, color: 'red' }}>Counter {count}</button>
}

