//import { useEffect, useState } from "react";
import React from "react";
import { useUserStore } from "../../stores/user-store";
import { Form } from "react-bootstrap";
export default function BlogPage() {
  /*
  const [data, setData] = useState();

  async function fetchData() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const json = await response.json();

    setData(json);
  }
  useEffect(() => {
    fetchData();
  }, []);
  if (!data) <div>Loading...</div>;
  return (
    <>
      <h1>Blog Page</h1>
      <pre>{JSON.stringify(data)}</pre>
    </>
  );
  */
  const firstName = useUserStore((state) => state.firstName);
  const lastName = useUserStore((state) => state.lastName);
  const birthDate = useUserStore((state) => state.birthDate);
  const age = useUserStore((state) => state.getAge());
  const height = useUserStore((state) => state.height);
  const weight = useUserStore((state) => state.weight);
  const bmi = useUserStore((state) => state.getBmi());
  const bmiResult = useUserStore((state) => state.getBmiResult());

  const setFirstName = useUserStore((state) => state.setFirstName);
  const setLastName = useUserStore((state) => state.setLastName);
  const setBirthDate = useUserStore((state) => state.setBirthDate);
  const setHeight = useUserStore((state) => state.setHeight);
  const setWeight = useUserStore((state) => state.setWeight);

  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFirstName(e.target.value);
  }
  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLastName(e.target.value);
  }

  function handleBirthDate(e: React.ChangeEvent<HTMLInputElement>) {
    setBirthDate(e.target.valueAsDate!);
  }
  function handleHeightChange(e: React.ChangeEvent<HTMLInputElement>) {
    setHeight(e.target.valueAsNumber || undefined);
  }
  function handleWeightChange(e: React.ChangeEvent<HTMLInputElement>) {
    setWeight(e.target.valueAsNumber || undefined);
  }
  return (
    <>
      <h1>Blog Page</h1>
      <p>Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Age: {age}</p>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
      <p>
        BMI : {bmi} ({bmiResult})
      </p>

      <Form.Group className="mb-3">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          value={firstName}
          placeholder="Enter your name"
          onChange={handleFirstNameChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name:</Form.Label>
        <Form.Control
          type="text"
          value={lastName}
          placeholder="Enter your last name"
          onChange={handleLastNameChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Birth Date:</Form.Label>
        <Form.Control
          value={birthDate ? birthDate.toLocaleDateString("en-CA") : undefined}
          type="Date"
          onChange={handleBirthDate}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Height (cm):</Form.Label>
        <Form.Control
          type="number"
          value={height}
          onChange={handleHeightChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Weight (kg):</Form.Label>
        <Form.Control
          type="number"
          value={weight}
          onChange={handleWeightChange}
        />
      </Form.Group>
    </>
  );
}
