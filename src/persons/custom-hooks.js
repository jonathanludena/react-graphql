import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_PERSON, EDIT_NUMBER } from "./gql-mutations";
import { ALL_PERSONS, FIND_PERSON } from "./gql-queries";

export const usePerson = () => {
  const result = useQuery(ALL_PERSONS);
  return result;
};

export const usePersonLazy = () => {
  const result = useLazyQuery(FIND_PERSON);
  return result;
};

export const useNotifyErr = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const notifyError = (message) => {
    setErrorMessage(message);
    setTimeout(() => setErrorMessage(null), 5000);
  };

  return {
    notifyError,
    errorMessage,
  };
};

const useCreatePerson = (notifyError) => {
  const result = useMutation(CREATE_PERSON, {
    refetchQueries: [{ query: ALL_PERSONS }],
    onError: (error) => {
      notifyError(error.graphQLErrors[0].message);
    },
  });

  return result;
};

const useChangeNumber = () => {
  const result = useMutation(EDIT_NUMBER);

  return result;
};

export const useForm = (values, notifyError) => {
  const [form, setForm] = useState(values);
  const [createPerson] = useCreatePerson(notifyError);
  const [changeNumber, result] = useChangeNumber();

  const handleSubmit = (e) => {
    e.preventDefault();

    createPerson({ variables: { ...form } });
    setForm(values);
  };

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    changeNumber({ variables: { ...form } });
    setForm(values);
  };

  return {
    handleSubmit,
    handleChange,
    handleUpdate,
    form,
    result,
  };
};
