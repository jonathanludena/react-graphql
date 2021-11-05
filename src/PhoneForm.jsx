import { useEffect } from "react";
import { useForm } from "./persons/custom-hooks";

export const PhoneForm = ({ notifyError }) => {
  const initialValues = {
    name: "",
    phone: "",
  };

  const { result, form, handleChange, handleUpdate } = useForm(initialValues);

  useEffect(() => {
    if (result.data && result.data.editNumber === null) {
      notifyError("Person not found");
    }
  }, [result.data]);

  return (
    <div>
      <h2>Edit phone Number</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="phone"
          value={form.phone}
          placeholder="Phone"
          onChange={handleChange}
        />

        <button>Change Phone</button>
      </form>
    </div>
  );
};
