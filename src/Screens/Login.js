import { collection, getDocs, query, where } from "@firebase/firestore";
import { useState } from "react";
import { Button, Form, Input } from "reactstrap";
import firestore from "../firebase";
import bcrypt from "bcryptjs-react";
import toast from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const userData = await getDocs(
      query(collection(firestore, "user"), where("email", "==", `${email}`))
    );
    const users = [];

    userData.forEach((user) => {
      users.push({ ...user.data(), id: user.id });
    });

    if (users.length === 0) {
      toast("Хэрэглэгч олдсонгүй.");
      return;
    }

    if (await bcrypt.compare(password, users[0].password)) {
      localStorage.setItem("currentUser", users[0].email);
      toast("Амжилттай Нэвтэрлээ");
      window.location.replace("/");
    } else {
      toast("Нууц үг буруу байна.");
    }
    // window.location.replace("/");
  };

  return (
    <div className="min-h-96 flex items-center justify-center flex-col">
      <p className="font-bold text-lg mb-2">Нэвтрэх</p>
      <Form onSubmit={submit} className="flex flex-col space-y-5">
        <Input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button type="submit">Нэвтрэх</Button>
      </Form>
    </div>
  );
}

export default Login;
