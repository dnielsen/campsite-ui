import Axios from "axios";
import { Upload } from "../common/interfaces";
import { BASE_IMAGE_API_URL } from "../common/constants";

async function upload(fd: FormData) {
  const { data: upload } = await Axios.post<Upload>(BASE_IMAGE_API_URL, fd, {
    withCredentials: true,
  });

  return upload;
}

export default { upload };
