import axios from "axios";

async function getData(number) {
  const { data: user } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + number
  );

  const { data: post } = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + number
  );

  console.log("user", user);
  console.log("post", post);
}

export default getData;
