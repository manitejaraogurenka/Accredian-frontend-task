import axios from "axios";

export const submitReferral = async (data) => {
  try {
    const response = await axios.post("/api/referral", data);
    return response;
  } catch (error) {
    throw new Error("Error submitting referral: " + error.message);
  }
};
