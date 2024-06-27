import { Form, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/SearchForm";


const SearchForm = ({searchTerm}) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          defaultValue={searchTerm}
        />
        <button className="btn" disabled={isSubmitting} type="submit">
          {isSubmitting ? "Searching.." : "search"}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
