import Image from "next/image";
import axios from "axios";

export default function Home() {
  async function getUserDetails() {
		const response = await axios.get(
			"https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
		);
		return response.data;
	}
  return (
<div>Hey there</div>
  );
}
