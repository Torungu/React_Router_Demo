import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import InputCustom from "./InputCustom";
import { DatePicker, Select } from "antd";
import ButtonCustom from "./ButtonCustom";
import TableNV from "./TableNV";
import * as yup from "yup";
export const NotificationContext = React.createContext();

const DemoFormReact = () => {
  // const [value, setValue] = useState({
  //   name: " ",
  //   email: " ",
  // });

  // const handleChange = (e) => {
  //   const id = e.target.id;
  //   setValue({ ...value, [id]: e.target.value });
  //   console.log(value);
  // };
  const [arrNV, setArrNV] = useState([]);

  const {
    setFieldValue,
    handleChange,
    handleSubmit,
    values,
    errors,
    handleBlur,
    touched,
  } = useFormik({
    initialValues: {
      msnv: "",
      name: "",
      email: "",
      phone: "",
      pass: "",
      date: "",
      sex: "",
    },
    onSubmit: (value) => {
      console.log(value);
      // const arrNewNV = [...arrNV];
      // arrNewNV.push(values);
      // setArrNV(arrNewNV);
      setArrNV([...arrNV, values]);
      // reset HERE
    },
    validationSchema: yup.object({
      msnv: yup
        .string()
        .min(4)
        .max(8)
        .required("4-8 characters")
        .required("Type sth BITCH !"),
      email: yup
        .string()
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Pls enter correct Email"
        )
        .required("Type sth BITCH !"),
      phone: yup
        .string()
        .matches(/^(\+84|084|0)[1-9][0-9]{8}$/, "Pls enter VN phone number")
        .required("Type sth BITCH !"),
      pass: yup
        .string()
        .matches(/(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+/, "Pls enter pass")
        .required("Type sth BITCH !"),
      name: yup
        .string()
        .matches(/^[A-Za-z\s]+$/, "Pls enter letter")
        .required("Type sth BITCH !"),
      sex: yup.string().required("ur sex ?"),
      date: yup.string().required("ur DoB ?"),
    }),
  });
  // console.log(errors);
  // console.log(touched);
  const valueContext = useContext(NotificationContext);
  const deleteNV = (maso) => {
    const newArrNV = [...arrNV];
    let index = newArrNV.findIndex((item) => item.msnv === maso);
    if (index != 1) {
      newArrNV.splice(index, 1);
      setArrNV(newArrNV);
    } else {
      valueContext.handleNotification("error", "missing in data");
    }
  };
  const getInfoNV = (record) => {
    //setValues
  };
  const updateNV = (record) => {
    //use isValid in formik
  };
  const searchNV = () => {};
  return (
    <div>
      <h2 className="capitalize">Form get data</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2">
          <InputCustom
            labelContent={"MSNV"}
            placeholder={"pls enter ur id"}
            id={"msnv"}
            name={"msnv"}
            value={values.msnv}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.msnv}
            touched={touched.msnv}
          />
          <InputCustom
            labelContent={"Name"}
            placeholder={"pls enter ur name"}
            id={"name"}
            name={"name"}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name}
            touched={touched.name}
          />
          <div>
            <InputCustom
              labelContent={"Email"}
              placeholder={"pls enter ur email"}
              id={"email"}
              name={"email"}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              touched={touched.email}
            />
            {/* {touched.email && errors.email ? (
              <p className="text-red-500 h-3">{errors.email}</p>
            ) : (
              <p className="h-3"> </p>
            )} */}
          </div>
          <InputCustom
            labelContent={"Phone"}
            placeholder={"pls enter ur phone number"}
            id={"phone"}
            name={"phone"}
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.phone}
            touched={touched.phone}
          />
          <div>
            <label
              htmlFor="datepicker"
              className="block mt-5 text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <DatePicker
              format={"DD-MM-YYYY"}
              onChange={(date, dateString) => {
                console.log(dateString);
                setFieldValue("date", dateString);
              }}
              onBlur={() => handleBlur({ target: { name: "date" } })}
            />
            {errors.date && touched.date ? (
              <p className="text-red-500 h-3">{errors.date}</p>
            ) : (
              <p className="h-3"> </p>
            )}
          </div>
          <div>
            <label
              htmlFor="sex"
              className="block mt-5 text-sm font-medium text-gray-700"
            >
              Sex
            </label>
            <Select
              placeholder="Select ur sex"
              onChange={(value) => {
                console.log(value);
                setFieldValue("sex", value);
              }}
              options={[
                {
                  value: "Male",
                  label: "Male",
                },
                {
                  value: "Female",
                  label: "Female",
                },
              ]}
            />
            {errors.sex && touched.sex ? (
              <p className="text-red-500 h-3">{errors.sex}</p>
            ) : (
              <p className="h-3"> </p>
            )}
          </div>
          <InputCustom
            labelContent={"Password"}
            placeholder={"pls enter ur phone password"}
            id={"pass"}
            name={"pass"}
            value={values.pass}
            onChange={handleChange}
            onBlur={handleBlur}
            classWrapper="col-span-2"
            error={errors.pass}
            touched={touched.pass}
          />
        </div>
        <div className="mt-5 space-x-5">
          <ButtonCustom content={"Add Nhan Vien"} type="submit" />
          <ButtonCustom
            content={"Reset Form"}
            bgColor="bg-yellow-400"
            onClick={() => resetForm()}
          />
          <ButtonCustom content={"Update Nhan Vien"} bgColor="bg-blue-400" />
        </div>
      </form>
      <TableNV data={arrNV} handleDeleteNV={deleteNV} />
    </div>
  );
};

export default DemoFormReact;
