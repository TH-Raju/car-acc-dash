import React from "react";
import {
  useCratePostMutation,
  useGetAllPostsQuery,
  useGetSinglePostQuery,
} from "../../../redux/api/baseApi";
import { Button, Checkbox, Form, Input, message } from "antd";
export default function User() {
  const { data: allpostData } = useGetAllPostsQuery();
  const { data: singlePost  } = useGetSinglePostQuery(100);
  const [cratePost] = useCratePostMutation();
    console.log(singlePost);
  const onFinish = async (values) => {
    try {
      console.log("Success:", values);
      const data = {
        title: values.title,
        description: values.description,
      };
      const res = await cratePost(data).unwrap();
      console.log("res:", res);
      message.success("post created successfylly");
    } catch (error) {
      message.error("post noit create");
    }
  };
  const onFinishFailed = (errorInfo) => {};
  return (
    <div className="text-white">
      Users:{allpostData?.length}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="title"
          name="title"
          rules={[{ required: true, message: "Please input your title!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="description"
          name="description"
          rules={[
            { required: true, message: "Please input your description!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
