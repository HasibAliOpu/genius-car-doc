import React from "react";
import { useForm } from "react-hook-form";
const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const url = `http://localhost:5000/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });

    console.log(data);
  };
  return (
    <div className="w-50 mx-auto">
      <h1>Please Add a Service </h1>
      <form
        className="d-flex flex-column gap-3 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea placeholder="Description" {...register("description")} />
        <input placeholder="Price" type="number" {...register("price")} />
        <input placeholder="Photo URL" type="text" {...register("img")} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
