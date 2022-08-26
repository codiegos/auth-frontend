import axios from "../axios";

export const getUser = async () => {
  try {
    const user = await axios.get("/user");
    return user.data;
  } catch (error) {
    console.log(error);
  }
};
