import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (info) => {
    const url = `http://localhost:5000/service`;
    try {
      const { data } = await axios.post(url, info);
      if (!data.success) {
        return toast.error(data.error);
      }
      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    }
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
