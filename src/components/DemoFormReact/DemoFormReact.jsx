import { useFormik } from "formik";
import React, { useState } from "react";
import InputCustom from "./InputCustom";
import { DatePicker, Select } from "antd";
import ButtonCustom from "./ButtonCustom";
import TableNV from "./TableNV";

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

  const { setFieldValue, handleChange, handleSubmit, values } = useFormik({
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
    },
  });
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
          />
          <InputCustom
            labelContent={"Name"}
            placeholder={"pls enter ur name"}
            id={"name"}
            name={"name"}
            value={values.name}
            onChange={handleChange}
          />
          <InputCustom
            labelContent={"Email"}
            placeholder={"pls enter ur email"}
            id={"email"}
            name={"email"}
            value={values.email}
            onChange={handleChange}
          />
          <InputCustom
            labelContent={"Phone"}
            placeholder={"pls enter ur phone number"}
            id={"phone"}
            name={"phone"}
            value={values.phone}
            onChange={handleChange}
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
            />
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
          </div>
          <InputCustom
            labelContent={"Password"}
            placeholder={"pls enter ur phone password"}
            id={"pass"}
            name={"pass"}
            value={values.pass}
            onChange={handleChange}
            classWrapper="col-span-2"
          />
        </div>
        <div className="mt-5 space-x-5">
          <ButtonCustom content={"Add Nhan Vien"} type="submit" />
          <ButtonCustom content={"Reset Form"} bgColor="bg-yellow-400" />
          <ButtonCustom content={"Update Nhan Vien"} bgColor="bg-blue-400" />
        </div>
      </form>
      <TableNV data={arrNV} />
    </div>
  );
};

export default DemoFormReact;
