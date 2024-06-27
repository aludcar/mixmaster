import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/react-prop-types-example";

export const action = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const response = await axios.get(newsletterUrl);
    console.log(response);
    toast.success("Subscribed!!");

    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Newsletter = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Our newsletter
      </h4>
      <div className="form-row">
        {/* name */}
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="form-input"
          id="name"
          defaultValue="Emilie"
          required
        />
      </div>
      <div className="form-row">
        {/* lastName */}
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          className="form-input"
          id="lastName"
          defaultValue="Gomez"
          required
        />
      </div>
      <div className="form-row">
        {/* email */}
        <label htmlFor="email" className="form-label">
          Name
        </label>
        <input
          type="email"
          name="email"
          className="form-input"
          id="email"
          defaultValue="aludcar@gmail.com"
          required
        />
      </div>
      <div className="form-row">
        {/* submit */}
        <button
          type="submit"
          className="btn btn-block"
          style={{
            marginTop: "0.5rem",
          }}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting' : 'Submit'}
        </button>
      </div>
    </Form>
  );
};

export default Newsletter;
