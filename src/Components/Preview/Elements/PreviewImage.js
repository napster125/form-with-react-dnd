import { Button } from "antd";

export default function PreviewImage({ t, element }) {
  console.log(element);
  let { options, name } = element;
  let { style } = options ?? {};

  return <Button type="primary">{name}</Button>;
}
