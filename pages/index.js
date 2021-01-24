import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";

export default function Home() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello</h1> 
      <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => <input onChange={onChange} value={value} />}
      />
      <Controller
        name="iceCreamType"
        control={control}
        options={[
          { value: "chocolate", label: "Chocolate" },
          { value: "strawberry", label: "Strawberry" },
          { value: "vanilla", label: "Vanilla" }
        ]}
        as={Select}
      />
      <input type="submit" />
    </form>
    </div>
  )
}
