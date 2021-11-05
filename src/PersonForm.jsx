import { useForm } from "./persons/custom-hooks";

export const PersonForm = ({ notifyError }) => {
  const initialValues = {
    name: "",
    phone: "",
    street: "",
    city: "",
  };

  const { form, handleChange, handleSubmit } = useForm(
    initialValues,
    notifyError
  );

  return (
    <div>
      <h2>Create New Person</h2>
      <form onSubmit={handleSubmit}>
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
        <input
          type="text"
          name="street"
          placeholder="Street"
          value={form.street}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          value={form.city}
          placeholder="City"
          onChange={handleChange}
        />
        <button>Add Person</button>
      </form>
    </div>
  );
};
